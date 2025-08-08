import BgLogin from "../../assets/bgLogin.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-giCream">
      <div className="flex w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden bg-white">
        <div className="flex-1 px-12 py-16">
          <h2 className="text-4xl font-bold mb-8 text-giGreen text-center">Login</h2>
          <form className="space-y-6 w-full max-w-md mx-auto">
            <div>
              <label
                htmlFor="email"
                className="block text-giGreen font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-giGreen"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-giGreen font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-giGreen"
                placeholder="Masukkan password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-giGreen text-white py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>


          <div className="mt-6 text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <a
              href="/usertype"
              className="text-giGreen font-semibold hover:underline"
            >
              Daftar di sini
            </a>
          </div>
        </div>

        <div className="flex-1 bg-giGreen flex items-center justify-center p-10">
          <img
            src={BgLogin}
            alt="Login Illustration"
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
