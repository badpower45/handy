import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'The Art of Leather Shoe Care',
    excerpt: 'Learn how to maintain and preserve your handcrafted leather shoes for decades.',
    image: 'https://images.unsplash.com/photo-1755924648847-f733ed2818c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRzbWFuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY4MDg5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Jan 5, 2026',
    readTime: '5 min read',
    category: 'Care Guide',
    aiSummary: 'Essential maintenance tips including cleaning, conditioning, and storage methods to extend shoe lifespan.'
  },
  {
    id: 2,
    title: 'Behind the Scenes: A Day in Our Workshop',
    excerpt: 'Discover the meticulous process of handcrafting premium leather shoes in Port Said.',
    image: 'https://images.unsplash.com/photo-1711006777187-2c991e1b90b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW5zaGlwJTIwYXJ0aXNhbiUyMGhhbmRzfGVufDF8fHx8MTc2ODA4OTY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 28, 2025',
    readTime: '8 min read',
    category: 'Craftsmanship',
    aiSummary: 'An intimate look at traditional Egyptian shoe-making techniques passed through generations.'
  },
  {
    id: 3,
    title: 'Sustainable Luxury: Our Environmental Commitment',
    excerpt: 'How Duck Handmade is leading the way in eco-friendly leather production.',
    image: 'https://images.unsplash.com/photo-1564842505181-8862a3b9b173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxlYXRoZXIlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2ODA4OTY5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 20, 2025',
    readTime: '6 min read',
    category: 'Sustainability',
    aiSummary: 'Details on carbon-neutral practices, ethical sourcing, and renewable energy initiatives.'
  },
  {
    id: 4,
    title: 'Choosing the Perfect Leather Type',
    excerpt: 'A comprehensive guide to understanding different leather grades and finishes.',
    image: 'https://images.unsplash.com/photo-1673201183138-e68d0b47dbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 15, 2025',
    readTime: '7 min read',
    category: 'Education',
    aiSummary: 'Comparison of full-grain, suede, patent, and nubuck leathers with care recommendations.'
  },
  {
    id: 5,
    title: 'Style Guide: Formal vs Casual Footwear',
    excerpt: 'Master the art of choosing the right shoes for every occasion.',
    image: 'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyb3duJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 10, 2025',
    readTime: '5 min read',
    category: 'Style',
    aiSummary: 'Expert advice on matching footwear with dress codes, colors, and personal style preferences.'
  },
  {
    id: 6,
    title: 'Heritage Techniques Meet Modern Design',
    excerpt: 'How we blend 25 years of tradition with contemporary aesthetics.',
    image: 'https://images.unsplash.com/photo-1681311370373-980633672183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFraW5nJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 5, 2025',
    readTime: '6 min read',
    category: 'Innovation',
    aiSummary: 'Story of balancing traditional Egyptian craftsmanship with modern AI-enhanced customization.'
  }
];

const categories = ['All', 'Craftsmanship', 'Care Guide', 'Sustainability', 'Style', 'Innovation', 'Education'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-stone-900 dark:text-white mb-4">
            The Duck Journal
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            Stories of craftsmanship, heritage, and the art of handmade leather shoes
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex flex-wrap gap-3 bg-white dark:bg-stone-900 rounded-2xl p-3 shadow-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="relative bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <ImageWithFallback
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-stone-500 dark:text-stone-400 text-sm">
                      {articles[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 mb-6">
                    {articles[0].excerpt}
                  </p>

                  {/* AI Summary */}
                  <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-600">AI Summary</span>
                    </div>
                    <p className="text-sm text-stone-700 dark:text-stone-300">
                      {articles[0].aiSummary}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-stone-500 dark:text-stone-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-semibold shadow-lg"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-4">
                  {article.excerpt}
                </p>

                {/* AI Summary */}
                <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-600">AI Summary</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                    {article.aiSummary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-amber-900 to-amber-800 dark:from-amber-950 dark:to-amber-900 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Our Journal
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Get the latest stories, tips, and exclusive insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-amber-900 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-xl"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}