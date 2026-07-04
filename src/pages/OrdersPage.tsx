import OrdersCart from '../components/OrdersCart';

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">My Orders</h1>
        </div>
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-pink-100 min-h-[400px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl">
          <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          </div>
          <p className="text-gray-500 text-xl font-medium">You have no orders yet.</p>
          <p className="text-gray-400 mt-2">When you place orders, they will appear here.</p>
        </div>
      </div>
    </div>
  );
}
