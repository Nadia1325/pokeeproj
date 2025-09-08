import React from "react";
import ProductCards from "./ProductCards";

const products = [
  {
    id: 1,
    title: "Apple Watch Series 5",
    category: "Electronics",
    price: "$499.00 - $599.00",
    discount: "17%",
    image: "/images/watch1.png",
  },
  {
    id: 2,
    title: "Microsoft Xbox One Wireless Controller",
    category: "Electronics",
    price: "$25.00",
    oldPrice: "$45.00",
    discount: "44%",
    image: "/images/xbox.png",
  },
  {
    id: 3,
    title: "JBL On-Ear Headphones",
    category: "Electronics",
    price: "$124.00",
    featured: true,
    image: "/images/headphones.png",
  },
  {
    id: 4,
    title: "Samsung Virtual Reality Headset",
    category: "Electronics",
    price: "$18.00",
    image: "/images/vr.png",
  },
  {
    id: 5,
    title: "Apple Watch Series 5 Black Milanese Loop",
    category: "Electronics",
    price: "$599.00",
    image: "/images/watch2.png",
  },
  {
    id: 6,
    title: "Samsung Gear 360 Camera",
    category: "Electronics",
    price: "$29.00",
    oldPrice: "$48.00",
    discount: "40%",
    image: "/images/camera.png",
  },
];

const Best: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            BEST SELLING PRODUCTS
          </h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            VIEW ALL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCards key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best;
