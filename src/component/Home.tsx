import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturedProducts from './BestSellingProducts';

interface CategoryItem {
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const categories: CategoryItem[] = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b922?w=150&h=150&fit=crop&crop=face' },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop' },
    { name: 'Bags & Backpacks', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop' },
    { name: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop' },
    { name: 'Jewellery', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=150&h=150&fit=crop' },
    { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop' },
    { name: 'Tops', image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=150&h=150&fit=crop' },
    { name: 'Lingerie & Nightwear', image: 'https://images.unsplash.com/photo-1571513722275-4b3582da2c0c?w=150&h=150&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-pink-50 to-white overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex-1 max-w-6xl mx-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Hero Content */}
                <motion.div
                  className="text-center lg:text-left space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                    NEW ARRIVALS
                  </p>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    SUMMER SALE
                  </h1>
                  <p className="text-2xl lg:text-3xl font-semibold text-gray-700 mt-4">
                    MIN. 40% OFF
                  </p>
                  <button className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-3 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300">
                    SHOP NOW
                  </button>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="aspect-square max-w-md mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&h=500&fit=crop"
                      alt="Woman in summer outfit with pink hat"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Promotional Sections */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "WHITE SNEAKERS",
            discount: "MIN. 30% OFF",
            desc: "Men Fashionable Shoes",
            img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop"
          },
          {
            title: "WOMEN'S FASHION",
            discount: "UP TO 65% OFF",
            desc: "Shoes & Backpacks",
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=60&h=60&fit=crop"
          }
        ].map((promo, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-1">
                {promo.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {promo.discount}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{promo.desc}</p>
              <button className="bg-blue-500 text-white px-6 py-2 font-semibold hover:bg-blue-600 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="ml-4">
              <img
                src={promo.img}
                alt={promo.title}
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <FeaturedProducts />

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium leading-tight max-w-[64px]">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
