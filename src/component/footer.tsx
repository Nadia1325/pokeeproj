import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-950 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">INFORMATION</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">Store Location</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-500">Latest News</a></li>
            <li><a href="#" className="hover:text-yellow-500">Our Sitemap</a></li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">OUR SERVICE</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms of Sale</a></li>
            <li><a href="#" className="hover:text-yellow-500">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-500">Payments</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">MY ACCOUNT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-500">Tracking Order</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to our mailing list to get the new updates!</p>
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 p-2 w-full mb-2 rounded"
          />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">
            SIGN UP
          </button>
          <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Twitter</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
        <a href="#" className="hover:text-yellow-500">LinkedIn</a>
      </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-6">
        <p className="text-gray-600">Lorim ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-600">576-245-2478 | info@kapee.com</p>
        <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
      </div>

      {/* Social Media Links */}
      
    </div>
  );
};

export default Footer;


