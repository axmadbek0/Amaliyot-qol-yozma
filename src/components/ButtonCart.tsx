import { type Button } from "../types/Index";
import { Link } from "react-router-dom";

export default function ButtonCart({ text, onClick }: Button) {
  return (
    <button onClick={onClick} className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      {text}
    </button>
  );
}
