export default function CartPage() {
  return (
    <div className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">Shopping Cart</h1>
        <div className="bg-white p-12 shadow-xl border border-pink-100 rounded-3xl text-center flex flex-col items-center justify-center min-h-[50vh] transform transition-all duration-300 hover:shadow-2xl">
          <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-4">Sizning savatchangiz bo'sh</p>
          <p className="text-gray-500 mb-8 max-w-md text-lg">Hali hech narsa qo'shmadingiz. O'zingizga yoqadigan mahsulotlarni topish uchun kolleksiyalarimizni ko'rib chiqing.</p>
          <button className="bg-pink-500 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            Xaridni davom ettirish
          </button>
        </div>
      </div>
    </div>
  );
}