import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import EcommerceFeaturesAndTabs from './component/EcommerceFeaturesAndTabs';
import EcommerceHero from './component/EcommerceHero';
import LayoutHandling from './layoutfolder/layout';

import ContactUs from './component/ContactUs';
import EcommerceShop from './component/EcommerceShop';
import BlogApp from './component/Blogs'; 
import Elements from './component/components';
import Home from './component/Home';
import Product1 from './component/freeshipping';
import FeaturedProducts from './component/BestSellingProducts';
import ProductGrid from './component/ProductGrid';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LayoutHandling />}>
          <Route index element={<EcommerceHero />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<ContactUs />} />
          <Route path="/EcommerceShop" element={<EcommerceShop />} />
          <Route path='/BlogPost' element={<BlogApp />} />
          <Route path='/Elements' element={<Elements/>} />
          <Route path='/freeshipping' element={<Product1/>}/>
          <Route path='/FeatureProducts' element={<FeaturedProducts/>}/>
          <Route path='/ProductGrid' element={<ProductGrid/>}/>
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;