export default function CustomersPage() {
    return (
      <div className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-32"></div>
          <div className="px-8 pb-8 flex flex-col items-center -mt-16">
            <img 
              className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover mb-4" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTA76obaIBxQg5FWN-YpoJz5piTuXVoyrtFroRgGueQ&s=10" 
              alt="Profile" 
            />
            <div className="text-center space-y-1 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Migael Doe</h2>
              <p className="text-sm font-medium text-pink-500">miguel3@gmail.com</p>
            </div>
            <button className="w-full bg-pink-50 text-pink-600 font-bold py-3 px-6 rounded-xl hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
              Habar yuborish
            </button>
          </div>
        </div>
      </div>
    );
}