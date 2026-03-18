import Link from 'next/link'
import { Suspense } from 'react'

// Demo products with rich data
const products = [
  { 
    sku: 'OYSTER-001', 
    name: 'Blue Oyster Mushroom',
    scientific: 'Pleurotus ostreatus',
    image: '🍄',
    difficulty: 'Beginner',
    yield: '1-2 lbs per bag',
    timeToHarvest: '14-21 days',
    temp: '55-75°F',
    humidity: '85-95%',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    emoji: '💙',
  },
  { 
    sku: 'LION-001', 
    name: "Lion's Mane",
    scientific: 'Hericium erinaceus',
    image: '🦁',
    difficulty: 'Intermediate',
    yield: '1-1.5 lbs per block',
    timeToHarvest: '21-28 days',
    temp: '65-75°F',
    humidity: '90-95%',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    emoji: '🧡',
  },
  { 
    sku: 'SHIITAKE-001', 
    name: 'Shiitake',
    scientific: 'Lentinula edodes',
    image: '🍄',
    difficulty: 'Beginner',
    yield: '1-3 lbs per block',
    timeToHarvest: '7-14 days',
    temp: '60-70°F',
    humidity: '80-90%',
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
    emoji: '💚',
  },
]

const features = [
  { 
    icon: '🎥', 
    title: 'HD Video Guides', 
    desc: 'Crystal-clear instructions filmed by expert cultivators',
    color: 'text-blue-400',
  },
  { 
    icon: '🔬', 
    title: 'Scientific Backing', 
    desc: 'Every technique backed by mycology research',
    color: 'text-purple-400',
  },
  { 
    icon: '📱', 
    title: 'Works Offline', 
    desc: 'Download videos for your grow room (no signal needed)',
    color: 'text-green-400',
  },
  { 
    icon: '💬', 
    title: 'Expert Support', 
    desc: 'Chat with mycologists when you need help',
    color: 'text-amber-400',
  },
  { 
    icon: '📊', 
    title: 'Progress Tracking', 
    desc: 'Log your grow journey with photos and notes',
    color: 'text-pink-400',
  },
  { 
    icon: '🌡️', 
    title: 'Environment Tips', 
    desc: 'Real-time advice for your specific setup',
    color: 'text-red-400',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-8xl opacity-10 animate-float">🍄</div>
          <div className="absolute top-40 right-20 text-6xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🦁</div>
          <div className="absolute bottom-20 left-1/4 text-7xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🍄</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          {/* Logo/Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="glass rounded-full px-6 py-2 flex items-center gap-2">
              <span className="text-2xl animate-grow">🍄</span>
              <span className="text-sm font-medium text-gray-300">Powered by MycoTech</span>
            </div>
          </div>

          {/* Main Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-forest-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              Mushroom Grow Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Scan your grow bag. Watch expert videos. 
              <span className="text-forest-400"> Grow perfect mushrooms.</span>
            </p>
            
            {/* QR Scanner CTA */}
            <div className="glass rounded-3xl p-8 max-w-lg mx-auto glow-forest">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-forest-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 pulse-glow">
                  <span className="text-6xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Point Camera at QR Code</h3>
                <p className="text-gray-400 text-sm mb-4">On your grow bag packaging</p>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-forest-500 rounded-full animate-pulse"></span>
                  No app download required
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Or Select Your Product</h2>
              <p className="text-gray-400">Browse our supported grow kits</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.sku}
                  href={`/${product.sku}`}
                  className={`glass rounded-2xl p-6 border ${product.borderColor} card-hover group`}
                >
                  <div className={`bg-gradient-to-br ${product.color} rounded-xl p-4 mb-4`}>
                    <div className="text-5xl mb-2">{product.image}</div>
                    <div className="text-xs text-gray-400 italic">{product.scientific}</div>
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.sku}</p>
                    </div>
                    <span className="text-2xl">{product.emoji}</span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className={product.difficulty === 'Beginner' ? 'text-green-400' : 'text-amber-400'}>
                        {product.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Harvest:</span>
                      <span className="text-white">{product.timeToHarvest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yield:</span>
                      <span className="text-white">{product.yield}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-forest-400 group-hover:text-forest-300 transition-colors">
                    <span className="text-sm font-medium">View Full Guide</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Why Grow With Us?</h2>
              <p className="text-gray-400">Everything you need for success</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="glass rounded-xl p-6 text-center">
                  <div className={`text-4xl mb-3 ${feature.color}`}>{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="glass rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-forest-400 mb-1">50K+</div>
                <div className="text-sm text-gray-400">Successful Grows</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">4.9★</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto text-center mb-16">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-lg italic text-gray-300 mb-4">
              "I've tried growing mushrooms for years with no luck. This guide made it so simple — 
              my first Lion's Mane harvest was perfect!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">JM</div>
              <div className="text-left">
                <div className="font-medium">Jake M.</div>
                <div className="text-xs text-gray-500">First-time grower, Denver CO</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Ready to start growing?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/OYSTER-001" className="bg-forest-600 hover:bg-forest-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
                Start with Oyster →
              </Link>
              <Link href="/LION-001" className="glass hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍄</span>
              <span className="font-semibold">Mushroom Grow Guide</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/OYSTER-001" className="hover:text-white transition-colors">Oyster</Link>
              <Link href="/LION-001" className="hover:text-white transition-colors">Lion's Mane</Link>
              <Link href="/SHIITAKE-001" className="hover:text-white transition-colors">Shiitake</Link>
            </div>
            <div className="text-sm text-gray-500">
              Powered by <span className="text-forest-400">Ghost Fleets AI</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
