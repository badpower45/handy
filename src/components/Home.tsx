import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Award, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    id: '1',
    name: 'Classic Oxford',
    price: 299,
    image: 'https://images.unsplash.com/photo-1673201183138-e68d0b47dbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal'
  },
  {
    id: '2',
    name: 'Artisan Boot',
    price: 399,
    image: 'https://images.unsplash.com/photo-1700228771957-a2eafa846557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2ODA4OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual'
  },
  {
    id: '3',
    name: 'Heritage Brogue',
    price: 349,
    image: 'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyb3duJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal'
  }
];

export function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loyaltyProgress, setLoyaltyProgress] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Animation Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRzbWFuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY4MDg5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisan crafting shoes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-transparent dark:from-stone-950/95 dark:via-stone-950/80" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400" />
              <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">
                Crafted Since 1998
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Where Tradition
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Meets Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-stone-300 mb-8 max-w-2xl"
            >
              Experience premium handcrafted leather shoes, perfected by Egyptian artisans over 25+ years. Now enhanced with AI-powered personalization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('shop')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('designer')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Design Your Own</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* AI Personalized Recommendations */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
                AI-Powered Recommendations
              </span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
              We Think You'll Love
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Based on your style preferences and browsing history, our AI has curated these perfect matches for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800 aspect-square mb-4">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                    </motion.button>
                  </div>

                  {/* AI Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-semibold">AI Match</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
                      {product.name}
                    </h3>
                    <span className="text-amber-600 font-bold">${product.price}</span>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{product.category}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-sm text-stone-500 ml-2">(4.9)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program Banner */}
      <section className="py-16 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 dark:from-amber-950 dark:via-amber-900 dark:to-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-amber-300" />
                  <h3 className="text-2xl font-bold text-white">Your Loyalty Progress</h3>
                </div>
                <p className="text-amber-100 mb-6">
                  You're {100 - loyaltyProgress}% away from unlocking exclusive rewards and early access to new collections!
                </p>
                
                {/* Progress Bar */}
                <div className="relative h-4 bg-white/20 rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${loyaltyProgress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-amber-200">
                  <span>Bronze Member</span>
                  <span className="font-semibold">{loyaltyProgress}%</span>
                  <span>Silver Member</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('dashboard')}
                className="px-8 py-4 bg-white text-amber-900 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-xl"
              >
                View Rewards
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '25+ Years', desc: 'Heritage craftsmanship' },
              { icon: Sparkles, title: 'AI-Powered', desc: 'Personalized experience' },
              { icon: Heart, title: 'Handmade', desc: '100% Egyptian artisans' },
              { icon: TrendingUp, title: 'Premium', desc: 'Quality guaranteed' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-stone-900 dark:text-white">{feature.title}</h3>
                <p className="text-stone-600 dark:text-stone-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-stone-900 to-stone-800 dark:from-stone-800 dark:to-stone-900 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)' }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Design Your Perfect Shoe
              </h2>
              <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
                Use our AI-powered custom designer to create a one-of-a-kind shoe that's uniquely yours
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('designer')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold inline-flex items-center space-x-2 shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Designing</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
