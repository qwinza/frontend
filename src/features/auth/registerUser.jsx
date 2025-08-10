import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    const payload = { ...form, role: "user" };

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(JSON.stringify(data.errors || data.message));
      } else {
        setSuccessMsg("Registrasi berhasil! Anda akan diarahkan ke halaman login.");
        setForm({
          name: "",
          email: "",
          username: "",
          password: "",
          password_confirmation: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setErrorMsg("Gagal terkoneksi ke server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-giCream px-6 py-12 pt-24">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-giGreen">
          Registrasi User Umum
        </h2>

        {/* Pesan sukses */}
        {successMsg && (
          <p className="text-green-600 text-center font-semibold mb-4">
            {successMsg}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Nama Lengkap */}
          <div>
            <label className="block text-giGreen font-semibold mb-2">
              Nama Lengkap
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-giGreen focus:outline-none"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-giGreen font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-giGreen focus:outline-none"
              placeholder="Masukkan email"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-giGreen font-semibold mb-2">
              Username
            </label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-giGreen focus:outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-giGreen font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-giGreen focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label className="block text-giGreen font-semibold mb-2">
              Konfirmasi Password
            </label>
            <input
              name="password_confirmation"
              type="password"
              value={form.password_confirmation}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-giGreen focus:outline-none"
              placeholder="Konfirmasi password"
              required
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-600 text-center font-semibold">{errorMsg}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-giGreen text-white py-3 rounded font-semibold hover:bg-green-700 transition ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sedang mendaftar..." : "Daftar"}
          </button>

          {/* Link Login */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Sudah punya akun?{" "}
            <a href="/login" className="text-giGreen font-semibold hover:underline">
              Masuk di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
