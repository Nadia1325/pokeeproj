import React from "react";
import { Heart } from "lucide-react";

// Types
interface ProductItem {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  featured?: boolean;
}

// Dummy Data
const hotDeal = {
  id: 1,
  title: "Apple Watch Series 5",
  category: "Electronics",
  price: "$499.00 - $599.00",
  discount: "17% OFF",
  sold: 50,
  available: 75,
  image: "../fo.jpeg",
};

const featuredProducts: ProductItem[] = [
  {
    id: 2,
    title: "Apple iPhone 11 Pro Max",
    category: "Electronics",
    price: "$199.00",
    oldPrice: "$254.00",
    discount: "22% OFF",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Apple Watch Series 5",
    category: "Electronics",
    price: "$499.00 - $599.00",
    discount: "17% OFF",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "JBL Wireless Bluetooth Speaker",
    category: "Electronics",
    price: "$96.00",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "JBL On-Ear Headphones",
    category: "Electronics",
    price: "$124.00",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "Apple AirPods with Wireless Case",
    category: "Electronics",
    price: "$85.00",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Samsung Galaxy S20 8GB RAM",
    category: "Electronics",
    price: "$250.00",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Samsung Gear 360 Camera",
    category: "Electronics",
    price: "$29.00",
    oldPrice: "$48.00",
    discount: "40% OFF",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 9,
    title: "Apple Watch Series 5 Black",
    category: "Electronics",
    price: "$599.00",
    image: "../page4.jpeg",
  },
];

// Components
const HotDealCard: React.FC = () => (
  <div className="border rounded-2xl p-4 shadow-md w-full max-w-sm group">
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={hotDeal.image}
        alt={hotDeal.title}
        className="rounded-xl w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded transform transition-all duration-300 group-hover:scale-105 group-hover:bg-green-600">
        {hotDeal.discount}
      </span>
      <Heart className="absolute top-2 right-2 text-gray-500 w-5 h-5 transform transition-all duration-300 hover:text-red-500 hover:scale-125 cursor-pointer" />
    </div>
    <div className="mt-3">
      <p className="text-sm text-gray-500 uppercase transition-colors duration-300 group-hover:text-gray-700">
        {hotDeal.category}
      </p>
      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
        {hotDeal.title}
      </h3>
      <p className="text-yellow-600 font-bold transition-all duration-300 group-hover:text-yellow-700 group-hover:scale-105">
        {hotDeal.price}
      </p>
      <div className="mt-3">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-yellow-500 transition-all duration-1000 group-hover:bg-yellow-600 animate-pulse"
            style={{
              width: `${(hotDeal.sold / (hotDeal.sold + hotDeal.available)) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-700">
          <span>Already Sold: {hotDeal.sold}</span>
          <span>Available: {hotDeal.available}</span>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProductsCard: React.FC = () => (
  <div className="border rounded-2xl p-4 shadow-md w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold transition-colors duration-300 hover:text-blue-600">
        Featured Products
      </h2>
      <button className="text-lg text-yellow-600 font-semibold transition-all duration-300 hover:text-yellow-700 hover:scale-105">
        VIEW ALL
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className="border rounded-xl p-3 shadow-sm relative group cursor-pointer transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 animate-fadeInUp"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {product.discount && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-green-600">
              {product.discount}
            </span>
          )}
          {product.featured && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-600">
              FEATURED
            </span>
          )}
          <Heart className="absolute top-2 right-2 text-gray-400 w-4 h-4 z-10 transform transition-all duration-300 hover:text-red-500 hover:scale-125 cursor-pointer" />

          <div className="relative overflow-hidden rounded-md mb-2">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md mb-2 w-full h-32 object-cover transform transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <p className="text-xs text-gray-500 uppercase transition-colors duration-300 group-hover:text-gray-700">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold leading-tight transition-colors duration-300 group-hover:text-blue-600">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-yellow-600 font-bold text-sm transition-all duration-300 group-hover:text-yellow-700 group-hover:scale-105">
              {product.price}
            </p>
            {product.oldPrice && (
              <p className="line-through text-gray-400 text-xs transition-colors duration-300 group-hover:text-gray-500">
                {product.oldPrice}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const Product: React.FC = () => {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-2">
      <HotDealCard />
      <FeaturedProductsCard />
    </div>
  ); 
};

export default Product;
