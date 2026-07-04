import  { type Product } from "./Index";

export interface CartItem {
    productId: number;
    quantity: number;
    price: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

export type CartAction =
    | { type: "ADD"; payload: { product: Product; quantity: number } }
    | { type: "REMOVE"; payload: { productId: number } }
    | { type: "UPDATE"; payload: { productId: number; quantity: number } }
    | { type: "CLEAR"; payload: CartState 
}
