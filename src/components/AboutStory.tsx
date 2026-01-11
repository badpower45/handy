import { motion } from 'motion/react';
import { Award, Heart, Users, Leaf, Factory, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const timeline = [
  {
    year: 1998,
    title: 'The Beginning',
    description: 'Duck Handmade was founded in Port Said, Egypt, with a vision to preserve traditional leather craftsmanship.',
    image: 'https://images.unsplash.com/photo-1579782976009-cf98f14aec61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHdvcmtzaG9wJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzY4MDg5Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    year: 2005,
    title: 'Expanding Workshops',
    description: 'Opened our second workshop, employing 50+ local artisans and master craftsmen.',
    image: 'https://images.unsplash.com/photo-1711006777187-2c991e1b90b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW5zaGlwJTIwYXJ0aXNhbiUyMGhhbmRzfGVufDF8fHx8MTc2ODA4OTY5NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    year: 2015,
    title: 'Sustainability Initiative',
    description: 'Launched our eco-friendly production process and carbon-neutral commitment.',
    image: 'https://images.unsplash.com/photo-1564842505181-8862a3b9b173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxlYXRoZXIlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2ODA4OTY5NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    year: 2022,
    title: 'Digital Innovation',
    description: 'Integrated AI technology to enhance customer experience while honoring traditional methods.',
    image: 'https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRzbWFuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY4MDg5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const stats = [
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Users, value: '150+', label: 'Skilled Artisans' },
  { icon: Heart, value: '50K+', label: 'Happy Customers' },
  { icon: Leaf, value: '100%', label: 'Carbon Neutral' }
];

const values = [
  {
    icon: Factory,
    title: 'Reviving Traditional Workshops',
    description: 'We partner with local Egyptian workshops to preserve centuries-old craftsmanship techniques.',
    color: 'from-amber-600 to-amber-700'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Providing sustainable employment and training opportunities for over 150 artisans and their families.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Carbon-neutral production, ethically sourced materials, and zero-waste manufacturing processes.',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: TrendingUp,
    title: 'Innovation & Tradition',
    description: 'Blending AI-powered personalization with time-honored handcrafting techniques.',
    color: 'from-purple-600 to-purple-700'
  }
];

export function AboutStory() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="min-h-screen py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-3xl">DH</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-stone-900 dark:text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            A journey of craftsmanship, heritage, and innovation spanning over 25 years
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-900 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-stone-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-900 to-amber-800 dark:from-amber-950 dark:to-amber-900 rounded-3xl p-12 mb-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
              "To preserve and celebrate the art of traditional Egyptian leather craftsmanship while embracing modern innovation, creating exceptional footwear that tells a story of heritage, quality, and sustainable luxury."
            </p>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-12 text-center">
            Our Journey
          </h2>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-4">
              {timeline.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTimeline(index)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTimeline === index
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {item.year}
                  {activeTimeline === index && (
                    <motion.div
                      layoutId="activeTimeline"
                      className="absolute inset-0 bg-amber-600 rounded-xl -z-10"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="aspect-video lg:aspect-auto">
              <ImageWithFallback
                src={timeline[activeTimeline].image}
                alt={timeline[activeTimeline].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-6xl font-bold text-amber-600 mb-4">
                {timeline[activeTimeline].year}
              </div>
              <h3 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
                {timeline[activeTimeline].title}
              </h3>
              <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                {timeline[activeTimeline].description}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-12 text-center">
            Our Values & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-lg"
              >
                <div className={`w-14 h-14 mb-6 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
              We're committed to sustainable practices that protect our planet for future generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Carbon Neutral', value: '100%', desc: 'All operations' },
              { label: 'Renewable Energy', value: '85%', desc: 'Solar powered' },
              { label: 'Recycled Materials', value: '60%', desc: 'In packaging' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-green-600 mb-2">{item.value}</div>
                <div className="text-xl font-semibold text-stone-900 dark:text-white mb-2">
                  {item.label}
                </div>
                <div className="text-stone-600 dark:text-stone-400">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
