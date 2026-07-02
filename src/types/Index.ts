export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stack: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}                   

export interface User {
    id: number;
    fullName: string;
    email: string;
}

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
}

export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    totalAmount: number;
    status: string;
    createdAt: string;
}
