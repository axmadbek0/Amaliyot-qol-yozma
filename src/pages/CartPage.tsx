export default function CartPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-lg text-center text-gray-500">
        <p className="text-lg mb-4">Your cart is currently empty</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Continue Shopping</button>
      </div>
    </div>
  );
}