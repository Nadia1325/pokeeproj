import React from "react";
import { motion } from "framer-motion";

const Filters: React.FC = () => {
  return (
    <motion.aside
      className="w-64 bg-white shadow-md rounded-lg p-4"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">PRODUCT CATEGORIES</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>Accessories (7)</li>
          <li>Bags & Backpacks (4)</li>
          <li>Beauty & Care (2)</li>
          <li>Jewellery (4)</li>
          <li>Men (7)</li>
          <li>Shoes (4)</li>
          <li>Watches (4)</li>
          <li>Women (9)</li>
        </ul>
      </div>

      {/* Filter by Price */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">FILTER BY PRICE</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {[
            "$0.00–$50.00",
            "$50.00–$100.00",
            "$100.00–$200.00",
            "$200.00–$400.00",
            "$400.00–$800.00",
            "$800.00+",
          ].map((price) => (
            <label key={price} className="flex items-center space-x-2">
              <input type="radio" name="price" className="accent-blue-500" />
              <span>{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Color */}
      <div>
        <h3 className="font-bold mb-2">FILTER BY COLOR</h3>
        <div className="space-y-2 text-sm text-gray-700">
          {[
            "Black",
            "Blue",
            "Dark Blue",
            "Grey",
            "Maroon",
            "Red",
            "Silver",
            "Sky Blue",
          ].map((color) => (
            <label key={color} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default Filters;
