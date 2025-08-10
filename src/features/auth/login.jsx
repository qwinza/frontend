import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgLogin from "../../assets/bgLogin.png";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Login gagal");
      } else {
        // Misal simpan token di localStorage atau context sesuai backend
        localStorage.setItem("token", data.token);

        // Redirect ke halaman dashboard atau halaman lain
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMsg("Gagal terkoneksi ke server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-giCream">
      <div className="flex w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden bg-white">
        <div className="flex-1 px-12 py-16">
          <h2 className="text-4xl font-bold mb-8 text-giGreen text-center">Login</h2>

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-600 text-center font-semibold mb-4">{errorMsg}</p>
          )}

          <form className="space-y-6 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-giGreen font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-giGreen"
                placeholder="Masukkan email"
                required
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
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-giGreen"
                placeholder="Masukkan password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-giGreen text-white py-3 rounded font-semibold hover:bg-green-700 transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sedang login..." : "Login"}
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
