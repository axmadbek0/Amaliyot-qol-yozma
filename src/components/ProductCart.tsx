export default function ProductCart() {
  return (
    <div className="p-4 bg-white shadow rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">Image</div>
      <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
      <p className="text-blue-500 font-bold mt-1">$99.99</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}
