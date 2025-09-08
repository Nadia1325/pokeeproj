import { Outlet } from "react-router-dom";
import NavbarPage from "../component/navbar";
import FooterPage from "../component/footer";
import TopBar from "../component/TopBar";
import Product1 from "../component/freeshipping";


const LayoutHandling = () => {
    return (
        <div>
            <TopBar />
            <NavbarPage />
           
                <Outlet />
          <Product1/>
            <FooterPage />
        </div>
    );
}

export default LayoutHandling;