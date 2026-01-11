import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unworn shoes in original condition. Free returns for all orders.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Domestic shipping takes 3-5 business days. International orders typically arrive within 7-14 days.'
  },
  {
    question: 'Do you offer custom sizing?',
    answer: 'Yes! We can create custom sizes for an additional fee. Contact us for more information.'
  },
  {
    question: 'Are your shoes really handmade?',
    answer: 'Absolutely! Each pair is handcrafted by skilled Egyptian artisans using traditional techniques.'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400">
            We'd love to hear from you. Our team is always here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">
              Send us a message
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-xl"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="custom">Custom Order</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">
                    Our Location
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Industrial zone – South El Raswa<br />
                    Port block 213/214<br />
                    Port Said, Egypt
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    +20 123 456 7890<br />
                    Available 9 AM - 6 PM EET
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    info@duckhandmade.com<br />
                    support@duckhandmade.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">
                    Business Hours
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Monday - Friday: 9 AM - 6 PM<br />
                    Saturday: 10 AM - 4 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-xl mb-20"
        >
          <div className="aspect-video bg-stone-200 dark:bg-stone-800 relative">
            {/* Map placeholder - in a real app, integrate Google Maps or similar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-stone-600 dark:text-stone-400">
                  Interactive Map
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
                  Port Said, Egypt
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
