import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BestSellingProducts from './BestSellingProducts';
import Product from './product';



interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
  isExpanded?: boolean;
}

interface NavigationItem {
  name: string;
  hasDropdown: boolean;
  path?: string;
}


const EcommerceHero: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const categories: CategoryItem[] = [
    { name: "Men's Clothing", hasSubmenu: true },
    { name: "Women's Clothing", hasSubmenu: true },
    { name: "Accessories", hasSubmenu: true },
    { name: "Shoes", hasSubmenu: true },
    { name: "Jewellery", hasSubmenu: true },
    { name: "Bags & Backpacks", hasSubmenu: true },
    { name: "Watches", hasSubmenu: true },
    { name: "Dresses", hasSubmenu: false },
    { name: "Shirts", hasSubmenu: false }
  ];

  const navigationItems: NavigationItem[] = [
    { name: "HOME", hasDropdown: false, path: "/Home" },
    { name: "SHOP", path: "/EcommerceShop", hasDropdown: true },
    { name: "PAGES", path:"/page",hasDropdown: true },
    { name: "BLOG", path: "/BlogPost", hasDropdown: true },
    { name: "ELEMENTS", path: "/Elements", hasDropdown: true },
    {name: "FAQ", path:"/FAQ", hasDropdown:true },
    {name: "LOGIN", path:"/Login", hasDropdown:true },
   

    { name: "BUY NOW", hasDropdown: false }

  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryName)) {
        newExpanded.delete(categoryName);
      } else {
        newExpanded.add(categoryName);
      }
      return newExpanded;
    });
  };

  const handleNavigation = (item: NavigationItem) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Categories Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 flex items-center gap-3 font-semibold transition-colors rounded-md"
            >
              <Menu className="w-5 h-5" />
              SHOP BY CATEGORIES
            </button>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 text-gray-700 hover:text-yellow-500 font-medium py-2 transition-colors duration-200"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="flex items-center gap-1 text-gray-700 hover:text-yellow-500 font-medium py-2 transition-colors duration-200"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                  {/* Dropdown indicator line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div className={`bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'}`}>
          <div className="p-6">
            <div className="space-y-1">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => category.hasSubmenu && toggleCategory(category.name)}
                    className="w-full flex items-center justify-between py-4 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 rounded transition-colors"
                  >
                    <span className="font-medium">{category.name}</span>
                    {category.hasSubmenu && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${expandedCategories.has(category.name) ? 'rotate-90' : ''}`}
                      />
                    )}
                  </button>

                  {/* Submenu placeholder */}
                  {category.hasSubmenu && expandedCategories.has(category.name) && (
                    <div className="pl-4 pb-2">
                      <div className="text-sm text-gray-500 py-1">Subcategories would appear here</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative h-96 flex items-center justify-between px-12">
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-yellow-500 font-bold text-lg tracking-wide">
                  BEATS EP ON-EAR
                </span>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                PERSONALIZED<br />
                HEADPHONES
              </h1>

              <p className="text-2xl text-gray-700 mb-8 font-medium">
                Min. 40-80% Off
              </p>

              <Link
                to="/Shop"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-all duration-200 hover:transform hover:scale-105 rounded-md shadow-lg hover:shadow-xl"
              >
                BUY NOW
              </Link>
            </div>

            {/* Hero Image */}
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative">
                <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                  <img
                    src="../pc5.png"
                    alt="Headphones"
                    className="w-96 ml-10 transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Promo Section */}
      <section>
        <div className="container mx-auto grid grid-cols-2 gap-4 bg-gray-100 p-6">
          {/* Column 1 */}
          <div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
              <div className="relative h-96 flex items-center justify-between px-12">
                <div className="flex-1 max-w-lg">
                  <div className="mb-4">
                    <span className="text-yellow-500 font-bold text-lg tracking-wide">
                      DIGITAL SMART
                    </span>
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    WIRELESS SPEAKER
                  </h1>
                  <p className="text-2xl text-gray-700 mb-8 font-medium">Min. 30-70% Off</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-colors hover:transform hover:scale-105 duration-200">
                    BUY NOW
                  </button>
                </div>
                <div className="flex-1 flex justify-center items-center relative">
                  <div className="relative">
                    <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                      <img src="../electronics-banner-1.jpg" alt="Speaker" className="w-96 ml-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
              <div className="relative h-96 flex items-center justify-between px-12">
                <div className="flex-1 max-w-lg">
                  <div className="mb-4">
                    <span className="text-yellow-500 font-bold text-lg tracking-wide">
                      DIGITAL SMART
                    </span>
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    WATCH CHARGER
                  </h1>
                  <p className="text-2xl text-gray-700 mb-8 font-medium">UP TO 70% Off</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-colors hover:transform hover:scale-105 duration-200">
                    BUY NOW
                  </button>
                </div>
                <div className="flex-1 flex justify-center items-center relative">
                  <div className="relative">
                    <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                      <img src="../page4.jpeg" alt="Watch Charger" className="w-96 ml-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Components */}
      <Product />
      <BestSellingProducts />
      
    

      {/* Featured Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Categories</h2>
            <p className="text-gray-600">Discover our most popular product categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Men', icon: '👨' },
              { name: 'Women', icon: '👩' },
              { name: 'Shoes', icon: '👟' },
              { name: 'Bags', icon: '👜' },
              { name: 'Watches', icon: '⌚' },
              { name: 'Accessories', icon: '💎' }
            ].map((category, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHero;
