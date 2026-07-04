import ButtonCart from "../components/ButtonCart";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50/30 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden border border-pink-100">
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">Dimilliy - Nafislik va An'ana</h1>
          <p className="text-lg md:text-xl font-medium text-pink-50 max-w-3xl mx-auto leading-relaxed">Sizning go'zalligingiz bizning ilhomimiz. Dimilliy — har bir ayolning betakror uslubini milliy matolar va zamonaviy bichimlar orqali namoyon etuvchi brend.</p>
        </div>
        <div className="p-8 md:p-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 tracking-wide text-center">Online Magazine Administration</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
            <div className="w-full sm:w-auto transform transition duration-300 hover:-translate-y-1">
              <ButtonCart text="Product qo'shish" onClick={() => { }} />
            </div>
            <div className="w-full sm:w-auto transform transition duration-300 hover:-translate-y-1">
              <ButtonCart text="Category qo'shish" onClick={() => { }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}