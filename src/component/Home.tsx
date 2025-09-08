import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeaturedProducts from './FeatureProduct';

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
      <div className="relative bg-gradient-to-r from-pink-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            {/* Navigation Arrows */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex-1 max-w-6xl mx-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Hero Content */}
                <div className="text-center lg:text-left space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                      NEW ARRIVALS
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                      SUMMER SALE
                    </h1>
                    <p className="text-2xl lg:text-3xl font-semibold text-gray-700 mt-4">
                      MIN. 40% OFF
                    </p>
                  </div>
                  <button className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-3 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300">
                    SHOP NOW
                  </button>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="aspect-square max-w-md mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&h=500&fit=crop"
                      alt="Woman in summer outfit with pink hat"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* White Sneakers Promo */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-1">
                WHITE SNEAKERS
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                MIN. 30% OFF
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Men Fashionable Shoes
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 font-semibold hover:bg-blue-600 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="ml-4">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop"
                alt="White sneakers"
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          </div>

          {/* Women's Fashion Promo */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-1">
                WOMEN'S FASHION
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                UP TO 65% OFF
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Shoes & Backpacks
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 font-semibold hover:bg-blue-600 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="ml-4 flex space-x-2">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=60&h=60&fit=crop"
                alt="Handbag"
                className="w-12 h-12 object-cover rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=60&h=60&fit=crop"
                alt="High heels"
                className="w-12 h-12 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts/>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium leading-tight max-w-16">
                {category.name}
              </span>
            </div>
            
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Home;