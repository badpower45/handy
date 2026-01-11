import { motion } from 'motion/react';
import { Palette, Rotate3D, Sparkles, Check, Download } from 'lucide-react';
import { useState } from 'react';

interface DesignOptions {
  leatherType: string;
  color: string;
  soleStyle: string;
  engraving: string;
}

const leatherTypes = [
  { id: 'full-grain', name: 'Full Grain', price: 0, desc: 'Premium quality' },
  { id: 'suede', name: 'Suede', price: 50, desc: 'Soft & luxurious' },
  { id: 'patent', name: 'Patent Leather', price: 75, desc: 'High shine' },
  { id: 'nubuck', name: 'Nubuck', price: 60, desc: 'Velvety texture' }
];

const colors = [
  { id: 'black', name: 'Classic Black', hex: '#1a1a1a' },
  { id: 'brown', name: 'Rich Brown', hex: '#8B4513' },
  { id: 'cognac', name: 'Cognac', hex: '#A0522D' },
  { id: 'burgundy', name: 'Burgundy', hex: '#800020' },
  { id: 'navy', name: 'Navy Blue', hex: '#000080' },
  { id: 'tan', name: 'Tan', hex: '#D2B48C' }
];

const soleStyles = [
  { id: 'leather', name: 'Leather Sole', price: 0, desc: 'Classic & elegant' },
  { id: 'rubber', name: 'Rubber Sole', price: 30, desc: 'Durable & practical' },
  { id: 'crepe', name: 'Crepe Sole', price: 40, desc: 'Comfortable & flexible' }
];

export function CustomDesigner() {
  const [design, setDesign] = useState<DesignOptions>({
    leatherType: 'full-grain',
    color: 'brown',
    soleStyle: 'leather',
    engraving: ''
  });
  const [rotation, setRotation] = useState(0);
  const [showAIColorMatch, setShowAIColorMatch] = useState(false);

  const basePrice = 299;
  const leatherPrice = leatherTypes.find(l => l.id === design.leatherType)?.price || 0;
  const solePrice = soleStyles.find(s => s.id === design.soleStyle)?.price || 0;
  const engravingPrice = design.engraving ? 25 : 0;
  const totalPrice = basePrice + leatherPrice + solePrice + engravingPrice;

  const selectedColor = colors.find(c => c.id === design.color);

  const aiColorSuggestions = [
    { primary: 'cognac', secondary: 'brown', reason: 'Warm & versatile' },
    { primary: 'burgundy', secondary: 'black', reason: 'Bold & sophisticated' },
    { primary: 'navy', secondary: 'tan', reason: 'Modern & professional' }
  ];

  return (
    <div className="min-h-screen py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
              AI-Powered Design Studio
            </span>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Design Your Perfect Shoe
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Create a one-of-a-kind masterpiece with our interactive 3D designer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
                3D Preview
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                Drag to rotate • Scroll to zoom
              </p>
            </div>

            {/* 3D View Placeholder */}
            <div className="relative aspect-square bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
              <motion.div
                animate={{ rotateY: rotation }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative w-full h-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${selectedColor?.hex}40, ${selectedColor?.hex}80)` 
                }}
              >
                {/* Shoe silhouette representation */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="relative"
                >
                  <svg
                    width="300"
                    height="200"
                    viewBox="0 0 300 200"
                    className="drop-shadow-2xl"
                  >
                    <path
                      d="M 50 150 Q 80 130 120 130 Q 160 130 200 140 Q 240 150 280 160 L 280 180 Q 240 175 200 170 Q 160 165 120 165 Q 80 165 50 170 Z"
                      fill={selectedColor?.hex}
                      opacity="0.9"
                    />
                    <path
                      d="M 120 130 Q 140 100 160 90 Q 180 80 200 85 Q 210 90 200 140"
                      fill={selectedColor?.hex}
                      opacity="0.95"
                    />
                  </svg>
                  {design.engraving && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/60 font-serif italic text-sm"
                    >
                      {design.engraving}
                    </motion.div>
                  )}
                </motion.div>

                {/* Rotation controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                  <button
                    onClick={() => setRotation(prev => prev - 90)}
                    className="p-2 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-stone-700 transition-colors"
                  >
                    <Rotate3D className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                  </button>
                  <span className="text-sm text-white/90 dark:text-stone-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {Math.abs(rotation % 360)}°
                  </span>
                  <button
                    onClick={() => setRotation(prev => prev + 90)}
                    className="p-2 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-stone-700 transition-colors"
                  >
                    <Rotate3D className="w-5 h-5 text-stone-700 dark:text-stone-300 transform scale-x-[-1]" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Price & Actions */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-stone-600 dark:text-stone-400">Total Price:</span>
                <motion.span
                  key={totalPrice}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-amber-700 dark:text-amber-500"
                >
                  ${totalPrice}
                </motion.span>
              </div>
              <div className="space-y-2 text-sm text-stone-600 dark:text-stone-400 mb-4">
                <div className="flex justify-between">
                  <span>Base price</span>
                  <span>${basePrice}</span>
                </div>
                {leatherPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Leather upgrade</span>
                    <span>+${leatherPrice}</span>
                  </div>
                )}
                {solePrice > 0 && (
                  <div className="flex justify-between">
                    <span>Sole upgrade</span>
                    <span>+${solePrice}</span>
                  </div>
                )}
                {engravingPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Custom engraving</span>
                    <span>+${engravingPrice}</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-colors"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-stone-200 dark:bg-stone-800 rounded-xl hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                >
                  <Download className="w-5 h-5 text-stone-700 dark:text-stone-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Design Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Leather Type */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">
                Leather Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {leatherTypes.map(type => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDesign(prev => ({ ...prev, leatherType: type.id }))}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      design.leatherType === type.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
                        : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-stone-900 dark:text-white">
                        {type.name}
                      </span>
                      {design.leatherType === type.id && (
                        <Check className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mb-1">
                      {type.desc}
                    </p>
                    {type.price > 0 && (
                      <span className="text-xs text-amber-600">+${type.price}</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                  Color
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAIColorMatch(!showAIColorMatch)}
                  className="flex items-center space-x-1 text-sm text-amber-600 hover:text-amber-700"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>AI Match</span>
                </motion.button>
              </div>

              {showAIColorMatch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl"
                >
                  <p className="text-sm font-semibold text-stone-900 dark:text-white mb-3">
                    AI Color Recommendations:
                  </p>
                  {aiColorSuggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setDesign(prev => ({ ...prev, color: suggestion.primary }))}
                      className="w-full flex items-center justify-between p-2 hover:bg-white/50 dark:hover:bg-stone-800/50 rounded-lg mb-2"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: colors.find(c => c.id === suggestion.primary)?.hex }}
                          />
                          <div
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: colors.find(c => c.id === suggestion.secondary)?.hex }}
                          />
                        </div>
                        <span className="text-sm text-stone-700 dark:text-stone-300">
                          {suggestion.reason}
                        </span>
                      </div>
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div className="grid grid-cols-3 gap-3">
                {colors.map(color => (
                  <motion.button
                    key={color.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDesign(prev => ({ ...prev, color: color.id }))}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      design.color === color.id
                        ? 'border-amber-600'
                        : 'border-stone-200 dark:border-stone-800'
                    }`}
                  >
                    <div
                      className="w-full aspect-square rounded-lg mb-2 shadow-md"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-stone-700 dark:text-stone-300 block">
                      {color.name}
                    </span>
                    {design.color === color.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sole Style */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">
                Sole Style
              </h3>
              <div className="space-y-3">
                {soleStyles.map(sole => (
                  <motion.button
                    key={sole.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDesign(prev => ({ ...prev, soleStyle: sole.id }))}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      design.soleStyle === sole.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
                        : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-stone-900 dark:text-white block mb-1">
                          {sole.name}
                        </span>
                        <span className="text-sm text-stone-600 dark:text-stone-400">
                          {sole.desc}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {sole.price > 0 && (
                          <span className="text-sm text-amber-600">+${sole.price}</span>
                        )}
                        {design.soleStyle === sole.id && (
                          <Check className="w-5 h-5 text-amber-600" />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Engraving */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">
                Custom Engraving
              </h3>
              <input
                type="text"
                value={design.engraving}
                onChange={(e) => setDesign(prev => ({ ...prev, engraving: e.target.value.slice(0, 20) }))}
                placeholder="Enter your text (max 20 characters)"
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-stone-500 dark:text-stone-400">
                  {design.engraving.length}/20 characters
                </span>
                {design.engraving && (
                  <span className="text-sm text-amber-600">+$25</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
