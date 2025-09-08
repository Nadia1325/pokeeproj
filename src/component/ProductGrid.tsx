import React from "react";
import ProductCard from "./ProductCards";

const products = [
  {
    id: 1,
    title: "Men Black Analogue Watch",
    category: "ANALOG",
    price: "$1,099.00 – $1,299.00",
    oldPrice: "",
    discount: "15%",
    rating: 1.5,
    reviews: 2,
    image: "https://via.placeholder.com/200x250",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Women Blue Solid Denim Pencil Skirt",
    category: "JEANS",
    price: "$49.00",
    oldPrice: "$89.00",
    discount: "45%",
    rating: 3.3,
    reviews: 3,
    image: "https://via.placeholder.com/200x250",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Women Navy Blue Solid Parka Jacket",
    category: "DRESSES",
    price: "$160.00 – $190.00",
    rating: 4.5,
    reviews: 2,
    image: "https://via.placeholder.com/200x250",
  },
  {
    id: 4,
    title: "Men Coffee Brown Genuine Leather Wallet",
    category: "WALLETS",
    price: "$40.00",
    oldPrice: "$45.00",
    discount: "11%",
    rating: 4,
    reviews: 1,
    image: "https://via.placeholder.com/200x250",
    isFeatured: true,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
