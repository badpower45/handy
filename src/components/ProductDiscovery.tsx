import { motion } from 'motion/react';
import { Search, Mic, Image as ImageIcon, SlidersHorizontal, Heart, ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from './CartContext';

interface ProductDiscoveryProps {
  onNavigate: (page: string) => void;
  onSelectProduct: (id: string) => void;
}

const allProducts = [
  {
    id: '1',
    name: 'Classic Oxford',
    price: 299,
    image: 'https://images.unsplash.com/photo-1673201183138-e68d0b47dbe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal',
    sizes: [7, 8, 9, 10, 11],
    rating: 4.9,
    reviews: 124
  },
  {
    id: '2',
    name: 'Artisan Boot',
    price: 399,
    image: 'https://images.unsplash.com/photo-1700228771957-a2eafa846557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2ODA4OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Heritage Brogue',
    price: 349,
    image: 'https://images.unsplash.com/photo-1764391787393-d700b3afce8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyb3duJTIwc2hvZXN8ZW58MXx8fHwxNzY4MDg5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal',
    sizes: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 156
  },
  {
    id: '4',
    name: 'Executive Derby',
    price: 329,
    image: 'https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc2Nzk4ODMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal',
    sizes: [8, 9, 10, 11],
    rating: 4.7,
    reviews: 92
  },
  {
    id: '5',
    name: 'Casual Leather Sneaker',
    price: 249,
    image: 'https://images.unsplash.com/photo-1761651469951-4b941ecb27dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBsZWF0aGVyJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY4MDg5NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.6,
    reviews: 201
  },
  {
    id: '6',
    name: 'Premium Loafer',
    price: 279,
    image: 'https://images.unsplash.com/photo-1673675270277-95e45ee5d2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbG9hZmVyc3xlbnwxfHx8fDE3NjgwODk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 134
  },
  {
    id: '7',
    name: 'Formal Black Oxford',
    price: 319,
    image: 'https://images.unsplash.com/photo-1668069226492-508742b03147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBibGFjayUyMHNob2VzfGVufDF8fHx8MTc2ODA4OTU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Formal',
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 178
  },
  {
    id: '8',
    name: 'Craftsman Boot',
    price: 429,
    image: 'https://images.unsplash.com/photo-1700228771957-a2eafa846557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2ODA4OTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Casual',
    sizes: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 89
  }
];

export function ProductDiscovery({ onNavigate, onSelectProduct }: ProductDiscoveryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const { addItem } = useCart();

  const categories = ['All', 'Formal', 'Casual', 'Boots', 'Sneakers'];
  const sizes = [7, 8, 9, 10, 11, 12];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    return matchesSearch && matchesCategory && matchesPrice && matchesSize;
  });

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

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
            Discover Your Perfect Pair
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400">
            Explore our handcrafted collection with AI-powered search
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by style, color, or occasion..."
                className="flex-1 bg-transparent text-stone-900 dark:text-white focus:outline-none"
              />
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                  title="Voice Search"
                >
                  <Mic className="w-5 h-5 text-stone-500 dark:text-stone-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                  title="Image Search"
                >
                  <ImageIcon className="w-5 h-5 text-stone-500 dark:text-stone-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-2 rounded-lg transition-colors ${
                    showFilters
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                      : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400'
                  }`}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-white mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500'
                          : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-white mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSizes(prev =>
                          prev.includes(size)
                            ? prev.filter(s => s !== size)
                            : [...prev, size]
                        );
                      }}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedSizes.includes(size)
                          ? 'bg-amber-600 text-white'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-white mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-amber-600"
                />
                <div className="flex justify-between text-sm text-stone-500 dark:text-stone-400 mt-2">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-stone-600 dark:text-stone-400">
            Showing <span className="font-semibold text-stone-900 dark:text-white">{filteredProducts.length}</span> products
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-stone-600 dark:text-stone-400">AI-powered recommendations active</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-stone-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* AR Try-On Badge */}
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs text-white font-semibold">
                    AR Try-On
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Heart className="w-5 h-5 text-stone-700 dark:text-stone-300 hover:text-red-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product.id);
                      onNavigate('product');
                    }}
                    className="w-10 h-10 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Eye className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                  </motion.button>
                </div>

                {/* Quick Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="absolute bottom-3 left-3 right-3 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Quick Add</span>
                </motion.button>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-500 fill-current'
                            : 'text-stone-300 dark:text-stone-700'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-stone-500 dark:text-stone-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-stone-500 dark:text-stone-400">
                    Free shipping
                  </span>
                </div>

                {/* Available Sizes */}
                <div className="mt-3 flex items-center space-x-1">
                  <span className="text-xs text-stone-500 dark:text-stone-400">Sizes:</span>
                  {product.sizes.slice(0, 4).map(size => (
                    <span key={size} className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded">
                      {size}
                    </span>
                  ))}
                  {product.sizes.length > 4 && (
                    <span className="text-xs text-stone-500 dark:text-stone-400">+{product.sizes.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
