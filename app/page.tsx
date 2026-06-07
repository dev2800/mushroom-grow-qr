import Link from 'next/link'
import { Suspense } from 'react'

// Demo products with rich data
const products = [
  {
    sku: 'OYSTER-001',
    name: 'Blue Oyster Mushroom',
    scientific: 'Pleurotus ostreatus',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
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

const FeatureIcon = ({ id }: { id: number }) => {
  const icons = [
    // Video
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>,
    // Science/flask
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>,
    // Lightning/offline
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
    // Chat
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg>,
    // Chart
    <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>,
    // Trophy
    <svg key={5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/></svg>,
  ]
  return icons[id] ?? null
}

const features = [
  { title: 'HD Video Guides',  desc: 'Crystal-clear instructions filmed by expert cultivators', color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20',   stat: '50+ hours' },
  { title: 'Science-Backed',   desc: 'Every technique verified by mycology research',            color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', stat: '100% researched' },
  { title: 'Works Offline',    desc: 'Download videos for your grow room, no signal needed',     color: 'text-green-400',  bg: 'bg-green-500/10 border-green-500/20',   stat: 'Offline ready' },
  { title: 'Expert Chat',      desc: 'Chat with certified mycologists when you need help',        color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20',   stat: '24/7 available' },
  { title: 'Grow Tracking',    desc: 'Log your journey with photos, notes, and milestones',      color: 'text-pink-400',   bg: 'bg-pink-500/10 border-pink-500/20',     stat: 'Auto-reminders' },
  { title: 'Certification',    desc: 'Earn badges and certificates as you master each variety',   color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', stat: '12 badges' },
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
      {/* Ambient glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-green-600/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-700/5 rounded-full blur-[80px]" />
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
                <div className="absolute inset-0 rounded-2xl bg-forest-500/20 animate-ping"></div>
                <div className="absolute inset-2 rounded-xl bg-forest-500/15 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-forest-600/80 to-emerald-700/80 rounded-2xl flex items-center justify-center border border-forest-400/30 backdrop-blur-sm">
                  {/* QR code pattern SVG */}
                  <svg viewBox="0 0 80 80" className="w-20 h-20 text-white/90" fill="currentColor">
                    <rect x="5" y="5" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                    <rect x="11" y="11" width="16" height="16" rx="1"/>
                    <rect x="47" y="5" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                    <rect x="53" y="11" width="16" height="16" rx="1"/>
                    <rect x="5" y="47" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                    <rect x="11" y="53" width="16" height="16" rx="1"/>
                    <rect x="47" y="47" width="8" height="8" rx="1"/>
                    <rect x="59" y="47" width="8" height="8" rx="1"/>
                    <rect x="47" y="59" width="8" height="8" rx="1"/>
                    <rect x="59" y="59" width="8" height="8" rx="1"/>
                    <rect x="35" y="5" width="8" height="8" rx="1"/>
                    <rect x="5" y="35" width="8" height="8" rx="1"/>
                    <rect x="35" y="35" width="8" height="8" rx="1"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Point Camera at QR Code</h3>
              <p className="text-gray-400 text-sm mb-4">On your grow bag packaging</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
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
                {/* Header with real photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-gray-300 italic font-light">{product.scientific}</div>
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
              <div key={i} className="glass rounded-2xl p-6 card-hover group">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} border flex items-center justify-center mb-5 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <FeatureIcon id={i} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{feature.desc}</p>
                <div className={`text-xs font-medium ${feature.color}`}>{feature.stat}</div>
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
            <div className="w-16 h-16 rounded-2xl bg-forest-500/20 border border-forest-400/30 flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-forest-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>
            </div>
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
