import pelakuUmkm from "../assets/pelaku-umkm.png";
import userUmum from "../assets/user-umum.png";

export default function InvitationCards() {
  return (
    <div className="flex flex-col gap-6 p-6 items-center">
      {/* Card Utama */}
      <div className="bg-giGreen p-6 rounded-2xl max-w-4xl w-full shadow-md mx-auto">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">
          Pilih Sendiri Peranmu untuk Memulai:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Card User Umum */}
          <button
            onClick={() => alert("User Umum clicked")}
            className="bg-giGreen rounded-xl shadow-2xl p-6 text-white w-64 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-4">User Umum</h3>
            <img
              src={userUmum}
              alt="User Umum"
              className="w-40 h-40 object-contain mb-4"
            />
            <p className="text-sm opacity-90 text-center">
              Menghitung dan menampilkan nilai gizi produk untuk bisa dilihat
              orang lain
            </p>
          </button>

          {/* Card Pelaku UMKM */}
          <button
            onClick={() => alert("Pelaku UMKM clicked")}
            className="bg-giGreen rounded-xl shadow-2xl p-6 text-white w-64 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-4">Pelaku UMKM</h3>
            <img
              src={pelakuUmkm}
              alt="Pelaku UMKM"
              className="w-40 h-40 object-contain mb-4"
            />
            <p className="text-sm opacity-90 text-center">
              Menghitung dan menampilkan nilai gizi produk untuk bisa dilihat
              orang lain
            </p>
          </button>
        </div>
        <p className="text-sm opacity-90 text-center mt-12 text-white font-bold">
          Pilihan akan membawa kamu ke alur penggunaan yang sesuai dengan
          kebutuhan
        </p>
      </div>
    </div>
  );
}
