export default function HomePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-blue-50 p-8 rounded-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Our Store</h1>
        <p className="text-lg text-blue-700 mb-6">Find the best products at amazing prices.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Shop Now</button>
      </div>
    </div>
  );
}