import React, { useState } from 'react';
import ProductGrid from './ProductGrid';

interface ShopItemProps {
  image: string;  // URL of the product image
  name: string;   // Name of the product
  price: number;  // Price of the product
}

const ShopItem: React.FC<ShopItemProps> = ({ image, name, price }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    // You can also add logic here to handle adding the item to a cart
    console.log(`${name} added to cart.`);
  };

  <ProductGrid/>

  return (
    <div className="border rounded-lg shadow-md p-4 m-4">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-xl font-bold">${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className={`mt-2 bg-yellow-500 text-white py-2 px-4 rounded ${addedToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={addedToCart} // Disable button if item is already added to cart
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>


  );
};

export default ShopItem;