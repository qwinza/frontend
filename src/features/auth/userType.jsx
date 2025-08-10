import userUmum from "../../assets/umumLogin.png";
import pelakuUmkm from "../../assets/umkmLogin.png";

export default function RegisterChoice() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 pt-24 bg-giCream">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-black">
          Pilih Tipe Akun untuk Registrasi
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="w-auto min-w-[320px] flex flex-col bg-giGreen rounded-xl shadow-2xl p-6 text-black">
            <div className="flex gap-6 items-center mb-6">
              <img
                src={userUmum}
                alt="User Umum"
                className="w-48 h-48 object-contain rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">User Umum</h3>
                <p>
                  Untuk pengguna yang ingin menghitung dan memantau nilai gizi harian.
                </p>
              </div>
            </div>
            <a
              href="/register/user"
              className="bg-white text-giGreen font-semibold px-24 py-3 rounded hover:bg-gray-100 transition self-center"
            >
              Daftar sebagai User Umum
            </a>
          </div>

          <div className="w-auto min-w-[320px] flex flex-col bg-giGreen rounded-xl shadow-2xl p-6 text-black">
            <div className="flex gap-6 items-center mb-6">
              <img
                src={pelakuUmkm}
                alt="Pelaku UMKM"
                className="w-48 h-48 object-contain rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">Pelaku UMKM</h3>
                <p>
                  Untuk pelaku usaha mikro dan kecil yang ingin menghitung label gizi produk.
                </p>
              </div>
            </div>
            <a
              href="/register/umkm"
              className="bg-white text-giGreen font-semibold px-24 py-3 rounded hover:bg-gray-100 transition self-center"
            >
              Daftar sebagai Pelaku UMKM
            </a>
          </div>
        </div>

        <div className="mt-14 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <a href="/login" className="text-giGreen font-semibold hover:underline">
            Masuk di sini
          </a>
        </div>
      </div>
    </div>
  );
}
