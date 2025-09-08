import React from "react";
import ProductCard from "./Productcard";

// Dummy Data
const products = [
  {
    id: 1,
    title: "Men Hooded Navy Blue & Grey Sweatshirt",
    category: "T-SHIRTS",
    price: "$70.00 - $95.00",
    oldPrice: "",
    discount: "19%",
    rating: 5,
    reviews: 2,
    image: "https://via.placeholder.com/200x250",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Navy Blue-Silver-White Multifunction Watch",
    category: "LEATHER",
    price: "$49.00",
    oldPrice: "$85.00",
    discount: "42%",
    rating: 4,
    reviews: 1,
    image: "https://via.placeholder.com/200x250",
  },
  {
    id: 3,
    title: "Women Off White Printed Blouse",
    category: "SHORTS & SKIRTS",
    price: "$47.00",
    oldPrice: "",
    discount: "",
    rating: 2.7,
    reviews: 3,
    image: "https://via.placeholder.com/200x250",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Unisex Blue Graphic Backpack",
    category: "LUGGAGE & TRAVEL",
    price: "$15.00",
    rating: 3,
    reviews: 1,
    image: "https://via.placeholder.com/200x250",
  },
  {
    id: 5,
    title: "Men Blue Colourblocked Mid-Top Sneakers",
    category: "CASUAL SHOES",
    price: "$45.00",
    rating: 5,
    reviews: 3,
    image: "https://via.placeholder.com/200x250",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">FEATURED PRODUCTS</h2>
        <button className="text-blue-600 hover:underline">VIEW ALL</button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
