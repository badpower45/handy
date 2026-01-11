import { motion } from 'motion/react';
import { Star, Heart, ShoppingCart, Sparkles, Award, Leaf, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from './CartContext';

interface ProductDetailProps {
  productId: string | null;
  onNavigate: (page: string) => void;
}

const productData = {
  '1': {
    name: 'Classic Oxford',
    price: 299,
    images: [
      'https://images.unsplash.com/photo-1673201183138-e68d0b47dbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyb3duJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    description: 'Handcrafted with premium full-grain leather, our Classic Oxford embodies timeless elegance. Each pair is meticulously crafted by skilled Egyptian artisans using traditional techniques passed down through generations.',
    category: 'Formal',
    rating: 4.9,
    reviews: 124,
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Black', 'Brown', 'Cognac'],
    features: [
      'Full-grain Italian leather',
      'Goodyear welt construction',
      'Natural cork footbed',
      'Genuine leather sole',
      'Handcrafted in Egypt'
    ],
    sustainability: ['Carbon neutral', 'Vegan options', 'Recycled packaging']
  }
};

const relatedProducts = [
  {
    id: '2',
    name: 'Heritage Brogue',
    price: 349,
    image: 'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyb3duJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3',
    name: 'Executive Derby',
    price: 329,
    image: 'https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc2Nzk4ODMwMXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '4',
    name: 'Premium Loafer',
    price: 279,
    image: 'https://images.unsplash.com/photo-1673675270277-95e45ee5d2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbG9hZmVyc3xlbnwxfHx8fDE3NjgwODk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const reviews = [
  { id: 1, name: 'Ahmed M.', rating: 5, date: 'Jan 5, 2026', text: 'Exceptional quality! The craftsmanship is outstanding. Worth every penny.' },
  { id: 2, name: 'Sarah L.', rating: 5, date: 'Dec 28, 2025', text: 'Beautiful shoes, comfortable fit. The leather is premium quality.' },
  { id: 3, name: 'John D.', rating: 4, date: 'Dec 15, 2025', text: 'Great shoes but sizing runs slightly large. Order half size down.' }
];

export function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState('Brown');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const product = productId ? productData[productId as keyof typeof productData] : productData['1'];

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem({
        id: productId || '1',
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        size: selectedSize.toString()
      });
    }
  };

  const aiSentimentSummary = {
    positive: 92,
    neutral: 6,
    negative: 2,
    summary: 'Customers love the exceptional craftsmanship and premium leather quality. Most common praise includes comfort and durability.'
  };

  return (
    <div className="min-h-screen py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center space-x-2 text-sm text-stone-600 dark:text-stone-400"
        >
          <button onClick={() => onNavigate('home')} className="hover:text-amber-600">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('shop')} className="hover:text-amber-600">Shop</button>
          <span>/</span>
          <span className="text-stone-900 dark:text-white font-medium">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-white dark:bg-stone-900 rounded-3xl overflow-hidden mb-4 shadow-xl">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-stone-700 transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-stone-700 dark:text-stone-300" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => (prev + 1) % product.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-stone-700 transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-stone-700 dark:text-stone-300" />
                  </button>
                </>
              )}

              {/* 3D View Badge */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold">
                360° View
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden ${
                    selectedImage === index
                      ? 'ring-4 ring-amber-600'
                      : 'ring-2 ring-stone-200 dark:ring-stone-800'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-amber-600 font-semibold uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-stone-300 dark:text-stone-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-stone-600 dark:text-stone-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Title & Price */}
            <h1 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-4xl font-bold text-amber-600">${product.price}</span>
              <span className="text-stone-500 dark:text-stone-400 line-through">$399</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 rounded-full text-sm font-semibold">
                25% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Sustainability Badges */}
            <div className="flex items-center space-x-4 mb-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
              <Leaf className="w-6 h-6 text-green-600" />
              <div className="flex flex-wrap gap-2">
                {product.sustainability.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-3">
                Color: {selectedColor}
              </label>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-amber-600 ring-4 ring-amber-100 dark:ring-amber-900/30'
                        : 'border-stone-300 dark:border-stone-700'
                    }`}
                    style={{
                      backgroundColor: color === 'Black' ? '#1a1a1a' : color === 'Brown' ? '#8B4513' : '#A0522D'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-3">
                Select Size (US)
              </label>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-stone-900 dark:text-white w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-stone-100 dark:bg-stone-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Heart className="w-6 h-6 text-stone-700 dark:text-stone-300" />
              </motion.button>
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 text-stone-600 dark:text-stone-400">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* AI Sentiment Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-3xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
              AI Review Analysis
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{aiSentimentSummary.positive}%</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">Positive</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{aiSentimentSummary.neutral}%</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">Neutral</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{aiSentimentSummary.negative}%</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">Negative</div>
            </div>
          </div>
          
          <p className="text-stone-700 dark:text-stone-300">
            <strong>AI Summary:</strong> {aiSentimentSummary.summary}
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-white">{review.name}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-stone-300 dark:text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-stone-600 dark:text-stone-400">{review.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <h2 className="text-3xl font-bold text-stone-900 dark:text-white">
              AI Recommends
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-600">${product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
