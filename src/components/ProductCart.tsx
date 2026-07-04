import  {type Product } from "../types/Index";
import { Link } from "react-router-dom";

interface ProductCartProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCart({ product, onAddToCart }: ProductCartProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <img className="h-48 w-full object-cover" src={product.thumbnail} alt={product.title}/>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h2>
        <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto pt-4">
          <p className="text-2xl font-bold text-pink-500">${product.price.toFixed(2)}</p>
          <button
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-pink-600 hover:shadow-md transition duration-300 transform hover:-translate-y-1"
            onClick={() => onAddToCart(product)}>
            {product.stack > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
// Uyga vazifasi: product cartni ishlatish