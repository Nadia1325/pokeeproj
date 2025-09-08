import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

// ✅ Import images properly (if they’re in src/assets)
import image1 from "../assets/image2.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image6.jpg"; 
import image6 from "../assets/image7.jpg";

// ---------------- Types ----------------
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  quantity: number;
}

interface StarRatingProps {
  rating: number;
  reviews: number;
}

// ---------------- Components ----------------
const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => (
  <div className="flex items-center gap-1 mt-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={16}
        className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ))}
    <span className="text-sm text-gray-600 ml-1">({reviews})</span>
  </div>
);

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const products: Product[] = [
    { id: 1, name: "Product 1", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image1, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
    { id: 2, name: "Product 2", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image2, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
    { id: 3, name: "Product 3", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image3, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
    { id: 4, name: "Product 4", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image4, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
    { id: 5, name: "Product 5", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image5, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
    { id: 6, name: "Product 6", category: "Demo", price: 99, originalPrice: 120, discount: "20% Off", rating: 4, reviews: 15, image: image6, description: "Demo product.", colors: ["Red", "Blue"], sizes: ["M", "L"], quantity: 1 },
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
        ))}
      </div>

      {/* Show details + Add to Cart */}
      {selectedProduct && (
        <div className="mt-6 p-4 bg-white shadow rounded w-full max-w-md">
          <h2 className="text-lg font-bold mb-2">{selectedProduct.name}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
          <StarRating rating={selectedProduct.rating} reviews={selectedProduct.reviews} />
          <button
            onClick={() => addToCart(selectedProduct)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      )}
        return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-row gap-6">
      {/* Left side → Products */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <Filters />
      </div>
  
      {/* Right side → Filters */}
      <ProductGrid />
    </div>)

      {/* Cart counter */}
      {cart.length > 0 && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          Cart: {cart.length}
        </div>
       
      )}
    </div>
  );
}
