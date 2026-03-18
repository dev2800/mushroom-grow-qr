import { NextRequest, NextResponse } from 'next/server'

// Demo mode - returns mock data when Supabase is not configured
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productId, location, deviceType, referrer } = body

    // In demo mode, just return success
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({
        success: true,
        demo: true,
        scan: {
          id: 'demo-' + Date.now(),
          product_id: productId,
          location: location || 'Unknown',
          device_type: deviceType || 'Mobile',
          scanned_at: new Date().toISOString(),
        },
      })
    }

    // When Supabase is configured, log the scan
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabase
      .from('scans')
      .insert({
        product_id: productId,
        location: location || null,
        device_type: deviceType || null,
        referrer: referrer || null,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, scan: data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')

  // Demo mode - return mock data
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const demoScans = [
      {
        id: '1',
        product_id: 'OYSTER-001',
        location: 'Denver, CO',
        device_type: 'iPhone',
        scanned_at: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: '2',
        product_id: 'LION-001',
        location: 'Austin, TX',
        device_type: 'Android',
        scanned_at: new Date(Date.now() - 7200000).toISOString(),
      },
    ]

    const filtered = productId
      ? demoScans.filter((s) => s.product_id === productId)
      : demoScans

    return NextResponse.json({ scans: filtered, demo: true })
  }

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    let query = supabase
      .from('scans')
      .select('*')
      .order('scanned_at', { ascending: false })
      .limit(100)

    if (productId) {
      query = query.eq('product_id', productId)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ scans: data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
