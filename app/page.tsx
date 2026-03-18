import Link from 'next/link'

export default function Home() {
  // Demo products
  const products = [
    { sku: 'OYSTER-001', name: 'Blue Oyster Mushroom', image: '🍄' },
    { sku: 'LION-001', name: 'Lion\'s Mane', image: '🦁' },
    { sku: 'SHIITAKE-001', name: 'Shiitake', image: '🍄' },
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-grow">🍄</div>
          <h1 className="text-4xl font-bold mb-4 text-forest-400">
            Mushroom Grow Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scan your grow bag QR code for instant video instructions
          </p>
          
          {/* Demo QR Scanner */}
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-auto border border-slate-700">
            <div className="text-5xl mb-4">📱</div>
            <p className="text-gray-400 mb-4">
              Point your camera at the QR code on your grow bag
            </p>
            <div className="border-2 border-dashed border-forest-500 rounded-xl p-6 text-forest-400">
              QR Scanner Placeholder
            </div>
          </div>
        </div>

        {/* Demo Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Demo Products</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link
                key={product.sku}
                href={`/${product.sku}`}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-forest-500 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{product.image}</div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.sku}</p>
                <div className="mt-4 text-forest-400 text-sm">
                  View Guide →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="font-semibold mb-2">Video Instructions</h3>
            <p className="text-sm text-gray-400">
              Step-by-step visual guides for every mushroom variety
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🌙</div>
            <h3 className="font-semibold mb-2">Dark Mode</h3>
            <p className="text-sm text-gray-400">
              Easy viewing in grow rooms with low light
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">Mobile First</h3>
            <p className="text-sm text-gray-400">
              Optimized for phone cameras and one-handed viewing
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>Powered by Ghost Fleets AI</p>
        </footer>
      </div>
    </main>
  )
}
