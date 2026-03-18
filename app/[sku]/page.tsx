import { notFound } from 'next/navigation'
import Link from 'next/link'

// Rich product data
const products: Record<string, {
  name: string
  scientific: string
  videoUrl: string
  emoji: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  yield: string
  timeToHarvest: string
  temp: string
  humidity: string
  light: string
  co2: string
  steps: { day: string; title: string; desc: string; tip: string }[]
  commonIssues: { problem: string; cause: string; solution: string }[]
  nutrition: { name: string; amount: string; benefit: string }[]
  history: string
  color: string
}> = {
  'OYSTER-001': {
    name: 'Blue Oyster Mushroom',
    scientific: 'Pleurotus ostreatus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    emoji: '💙',
    difficulty: 'Beginner',
    yield: '1-2 lbs per bag',
    timeToHarvest: '14-21 days',
    temp: '55-75°F (13-24°C)',
    humidity: '85-95%',
    light: 'Indirect light 12h/day',
    co2: '400-1000 ppm (fresh air)',
    color: 'from-blue-600/20 to-cyan-600/20',
    history: 'Oyster mushrooms have been cultivated for centuries, first documented in Germany during World War I as a food source. They\'re now one of the most popular home-grown mushrooms worldwide.',
    steps: [
      { day: 'Day 1-3', title: 'Prepare Your Grow Space', desc: 'Find a clean, temperature-controlled area away from direct sunlight.', tip: 'A closet or basement corner works great!' },
      { day: 'Day 4-7', title: 'Cut & Mist', desc: 'Cut an X in the bag (2" each line). Mist the opening 3x daily with filtered water.', tip: 'Never mist directly on mycelium — aim above it.' },
      { day: 'Day 8-12', title: 'Wait for Pins', desc: 'Tiny mushroom "pins" will emerge from the cut. Reduce misting to 2x daily.', tip: 'Pins look like tiny white dots — be patient!' },
      { day: 'Day 13-18', title: 'Rapid Growth', desc: 'Mushrooms double in size daily. Maintain humidity and fresh air.', tip: 'Fan the bag 2x daily for fresh air exchange.' },
      { day: 'Day 19-21', title: 'Harvest Time', desc: 'Harvest when caps begin to flatten but before edges curl upward.', tip: 'Twist and pull gently — don\'t cut!' },
    ],
    commonIssues: [
      { problem: 'Mushrooms growing long and thin', cause: 'High CO2 levels', solution: 'Fan more frequently or move to area with better air circulation' },
      { problem: 'Caps are small or deformed', cause: 'Low humidity', solution: 'Mist more often, consider using a humidity tent' },
      { problem: 'Green mold appearing', cause: 'Contamination', solution: 'Remove affected area immediately, improve sterile technique' },
      { problem: 'No pins after 2 weeks', cause: 'Temperature too high/low', solution: 'Move to 65-70°F location, ensure proper humidity' },
    ],
    nutrition: [
      { name: 'Protein', amount: '3.3g per 100g', benefit: 'Muscle building, tissue repair' },
      { name: 'Fiber', amount: '2.3g per 100g', benefit: 'Digestive health, satiety' },
      { name: 'Vitamin D', amount: '29 IU per 100g', benefit: 'Bone health, immune support' },
      { name: 'Potassium', amount: '420mg per 100g', benefit: 'Heart health, muscle function' },
      { name: 'Antioxidants', amount: 'High', benefit: 'Cell protection, anti-inflammatory' },
    ],
  },
  'LION-001': {
    name: "Lion's Mane",
    scientific: 'Hericium erinaceus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    emoji: '🧡',
    difficulty: 'Intermediate',
    yield: '1-1.5 lbs per block',
    timeToHarvest: '21-28 days',
    temp: '65-75°F (18-24°C)',
    humidity: '90-95%',
    light: 'Low light 12h/day',
    co2: '400-800 ppm',
    color: 'from-amber-600/20 to-orange-600/20',
    history: 'Lion\'s Mane has been used in traditional Chinese medicine for centuries as a "brain tonic." Modern research suggests it may support cognitive function and nerve health.',
    steps: [
      { day: 'Day 1-5', title: 'Colonize Phase', desc: 'Keep block in dark, warm location. Do not open bag yet.', tip: 'Patience is key — let mycelium strengthen.' },
      { day: 'Day 6-10', title: 'Initiate Fruiting', desc: 'Remove block from bag, place in fruiting chamber with high humidity.', tip: 'A plastic tote with perlite works great.' },
      { day: 'Day 11-15', title: 'First Pins', desc: 'Small white "teeth" will begin forming. Maintain 90%+ humidity.', tip: 'Mist the chamber walls, not the block directly.' },
      { day: 'Day 16-21', title: 'Teeth Development', desc: 'Characteristic cascading teeth grow longer. Ensure fresh air.', tip: 'Teeth should grow downward naturally.' },
      { day: 'Day 22-28', title: 'Harvest', desc: 'Harvest when teeth are 1-2 inches long and still white.', tip: 'Cut at base with clean knife — harvest entire cluster.' },
    ],
    commonIssues: [
      { problem: 'Orange/brown discoloration', cause: 'Age or bacterial contamination', solution: 'Harvest immediately, trim affected areas' },
      { problem: 'Short, stubby teeth', cause: 'Low humidity or high CO2', solution: 'Increase misting, add fresh air exchanges' },
      { problem: 'Slow or no growth', cause: 'Temperature fluctuation', solution: 'Maintain steady 70°F, avoid drafts' },
      { problem: 'Slimy texture', cause: 'Over-misting or bacterial infection', solution: 'Reduce misting, improve air circulation' },
    ],
    nutrition: [
      { name: 'Beta-glucans', amount: 'High', benefit: 'Immune support, gut health' },
      { name: 'Hericenones', amount: 'Unique compound', benefit: 'Nerve growth factor support' },
      { name: 'Erinacines', amount: 'Unique compound', benefit: 'Brain health, cognitive function' },
      { name: 'Protein', amount: '2.4g per 100g', benefit: 'Lean muscle support' },
      { name: 'Potassium', amount: '364mg per 100g', benefit: 'Electrolyte balance' },
    ],
  },
  'SHIITAKE-001': {
    name: 'Shiitake',
    scientific: 'Lentinula edodes',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    emoji: '💚',
    difficulty: 'Beginner',
    yield: '1-3 lbs per block',
    timeToHarvest: '7-14 days',
    temp: '60-70°F (15-21°C)',
    humidity: '80-90%',
    light: 'Indirect light 8-12h/day',
    co2: '400-1000 ppm',
    color: 'from-emerald-600/20 to-green-600/20',
    history: 'Shiitake has been cultivated in Japan and China for over 1,000 years. The name means "oak mushroom" in Japanese, referring to the logs traditionally used for growing.',
    steps: [
      { day: 'Day 1', title: 'Cold Shock', desc: 'Submerge block in cold water (50°F) for 12-24 hours.', tip: 'Use ice packs or refrigerated water.' },
      { day: 'Day 2-3', title: 'Drain & Rest', desc: 'Remove from water, let drain for 2 hours. Place in fruiting chamber.', tip: 'Don\'t skip the draining step!' },
      { day: 'Day 4-7', title: 'Pin Formation', desc: 'Bumps form on block surface. Maintain humidity at 80-90%.', tip: 'These bumps will become mushrooms!' },
      { day: 'Day 8-12', title: 'Rapid Growth', desc: 'Caps expand rapidly. Maintain fresh air and humidity.', tip: 'Mist chamber, not mushrooms directly.' },
      { day: 'Day 13-14', title: 'First Harvest', desc: 'Harvest when caps are 70-80% open, before edges flatten.', tip: 'Twist and pull — don\'t cut the stem.' },
    ],
    commonIssues: [
      { problem: 'Bloom (white fuzz on caps)', cause: 'High humidity during growth', solution: 'Reduce misting, improve air circulation' },
      { problem: 'Thick stems, small caps', cause: 'High CO2 levels', solution: 'Increase fresh air exchange, fan more often' },
      { problem: 'Cracked caps', cause: 'Humidity fluctuation', solution: 'Keep humidity stable — cracked caps are actually prized!' },
      { problem: 'Slow growth', cause: 'Temperature too low', solution: 'Move to warmer location (65-70°F ideal)' },
    ],
    nutrition: [
      { name: 'Vitamin D', amount: '154 IU per 100g', benefit: 'Bone health, immune support (highest of any mushroom!)' },
      { name: 'Lentinan', amount: 'Unique compound', benefit: 'Immune support, studied for cancer support' },
      { name: 'Copper', amount: '0.3mg per 100g', benefit: 'Iron absorption, energy production' },
      { name: 'Selenium', amount: '5.7mcg per 100g', benefit: 'Antioxidant, thyroid support' },
      { name: 'B Vitamins', amount: 'B2, B3, B5', benefit: 'Energy, brain function' },
    ],
  },
}

export default function ProductPage({ params }: { params: { sku: string } }) {
  const product = products[params.sku]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition-colors">← Back to All Products</Link>
        </nav>

        {/* Header */}
        <div className={`glass rounded-3xl p-8 mb-8 bg-gradient-to-br ${product.color}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-7xl animate-grow">{product.emoji}</div>
            <div className="flex-1">
              <div className="text-sm text-gray-400 italic mb-1">{product.scientific}</div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  product.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {product.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
                  Harvest: {product.timeToHarvest}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
                  Yield: {product.yield}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Requirements */}
        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🌡️</span> Optimal Environment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">🌡️</div>
              <div className="font-semibold">{product.temp}</div>
              <div className="text-xs text-gray-400">Temperature</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">💧</div>
              <div className="font-semibold">{product.humidity}</div>
              <div className="text-xs text-gray-400">Humidity</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">☀️</div>
              <div className="font-semibold text-sm">{product.light}</div>
              <div className="text-xs text-gray-400">Light</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">💨</div>
              <div className="font-semibold">{product.co2}</div>
              <div className="text-xs text-gray-400">CO2 Level</div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-container mb-8">
          <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-forest-600/30 flex items-center justify-center mx-auto mb-4 pulse-glow">
                <span className="text-4xl">▶️</span>
              </div>
              <p className="text-gray-300 font-medium">Video Guide</p>
              <p className="text-sm text-gray-500 mt-2">
                (Client-provided video will be embedded here)
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>📋</span> Growing Timeline
          </h2>
          <div className="space-y-6">
            {product.steps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-forest-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="text-forest-400 font-mono text-sm">{step.day}</span>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-2">{step.desc}</p>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2 text-sm text-amber-300">
                      💡 {step.tip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>🔧</span> Troubleshooting Guide
          </h2>
          <div className="space-y-4">
            {product.commonIssues.map((issue, index) => (
              <details key={index} className="bg-white/5 rounded-xl group">
                <summary className="px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-colors">
                  <span className="font-medium">{issue.problem}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-red-400 font-medium">Cause:</span>
                    <span className="text-gray-300">{issue.cause}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400 font-medium">Solution:</span>
                    <span className="text-gray-300">{issue.solution}</span>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Nutrition */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>🥗</span> Nutritional Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.nutrition.map((nutrient, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4">
                <div className="font-semibold text-forest-400 mb-1">{nutrient.name}</div>
                <div className="text-sm text-gray-300 mb-1">{nutrient.amount}</div>
                <div className="text-xs text-gray-500">{nutrient.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>📜</span> History & Background
          </h2>
          <p className="text-gray-300 leading-relaxed">{product.history}</p>
        </div>

        {/* Support CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-gray-400 mb-6">Our mycology experts are standing by to help you succeed.</p>
          <button className="bg-forest-600 hover:bg-forest-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
            Chat with an Expert
          </button>
        </div>
      </div>
    </main>
  )
}
