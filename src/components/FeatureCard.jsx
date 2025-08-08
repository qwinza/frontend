import React from "react";
import telusuri from "../assets/telusuri-pangan.png";
import edukasiGizi from "../assets/edukasi-gizi.png";
import hitungLabel from "../assets/hitung-label.png";
import petaPangan from "../assets/peta-pangan-2.png";
import artikelTips from "../assets/artikel-tips.png";

export default function FeatureCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* 1 */}
      <div className="text-center">
        <h5 className="text-lg font-semibold">Fitur Utama</h5>
        <h2 className="text-giGreen text-3xl font-bold">GiMultiLab</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          src={telusuri}
          alt="Telusuri Gizi"
          className="w-32 h-32 object-contain rounded-lg p-1"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Telusuri Kandungan Gizi Bahan Pangan Lokal
          </h2>
          <p className="text-gray-700">
            Cari tahu kandungan nutrisi dari berbagai bahan makanan lokal mulai
            dari karbohidrat, protein, lemak, hingga vitamin. Mudah, cepat, dan
            terpercaya.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          src={edukasiGizi}
          alt="Edukasi Gizi"
          className="w-32 h-32 object-contain rounded-lg p-1"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Edukasi Gizi & Resep Sehat Berbasis Lokal
          </h2>
          <p className="text-gray-700">
            Pelajari cara menyusun pola makan sehat menggunakan bahan makanan
            dari sekitar kita. Dilengkapi resep-resep praktis & bergizi!
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          src={hitungLabel}
          alt="Hitung Label Gizi"
          className="w-32 h-32 object-contain rounded-lg p-1"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Hitung Label Gizi Otomatis untuk UMKM
          </h2>
          <p className="text-gray-700">
            Buat pelaku usaha mikro atau rumahan? Hitung label gizi produkmu
            secara instan untuk meningkatkan kepercayaan konsumen dan memenuhi
            regulasi pangan.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          src={petaPangan}
          alt="Peta Pangan Lokal"
          className="w-32 h-32 object-contain rounded-lg p-1"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Peta Pangan Lokal Antar Daerah
          </h2>
          <p className="text-gray-700">
            Lihat persebaran bahan pangan khas berbagai daerah dan keunikan
            gizinya dalam tampilan peta interaktif.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <img
          src={artikelTips}
          alt="Artikel & Wawasan"
          className="w-32 h-32 object-contain rounded-lg p-1"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Artikel, tips, dan wawasan tentang swasembada pangan
          </h2>
          <p className="text-gray-700">
            Baca insight menarik seputar pentingnya gizi, kemandirian pangan,
            dan bagaimana pangan lokal bisa jadi solusi masa depan.
          </p>
        </div>
      </div>
    </div>
  );
}
