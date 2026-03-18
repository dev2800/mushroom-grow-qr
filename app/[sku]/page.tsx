import { notFound } from 'next/navigation'

// Demo product data
const products: Record<string, { name: string; videoUrl: string; steps: string[] }> = {
  'OYSTER-001': {
    name: 'Blue Oyster Mushroom',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    steps: [
      'Prepare your grow bag by cutting the top corner',
      'Mist the substrate lightly with water',
      'Place in a warm, dark location (70-75°F)',
      'Wait 7-14 days for mycelium colonization',
      'Cut an X in the bag when pins form',
      'Mist 2-3 times daily and provide fresh air',
      'Harvest when caps begin to flatten',
    ],
  },
  'LION-001': {
    name: "Lion's Mane",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Remove block from bag and place in fruiting chamber',
      'Maintain humidity at 85-95%',
      'Keep temperature between 65-75°F',
      'Provide indirect light (12 hours on/off)',
      'Mist 3-4 times daily',
      'Harvest when teeth are 1-2 inches long',
      'Store in refrigerator for up to 2 weeks',
    ],
  },
  'SHIITAKE-001': {
    name: 'Shiitake',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      'Soak block in cold water for 12-24 hours',
      'Remove and let drain for 2 hours',
      'Place in fruiting chamber at 60-70°F',
      'Maintain 80-90% humidity',
      'Provide indirect light',
      'First flush in 7-14 days',
      'Harvest before caps fully flatten',
    ],
  },
}

export default function ProductPage({ params }: { params: { sku: string } }) {
  const product = products[params.sku]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🍄</div>
          <h1 className="text-3xl font-bold text-forest-400 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-400">SKU: {params.sku}</p>
        </div>

        {/* Video Player */}
        <div className="video-container mb-8">
          <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-400">
                Video instructions would play here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Demo mode - video hosting requires client assets)
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>📋</span> Growing Steps
          </h2>
          <ol className="space-y-4">
            {product.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-mushroom-900/30 rounded-xl p-6 border border-mushroom-700">
          <h3 className="font-semibold mb-3 text-mushroom-300">💡 Pro Tips</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Keep your grow bag away from direct sunlight</li>
            <li>• Use filtered or distilled water for misting</li>
            <li>• Clean hands and tools before handling</li>
            <li>• Be patient — mushrooms grow on their own schedule!</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Need help or want to order more?</p>
          <a
            href="#"
            className="inline-block bg-forest-600 hover:bg-forest-500 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Contact Support
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-gray-500 hover:text-gray-300 text-sm">
            ← Back to all products
          </a>
        </div>
      </div>
    </main>
  )
}
