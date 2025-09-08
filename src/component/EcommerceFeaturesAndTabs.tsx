import React, { useState } from 'react';
import { Truck, RotateCcw, CreditCard, MessageCircle } from 'lucide-react';


interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EcommerceFeaturesAndTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('FEATURED');

  const features: FeatureItem[] = [
    {
      icon: <Truck className="w-8 h-8 text-yellow-400" />,
      title: "FREE SHIPPING",
      description: "On All Orders Over $99"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-yellow-400" />,
      title: "EASY RETURNS",
      description: "30 Days Return Policy"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-400" />,
      title: "SECURE PAYMENT",
      description: "100% Secure Payment"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-yellow-400" />,
      title: "24/7 SUPPORT",
      description: "Dedicated Support"
    }
  ];

  const productTabs = ['FEATURED', 'RECENT', 'ON SALE', 'TOP RATED'];

  const productsByTab: Record<string, Product[]> = {
    'FEATURED': [
      {
        id: 1,
        title: "Apple AirPods with Wireless Charging Case",
        price: 85.00,
        image: "h7.jpg"
      },
      {
        id: 2,
        title: "JBL Wireless Bluetooth Speaker",
        price: 96.00,
        image: "h3.jpg"
      },
      {
        id: 3,
        title: "JBL On-Ear Headphones",
        price: 124.00,
        image: "h7.jpg"
      }
    ],
    'RECENT': [
      {
        id: 4,
        title: "Apple iPhone 11 Pro Max 256GB",
        price: 199.00,
        originalPrice: 254.00,
        image: "h1.jpg"
      },
      {
        id: 5,
        title: "Apple AirPods with Wireless Charging Case",
        price: 85.00,
        image: "h1.jpg"
      },
      {
        id: 6,
        title: "Apple Watch Series 5",
        price: 499.00,
        originalPrice: 599.00,
        image: "h1.jpg"
      }
    ],
    'ON SALE': [
      {
        id: 7,
        title: "Apple iPhone 11 Pro Max 256GB",
        price: 199.00,
        originalPrice: 254.00,
        image: "h1.jpg"
      },
      {
        id: 8,
        title: "Apple Watch Series 5",
        price: 499.00,
        originalPrice: 599.00,
        image: "h1.jpg"
      },
      {
        id: 9,
        title: "Samsung Gear 360 Camera",
        price: 29.00,
        originalPrice: 48.00,
        image: "h3.jpg"
      }
    ],
    'TOP RATED': [
      {
        id: 10,
        title: "Samsung Virtual Reality Headset",
        price: 18.00,
        image: "h3.jpg"
      },
      {
        id: 11,
        title: "Microsoft Xbox One Wireless Controller",
        price: 25.00,
        originalPrice: 45.00,
        image: "h4.jpg"
      },
      {
        id: 12,
        title: "Apple Watch Series 5 Black Milanese Loop",
        price: 599.00,
        image: "h5.jpg"
      }
    ]
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="bg-white">
      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-200">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Tabs Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-8 mb-8">
            {productTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-bold text-lg transition-all duration-200 relative ${
                  activeTab === tab 
                    ? 'text-gray-900' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
                )}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              {productsByTab[activeTab]?.slice(0, 3).map((product) => (
                <div key={product.id} className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center px-1">
                        {product.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 text-sm font-medium mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {product.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Columns 2-4 would repeat similar structure */}
            {[1, 2, 3].map((colIndex) => (
              <div key={colIndex} className="space-y-6">
                {productsByTab[activeTab]?.slice(0, 3).map((product, index) => {
                  // Rotate products for visual variety
                  const rotatedProducts = [...productsByTab[activeTab]];
                  for (let i = 0; i < colIndex; i++) {
                    rotatedProducts.push(rotatedProducts.shift()!);
                  }
                  const displayProduct = rotatedProducts[index];
                  
                  return (
                    <div key={`${colIndex}-${displayProduct?.id}-${index}`} className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-gray-500 text-center px-1">
                            {displayProduct?.title.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 text-sm font-medium mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                          {displayProduct?.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">
                            {displayProduct ? formatPrice(displayProduct.price) : ''}
                          </span>
                          {displayProduct?.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {formatPrice(displayProduct.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFeaturesAndTabs;