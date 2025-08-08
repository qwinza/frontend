import InvitationCard from "../components/InvitationCard";
import Navbar from "../components/Navbar";
import About from "./About";
export default function Home() {
  return (
    <div className="bg-giCream min-h-screen">
      <Navbar />

      <main className="pt-48 px-6 pb-10">
        <section className="max-w-7xl mx-auto text-left">
          <h1 className="text-4xl font-bold mb-2">Dukung Kemandirian</h1>
          <h1 className="text-4xl font-bold mb-2 text-giGreen">
            Pangan & Gizi
          </h1>
          <h1 className="text-4xl font-bold mb-6">Untuk Hidup Sehat</h1>

          <p className="text-lg text-80 max-w-xl mb-6">
            Wujudkan ketahanan pangan dari rumah dengan mengelola asupan gizi
            secara bijak. Temukan informasi nilai gizi produk pangan secara
            cepat, akurat, dan mudah diakses.
          </p>

          <button className="bg-giGreen text-white px-6 py-3 rounded-lg hover:bg-giGreen/90 transition">
            Mulai Sekarang
          </button>
        </section>
      </main>
      <About />
      <InvitationCard />
    </div>
  );
}
