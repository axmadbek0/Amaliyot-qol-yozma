import {BrowserRouter, Route, Routes} from "react-router-dom";

import {HomePage} from "../pages/HomePage";
import {ProductPage} from "../pages/ProductPage";
import {CartPage} from "../pages/CartPage";
import {CatalogPage} from "../pages/CatalogPage";
import {OrdersPage} from "../pages/OrdersPage";

export function AppRouter() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </BrowserRouter>    
    );
}
