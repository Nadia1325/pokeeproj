import React from 'react';

const MenClothingSidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shop By Categories</h2>
      <ul className="space-y-2">
        <li>
          <h3 className="font-semibold">Men's Clothing</h3>
        </li>
        <li>
          <h4 className="font-bold">Top Wear</h4>
          <ul className="list-disc list-inside">
            <li><a href="/clothing/t-shirts" className="text-blue-600 hover:underline">T-Shirts</a></li>
            <li><a href="/clothing/suits-blazers" className="text-blue-600 hover:underline">Suits & Blazers</a></li>
            <li><a href="/clothing/jackets" className="text-blue-600 hover:underline">Jackets</a></li>
          </ul>
        </li>
        <li>
          <h4 className="font-bold">Bottom Wear</h4>
          <ul className="list-disc list-inside">
            <li><a href="/clothing/jeans" className="text-blue-600 hover:underline">Jeans</a></li>
            <li><a href="/clothing/trousers" className="text-blue-600 hover:underline">Trousers</a></li>
            <li><a href="/clothing/cargos" className="text-blue-600 hover:underline">Cargos</a></li>
          </ul>
        </li>
        <li>
          <h4 className="font-bold">Sports Wear</h4>
          <ul className="list-disc list-inside">
            <li><a href="/clothing/sports-tshirts" className="text-blue-600 hover:underline">Sports T-Shirts</a></li>
            <li><a href="/clothing/tracksuits" className="text-blue-600 hover:underline">Track Suits</a></li>
          </ul>
        </li>
        <li>
          <h4 className="font-bold">Accessories</h4>
          <ul className="list-disc list-inside">
            <li><a href="/clothing/backpacks" className="text-blue-600 hover:underline">Backpacks</a></li>
            <li><a href="/clothing/luggage" className="text-blue-600 hover:underline">Luggage & Travel</a></li>
          </ul>
        </li>
      </ul>
    </div>
   
  );
};

export default MenClothingSidebar;