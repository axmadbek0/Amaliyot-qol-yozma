export default function ProductPage() {
  return (
    <div className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:shadow-2xl border border-pink-50">
        <div className="md:w-1/2 bg-pink-50/50 h-96 md:h-auto animate-pulse flex items-center justify-center">
          <svg className="w-16 h-16 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="uppercase tracking-widest text-sm text-pink-500 font-bold mb-3">Yangi Koleksiya</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Mahsulot Nomi</h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">Bu yerda mahsulot haqida batafsil ma'lumot bo'ladi. Uning sifati, matosi, rangi va boshqa qulayliklari haqida ko'proq yozishingiz mumkin. Bu mijozlarga tanlov qilishda yordam beradi.</p>
          <div className="flex items-center justify-between mb-10">
            <span className="text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600">450,000 UZS</span>
            <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full border border-pink-100">
              <span className="text-yellow-400 text-xl">★★★★☆</span>
              <span className="text-pink-600 font-medium text-sm">(12 sharh)</span>
            </div>
          </div>
          <button className="w-full bg-pink-500 text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-pink-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-lg">
            Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}