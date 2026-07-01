import {BrouserRouter, Route, Routes} from "react-router-dom";

import {HomePage} from "../pages/HomePage";
import {ProductPage} from "../pages/ProductPage";
import {CartPage} from "../pages/CartPage";
import {CatalogPage} from "../pages/CatalogPage";

export function AppRouter() {
    return (
        <BrouserRouter> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
            </Routes>
        </BrouserRouter>
    );
}

