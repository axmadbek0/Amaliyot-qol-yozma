import {useEffect, useState} from "react";
import axios  from "axios";
import type {Product} from "../types/Index";

interface UseProductsResult {
    products:Product[];
    loading:boolean;
    error:string | null;
    refetch: () => void;
}

export const useProducts = ():UseProductsResult => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Product[]>("https://api.mocki.io/v2/06b4537e");
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching products");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const refetch = () =>{
        setProducts([]);
        setLoading(true);
        setError(null);
        setProducts([]);
    };

    return {products, loading, error, refetch};
}