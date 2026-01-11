import { motion } from 'motion/react';
import { Package, Star, TrendingUp, Award, Sparkles, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const orders = [
  {
    id: 'ORD-2024-001',
    product: 'Classic Oxford',
    status: 'Delivered',
    date: 'Jan 5, 2026',
    price: 299,
    tracking: [
      { stage: 'Order Placed', date: 'Dec 28', completed: true },
      { stage: 'In Production', date: 'Dec 29', completed: true },
      { stage: 'Quality Check', date: 'Jan 2', completed: true },
      { stage: 'Shipped', date: 'Jan 3', completed: true },
      { stage: 'Delivered', date: 'Jan 5', completed: true }
    ]
  },
  {
    id: 'ORD-2024-002',
    product: 'Heritage Brogue',
    status: 'In Transit',
    date: 'Jan 8, 2026',
    price: 349,
    tracking: [
      { stage: 'Order Placed', date: 'Jan 6', completed: true },
      { stage: 'In Production', date: 'Jan 7', completed: true },
      { stage: 'Quality Check', date: 'Jan 8', completed: true },
      { stage: 'Shipped', date: 'Jan 9', completed: true },
      { stage: 'Delivered', date: 'Est. Jan 12', completed: false }
    ]
  }
];

const stylingTips = [
  {
    title: 'Formal Event Styling',
    description: 'Pair your Classic Oxford with a navy suit for a timeless, sophisticated look.',
    confidence: 95
  },
  {
    title: 'Casual Weekend Look',
    description: 'Your brown loafers work perfectly with chinos and a crisp white shirt.',
    confidence: 88
  },
  {
    title: 'Business Casual',
    description: 'Derby shoes complement grey trousers and a blazer for professional settings.',
    confidence: 92
  }
];

export function UserDashboard() {
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);
  const loyaltyPoints = 1250;
  const nextTier = 2000;
  const progress = (loyaltyPoints / nextTier) * 100;

  return (
    <div className="min-h-screen py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Welcome Back, Ahmed!
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400">
            Manage your orders, rewards, and get personalized styling tips
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8" />
              <span className="text-2xl font-bold">{loyaltyPoints}</span>
            </div>
            <h3 className="font-semibold mb-1">Loyalty Points</h3>
            <p className="text-amber-100 text-sm">
              {nextTier - loyaltyPoints} points to Silver tier
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-stone-900 dark:text-white">12</span>
            </div>
            <h3 className="font-semibold text-stone-900 dark:text-white mb-1">Total Orders</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm">
              Since joining in 2023
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold text-stone-900 dark:text-white">4.9</span>
            </div>
            <h3 className="font-semibold text-stone-900 dark:text-white mb-1">Avg. Rating</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm">
              Your reviews help us improve
            </p>
          </motion.div>
        </div>

        {/* Loyalty Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950 rounded-3xl p-8 mb-12 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Loyalty Program</h2>
              <p className="text-purple-200">Current Tier: Bronze Member</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{Math.round(progress)}%</div>
              <div className="text-sm text-purple-200">to next tier</div>
            </div>
          </div>

          <div className="relative h-4 bg-white/20 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"
            />
          </div>

          <div className="flex justify-between text-sm text-purple-200">
            <span>Bronze (Current)</span>
            <span>Silver ({nextTier} pts)</span>
            <span>Gold (5000 pts)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Order Tracking */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">
              Order Tracking
            </h2>

            {/* Order Tabs */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {orders.map(order => (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedOrder.id === order.id
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {order.id}
                </button>
              ))}
            </div>

            {/* Order Details */}
            <div className="mb-6 p-4 bg-stone-50 dark:bg-stone-800 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-stone-900 dark:text-white">
                  {selectedOrder.product}
                </span>
                <span className="text-amber-600 font-bold">${selectedOrder.price}</span>
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                Order Date: {selectedOrder.date}
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="space-y-4">
              {selectedOrder.tracking.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed
                          ? 'bg-green-500'
                          : 'bg-stone-200 dark:bg-stone-800'
                      }`}
                    >
                      {step.completed ? (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 bg-stone-400 rounded-full" />
                      )}
                    </div>
                    {index < selectedOrder.tracking.length - 1 && (
                      <div
                        className={`absolute top-10 left-5 w-0.5 h-8 ${
                          step.completed
                            ? 'bg-green-500'
                            : 'bg-stone-200 dark:bg-stone-800'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-semibold ${
                        step.completed
                          ? 'text-stone-900 dark:text-white'
                          : 'text-stone-500 dark:text-stone-500'
                      }`}
                    >
                      {step.stage}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {step.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Styling Tips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
                AI Styling Tips
              </h2>
            </div>

            <p className="text-stone-600 dark:text-stone-400 mb-6">
              Personalized recommendations based on your collection and style preferences
            </p>

            <div className="space-y-4">
              {stylingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-stone-900 dark:text-white">
                      {tip.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-semibold">{tip.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 mb-4">
                    {tip.description}
                  </p>
                  <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                    <span>View full guide</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rewards & Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-8">
            Your Rewards & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '10% Off Next Order',
                desc: 'Valid for 30 days',
                code: 'LOYAL10',
                color: 'from-amber-600 to-amber-700'
              },
              {
                title: 'Free Express Shipping',
                desc: '2 uses remaining',
                code: 'SHIP2X',
                color: 'from-blue-600 to-blue-700'
              },
              {
                title: 'Priority Customer Support',
                desc: 'Active',
                code: 'VIP',
                color: 'from-purple-600 to-purple-700'
              }
            ].map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${reward.color} rounded-2xl p-6 text-white shadow-xl`}
              >
                <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                <p className="text-white/80 mb-4">{reward.desc}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <code className="font-mono font-semibold">{reward.code}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}