import React from "react";

interface PromoCardProps {
  category: string;
  title: string;
  discount: string;
  image: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ category, title, discount, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-md">
      {/* Text Section */}
      <div className="flex flex-col items-start space-y-2 max-w-xs">
        <p className="text-yellow-500 font-medium uppercase text-sm">{category}</p>
        <h2 className="text-gray-900 text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-sm font-medium">{discount}</p>
        <button className="mt-3 bg-yellow-400 text-black px-4 py-2 text-sm font-semibold hover:bg-yellow-500 transition">
          SHOP NOW
        </button>
      </div>

      {/* Image Section with Animation */}
      <div className="mt-4 md:mt-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-40 md:w-56 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>
  );
};

const PromoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <PromoCard
        category="Digital Smart"
        title="Wireless Speaker"
        discount="Min. 30-75% OFF"
        image="h7.jpg"
      />
      <PromoCard
        category="Digital Smart"
        title="Watch Charger"
        discount="Up to 75% OFF"
        image="h71.jpg"
      />
    </div>
  );
};

export default PromoSection;

