import React from "react";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  isFeatured?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  category,
  price,
  oldPrice,
  discount,
  image,
  isFeatured,
}) => {
  return (
    <div className="relative bg-white shadow hover:shadow-lg p-4 rounded-md group transition">
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount} OFF
        </span>
      )}

      {/* Featured Badge */}
      {isFeatured && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          FEATURED
        </span>
      )}

      {/* Product Image with animation */}
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain mx-auto mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      />

      {/* Category */}
      <p className="text-gray-400 text-xs uppercase">{category}</p>

      {/* Title */}
      <h3 className="text-gray-800 font-semibold text-sm truncate">{title}</h3>

      {/* Price */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-lg font-bold text-gray-900">{price}</span>
        {oldPrice && (
          <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
        )}
      </div>
    </div>
  );
};

const HotDeals: React.FC = () => {
  return (
    <div className="bg-white border border-yellow-400 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4 border-b border-yellow-400 pb-2">
        HOT DEALS
      </h2>
      <div className="relative group">
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          17% OFF
        </span>

        {/* Product Image with animation */}
        <img
          src="h7.jpg"
          alt="Apple Watch Series 5"
          className="w-52 mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        />

        <p className="text-gray-400 text-xs mt-2">ELECTRONICS</p>
        <h3 className="text-gray-800 font-semibold">Apple Watch Series 5</h3>
        <p className="text-lg font-bold text-gray-900">$499.00 - $599.00</p>

        {/* Progress Bar */}
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>Already Sold: 50</span>
          <span>Available: 75</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-2 mt-1">
          <div className="bg-yellow-400 h-2 rounded w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  const products: ProductProps[] = [
    {
      id: 1,
      title: "Apple iPhone 11 Pro Max",
      category: "ELECTRONICS",
      price: "$199.00",
      oldPrice: "$254.00",
      discount: "22%",
      image: "h3.jpg",
    },
    {
      id: 2,
      title: "Apple Watch Series 5",
      category: "ELECTRONICS",
      price: "$499.00 - $599.00",
      discount: "17%",
      image: "h4.jpg",
    },
    {
      id: 3,
      title: "JBL Wireless Bluetooth Speaker",
      category: "ELECTRONICS",
      price: "$96.00",
      isFeatured: true,
      image: "h2.jpg",
    },
    {
      id: 4,
      title: "JBL On-Ear Headphones",
      category: "ELECTRONICS",
      price: "$124.00",
      isFeatured: true,
      image: "h1.jpg",
    },
    {
      id: 5,
      title: "Apple AirPods",
      category: "ELECTRONICS",
      price: "$85.00",
      isFeatured: true,
      image: "h5.jpg",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">FEATURED PRODUCTS</h2>
        <button className="bg-black text-white px-4 py-2 text-sm">VIEW ALL</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

const DealsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      <div className="lg:col-span-1">
        <HotDeals />
      </div>
      <div className="lg:col-span-3">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default DealsSection;

