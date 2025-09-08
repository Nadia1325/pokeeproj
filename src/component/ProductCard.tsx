import React from "react";
import { Heart } from "lucide-react";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  isFeatured?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  category,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  image,
  isFeatured,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 relative">
      {/* Featured Label */}
      {isFeatured && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
          FEATURED
        </span>
      )}

      {/* Wishlist Icon */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <Heart size={18} />
      </button>

      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Category */}
      <p className="text-xs uppercase text-gray-500">{category}</p>

      {/* Title */}
      <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>

      {/* Rating */}
      <div className="flex items-center space-x-1 mt-1">
        <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
          {rating}★
        </span>
        <span className="text-xs text-gray-500">({reviews})</span>
      </div>

      {/* Prices */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-lg font-bold text-gray-800">{price}</span>
        {oldPrice && (
          <span className="text-sm line-through text-gray-400">{oldPrice}</span>
        )}
        {discount && (
          <span className="text-green-600 text-sm font-medium">{discount} Off</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
