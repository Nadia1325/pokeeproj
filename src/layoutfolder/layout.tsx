import { Outlet } from "react-router-dom";
import NavbarPage from "../component/navbar";
import FooterPage from "../component/footer";
import TopBar from "../component/TopBar";
import Product1 from "../component/freeshipping";
import Footer2 from "../component/footer2";


const LayoutHandling = () => {
    return (
        <div>
            <TopBar />
            <NavbarPage />
           
                <Outlet />
          <Product1/>
            <FooterPage />
            <Footer2/>
        </div>
    );
}

export default LayoutHandling;