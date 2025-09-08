import React, { useState, useMemo } from 'react';
import { Heart, Grid, List, ChevronDown, Star, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  colors: string[];
  sizes: string[];
  isOnSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Men Striped Navy Blue Pure Cotton T-Shirt",
    price: 78.00,
    originalPrice: 99.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    category: "T-Shirts",
    rating: 4.5,
    colors: ["Navy", "White"],
    sizes: ["S", "M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 2,
    name: "Men's Casual Navy Blue Jeans Oversize 3 Function Jacket",
    price: 94.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=400&fit=crop",
    category: "Jackets",
    rating: 4.8,
    colors: ["Navy"],
    sizes: ["M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 3,
    name: "Women's Long Sleeves Multicolor Print Basic Top",
    price: 67.00,
    image: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=300&h=400&fit=crop",
    category: "Tops",
    rating: 4.3,
    colors: ["Multicolor"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 4,
    name: "Unisex Navy & Orange Printed Backpack",
    price: 51.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
    category: "Bags",
    rating: 4.6,
    colors: ["Navy", "Orange"],
    sizes: ["One Size"]
  },
  {
    id: 5,
    name: "Men's Blue High-Top Canvas Sneakers",
    price: 94.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
    category: "Shoes",
    rating: 4.4,
    colors: ["Blue", "White"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 6,
    name: "Men Solid Navy Performance Jeans",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
    category: "Jeans",
    rating: 4.7,
    colors: ["Navy"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 7,
    name: "Women's Navy Textured Vegan Leather Bag",
    price: 78.00,
    originalPrice: 95.00,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop",
    category: "Bags",
    rating: 4.9,
    colors: ["Navy"],
    sizes: ["One Size"],
    isOnSale: true
  },
  {
    id: 8,
    name: "Men Navy Blue Checked Bomber Jacket",
    price: 234.00,
    originalPrice: 280.00,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
    category: "Jackets",
    rating: 4.6,
    colors: ["Navy"],
    sizes: ["M", "L", "XL"],
    isOnSale: true
  },
  {
    id: 9,
    name: "Women Brown Solid 3 Straps Heel Top The Flop",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop",
    category: "Shoes",
    rating: 4.2,
    colors: ["Brown"],
    sizes: ["6", "7", "8", "9", "10"]
  },
  {
    id: 10,
    name: "Unisex Black Textured Camo Backpack",
    price: 74.00,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=300&h=400&fit=crop",
    category: "Bags",
    rating: 4.5,
    colors: ["Black", "Camo"],
    sizes: ["One Size"]
  },
  {
    id: 11,
    name: "Women Mustard Solid Top",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    category: "Tops",
    rating: 4.1,
    colors: ["Mustard"],
    sizes: ["S", "M", "L"]
  }
];

const categories = ["All", "T-Shirts", "Jackets", "Tops", "Bags", "Shoes", "Jeans"];
const priceRanges = [
  { label: "$30-$50", min: 30, max: 50 },
  { label: "$50-$100", min: 50, max: 100 },
  { label: "$100-$150", min: 100, max: 150 },
  { label: "$150-$200", min: 150, max: 200 },
  { label: "$200+", min: 200, max: Infinity }
];
const colors = ["Blue", "Red", "Green", "Navy", "Black", "White", "Brown"];
const sizes = ["XS", "S", "M", "L", "XL"];
const ratings = [5, 4, 3, 2, 1];

export default function EcommerceShop() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<{min: number, max: number} | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (selectedPriceRange && (product.price < selectedPriceRange.min || product.price > selectedPriceRange.max)) return false;
      if (selectedColors.length > 0 && !selectedColors.some(color => product.colors.some(pc => pc.toLowerCase().includes(color.toLowerCase())))) return false;
      if (selectedSizes.length > 0 && !selectedSizes.some(size => product.sizes.includes(size))) return false;
      if (selectedRating && product.rating < selectedRating) return false;
      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'name':
        default: return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedColors, selectedSizes, selectedRating, sortBy]);

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        {product.isOnSale && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs rounded">
            SALE
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop</h1>
          <p className="text-gray-600">HOME / SHOP</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Product Categories
              </h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left py-1 px-2 rounded ${
                        selectedCategory === category 
                          ? 'bg-orange-100 text-orange-700' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Price */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filter by Price</h3>
              <ul className="space-y-2">
                {priceRanges.map(range => (
                  <li key={range.label}>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="priceRange"
                        checked={selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max}
                        onChange={() => setSelectedPriceRange(range)}
                        className="mr-2"
                      />
                      <span className="text-gray-600">{range.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Color */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filter by Color</h3>
              <div className="space-y-2">
                {colors.map(color => (
                  <label key={color} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColor(color)}
                      className="mr-2"
                    />
                    <div className={`w-4 h-4 rounded-full mr-2 border-2 ${
                      color === 'Blue' ? 'bg-blue-500' :
                      color === 'Red' ? 'bg-red-500' :
                      color === 'Green' ? 'bg-green-500' :
                      color === 'Navy' ? 'bg-blue-900' :
                      color === 'Black' ? 'bg-black' :
                      color === 'White' ? 'bg-white border-gray-300' :
                      'bg-amber-600'
                    }`}></div>
                    <span className="text-gray-600">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Size */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filter by Size</h3>
              <div className="space-y-2">
                {sizes.map(size => (
                  <label key={size} className="flex items-center">
                    <input 
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleSize(size)}
                      className="mr-2"
                    />
                    <span className="text-gray-600">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Average Rating */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Average Rating</h3>
              <div className="space-y-2">
                {ratings.map(rating => (
                  <label key={rating} className="flex items-center">
                    <input 
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                      className="mr-2"
                    />
                    <div className="flex items-center">
                      {renderStars(rating)}
                      <span className="text-gray-600 ml-1">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <span className="text-gray-600">
                    Show {Math.min(itemsPerPage, filteredProducts.length)} of {filteredProducts.length}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <label className="text-sm text-gray-600 mr-2">Show:</label>
                    <select 
                      value={itemsPerPage} 
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="border border-gray-300 rounded px-2 py-1"
                    >
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={48}>48</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <label className="text-sm text-gray-600 mr-2">Default sorting:</label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="name">Name</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.slice(0, itemsPerPage).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > itemsPerPage && (
              <div className="flex justify-center items-center mt-8 space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-orange-500 text-white rounded">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}