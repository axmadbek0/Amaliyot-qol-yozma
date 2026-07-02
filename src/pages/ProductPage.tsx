export default function ProductPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 h-96 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-200">
          Product Image
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Awesome Product</h1>
          <p className="text-3xl text-blue-600 font-bold mb-6">$99.99</p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            This is a detailed description of the product. It has amazing features and is built with high-quality materials to last a lifetime.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}