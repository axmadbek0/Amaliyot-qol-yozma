import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md mb-8 border-b border-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-pink-500 tracking-tight">Dimilliy</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors">
              Bosh sahifa
            </Link>
            <Link to="/catalog" className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors">
              Katalog
            </Link>
            <Link to="/cart" className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors">
              Savatcha
            </Link>
            <Link to="/orders" className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors">
              Buyurtmalar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
