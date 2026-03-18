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
    successRate: 98,
    totalGrows: 12500,
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
    successRate: 95,
    totalGrows: 8200,
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
    successRate: 97,
    totalGrows: 15300,
  },
]

const features = [
  { 
    icon: '🎥', 
    title: 'HD Video Guides', 
    desc: 'Crystal-clear instructions filmed by expert cultivators',
    color: 'text-blue-400',
    stat: '50+ hours',
  },
  { 
    icon: '🔬', 
    title: 'Science-Backed', 
    desc: 'Every technique verified by mycology research',
    color: 'text-purple-400',
    stat: '100% researched',
  },
  { 
    icon: '📱', 
    title: 'Works Offline', 
    desc: 'Download videos for your grow room (no signal needed)',
    color: 'text-green-400',
    stat: 'Offline ready',
  },
  { 
    icon: '💬', 
    title: 'Expert Chat', 
    desc: 'Chat with certified mycologists when you need help',
    color: 'text-amber-400',
    stat: '24/7 available',
  },
  { 
    icon: '📊', 
    title: 'Grow Tracking', 
    desc: 'Log your journey with photos, notes, and milestones',
    color: 'text-pink-400',
    stat: 'Auto-reminders',
  },
  { 
    icon: '🏆', 
    title: 'Certification', 
    desc: 'Earn badges and certificates as you master each variety',
    color: 'text-yellow-400',
    stat: '12 badges',
  },
]

const testimonials = [
  {
    quote: "I've tried growing mushrooms for years with no luck. This guide made it so simple — my first Lion's Mane harvest was perfect!",
    author: 'Jake M.',
    location: 'Denver, CO',
    variety: "Lion's Mane",
    yield: '1.2 lbs',
    image: 'JM',
  },
  {
    quote: "The troubleshooting section saved my grow. I had green mold and the guide walked me through exactly what to do.",
    author: 'Sarah T.',
    location: 'Austin, TX',
    variety: 'Oyster',
    yield: '1.8 lbs',
    image: 'ST',
  },
  {
    quote: "Being able to track my progress and see other growers' success motivated me to keep going. Now I'm on my 5th grow!",
    author: 'Mike R.',
    location: 'Portland, OR',
    variety: 'Shiitake',
    yield: '2.5 lbs',
    image: 'MR',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay relative">
      {/* Floating background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-5 particle" style={{ animationDelay: '0s' }}>🍄</div>
        <div className="absolute top-40 right-20 text-6xl opacity-5 particle" style={{ animationDelay: '2s' }}>🦁</div>
        <div className="absolute bottom-20 left-1/4 text-7xl opacity-5 particle" style={{ animationDelay: '4s' }}>🍄</div>
        <div className="absolute top-60 left-1/2 text-5xl opacity-5 particle" style={{ animationDelay: '1s' }}>🌿</div>
        <div className="absolute bottom-40 right-1/3 text-6xl opacity-5 particle" style={{ animationDelay: '3s' }}>🌱</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-2xl animate-grow">🍄</span>
            <span className="text-sm font-medium text-gray-300">Powered by MycoTech</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Features
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-forest-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Trusted by 36,000+ home growers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-forest-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              Mushroom Grow Guide
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Scan your grow bag. Watch expert videos.
          </p>
          <p className="text-lg text-forest-400 mb-10">
            Grow perfect mushrooms. Every time.
          </p>
          
          {/* QR Scanner CTA */}
          <div className="glass-dark rounded-3xl p-8 max-w-md mx-auto glow-forest mb-8">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-2xl bg-forest-500/20 animate-ping"></div>
                <div className="absolute inset-2 rounded-xl bg-forest-500/30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-forest-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <span className="text-7xl">📱</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Point Camera at QR Code</h3>
              <p className="text-gray-400 text-sm mb-4">On your grow bag packaging</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  No app required
                </span>
                <span className="text-gray-600">•</span>
                <span>Instant access</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
            <div className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-forest-400">36K+</div>
              <div className="text-xs text-gray-400">Active Growers</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-amber-400">97%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400">4.9★</div>
              <div className="text-xs text-gray-400">User Rating</div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="mb-20" id="products">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Choose Your Mushroom</h2>
            <p className="text-gray-400">Select your grow kit to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.sku}
                href={`/${product.sku}`}
                className={`glass rounded-2xl overflow-hidden border ${product.borderColor} card-hover group`}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${product.color} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 shimmer"></div>
                  <div className="relative">
                    <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{product.image}</div>
                    <div className="text-xs text-gray-400 italic">{product.scientific}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.sku}</p>
                    </div>
                    <span className="text-2xl">{product.emoji}</span>
                  </div>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-xs text-gray-500">Harvest</div>
                      <div className="text-sm font-medium">{product.timeToHarvest}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-xs text-gray-500">Yield</div>
                      <div className="text-sm font-medium">{product.yield}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-xs text-gray-500">Success</div>
                      <div className="text-sm font-medium text-forest-400">{product.successRate}%</div>
                    </div>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      product.difficulty === 'Beginner' 
                        ? 'badge-beginner' 
                        : 'badge-intermediate'
                    }`}>
                      {product.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{product.totalGrows.toLocaleString()} grows</span>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between text-forest-400 group-hover:text-forest-300 transition-colors">
                    <span className="text-sm font-medium">View Full Guide</span>
                    <span className="group-hover:translate-x-2 transition-transform text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20" id="features">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Everything You Need</h2>
            <p className="text-gray-400">Tools and resources for growing success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <div className={`text-5xl mb-4 ${feature.color}`}>{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{feature.desc}</p>
                <div className="text-xs text-forest-400 font-medium">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof - Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
            <p className="text-gray-400">Real growers, real results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="text-4xl mb-4">💬</div>
                <blockquote className="text-gray-300 mb-6 text-sm leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-500 to-emerald-600 flex items-center justify-center font-bold">
                    {t.image}
                  </div>
                  <div>
                    <div className="font-medium">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{t.variety}</span>
                  <span className="text-forest-400 font-medium">{t.yield} yield</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20" id="pricing">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Simple Pricing</h2>
            <p className="text-gray-400">Start free, upgrade when ready</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-bold mb-4">$0</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Basic video guides
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Growing timeline
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Troubleshooting FAQ
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span>✗</span> Expert chat support
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors">
                Get Started Free
              </button>
            </div>
            
            {/* Pro Tier */}
            <div className="glass rounded-2xl p-6 text-center border-2 border-forest-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-600 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-4xl mb-4">🍄</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-1">$9<span className="text-lg text-gray-400">/mo</span></div>
              <div className="text-xs text-gray-500 mb-4">or $79/year (save 27%)</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Expert chat support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Offline downloads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Grow tracking & photos
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-sm font-bold transition-colors">
                Start 7-Day Free Trial
              </button>
            </div>
            
            {/* Enterprise Tier */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> White-label branding
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Custom QR codes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-400">✓</span> Analytics dashboard
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="glass-dark rounded-3xl p-12 max-w-2xl mx-auto glow-forest">
            <div className="text-6xl mb-6 animate-grow">🍄</div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Growing?</h2>
            <p className="text-gray-400 mb-8">
              Join 36,000+ successful home growers. Your first harvest is closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/OYSTER-001" className="bg-forest-600 hover:bg-forest-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-center">
                Start with Oyster →
              </Link>
              <Link href="#products" className="glass hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all text-center">
                See All Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍄</span>
                <span className="font-bold text-lg">GrowGuide</span>
              </div>
              <p className="text-sm text-gray-400">
                Making mushroom cultivation accessible to everyone, one grow at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/OYSTER-001" className="block hover:text-white transition-colors">Blue Oyster</Link>
                <Link href="/LION-001" className="block hover:text-white transition-colors">Lion's Mane</Link>
                <Link href="/SHIITAKE-001" className="block hover:text-white transition-colors">Shiitake</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#features" className="block hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <Link href="#" className="block hover:text-white transition-colors">Support</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">About</Link>
                <Link href="#" className="block hover:text-white transition-colors">Blog</Link>
                <Link href="#" className="block hover:text-white transition-colors">Careers</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-sm text-gray-500">
              © 2026 Mushroom Grow Guide. All rights reserved.
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
