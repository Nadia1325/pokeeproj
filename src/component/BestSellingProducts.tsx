import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  featured?: boolean;
  liked?: boolean;
}

const FeaturedProducts: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());

  const products: Product[] = [
    {
      id: 1,
      category: "T-SHIRTS",
      title: "Men Hooded Navy Blue & Grey...",
      rating: 5,
      reviewCount: 2,
      price: 70.00,
      originalPrice: 95.00,
      discount: "19% Off",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      category: "LEATHER",
      title: "Navy Blue-Silver-White Multifu...",
      rating: 4,
      reviewCount: 1,
      price: 49.00,
      originalPrice: 85.00,
      discount: "42% Off",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      category: "SHORTS & SKIRTS",
      title: "Women Off White Printed Blous...",
      rating: 2.7,
      reviewCount: 3,
      price: 47.00,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop&crop=center",
      featured: true
    },
    {
      id: 4,
      category: "LUGGAGE & TRAVEL",
      title: "Unisex Blue Graphic Backpack",
      rating: 3,
      reviewCount: 1,
      price: 15.00,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      category: "CASUAL SHOES",
      title: "Men Blue Colourblocked Mid-To...",
      rating: 5,
      reviewCount: 3,
      price: 45.00,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center"
    }
  ];

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const getRatingColor = (rating: number): string => {
    if (rating >= 4.5) return 'bg-green-500';
    if (rating >= 3.5) return 'bg-green-400';
    if (rating >= 2.5) return 'bg-orange-400';
    return 'bg-red-400';
  };

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${getRatingColor(rating)}`}>
          {rating}★
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
            FEATURED PRODUCTS
          </h2>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold transition-colors">
          VIEW ALL
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Featured Badge */}
                {product.featured && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    FEATURED
                  </span>
                )}
                
                {/* Heart Icon */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-110"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      likedProducts.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  />
                </button>

                {/* Quick Action Icons (appear on hover) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <div className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-10-5h10" />
                    </svg>
                  </div>
                  <div className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-gray-500 font-semibold mb-1 tracking-wide">
                  {product.category}
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-green-600 font-semibold">
                        {product.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





  );
};

export default FeaturedProducts;

