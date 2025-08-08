import React from "react";
import aksesCepat from "../assets/akses-cepat.png";
import duaPeran from "../assets/dua-peran.png";
import visualisasi from "../assets/visualisasi.png";
import petaPangan from "../assets/peta-pangan.png";

export default function Reason() {
  return (
    <section className="bg-giGreen py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={aksesCepat}
            alt="Akses Cepat"
            className="max-w-sm md:w-1/2 rounded-xl shadow-none"
          />
          <div className="w-full md:w-1/2 ">
            <h5 className="text-darkGreen font-bold">Mengapa GiMultiLab?</h5>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Akses Cepat ke Informasi Nutrisi
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Dengan database nutrisi produk yang terpercaya, kamu bisa langsung
              tahu kandungan kalori, protein, dan karbohidrat dalam setiap
              makanan atau produk yang kamu cek.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={duaPeran}
            alt="Dua Peran"
            className="max-w-sm md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="w-full md:w-1/2 ">
            <h5 className="text-darkGreen font-bold">Mengapa GiMultiLab?</h5>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Dua Peran dalam Satu Platform
            </h3>
            <p className="text-lg leading-relaxed text-white">
              <strong>Saya sebagai Masyarakat Umum:</strong> ingin tahu
              kandungan gizi makanan untuk kebutuhan sehari-hari.
              <br />
              <strong>Saya sebagai Pelaku UMKM:</strong> ingin menampilkan nilai
              gizi produk makanan kepada konsumennya secara transparan dan
              profesional.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={visualisasi}
            alt="Visualisasi Mudah"
            className="max-w-sm md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="w-full md:w-1/2">
            <h5 className="text-darkGreen font-bold">Mengapa GiMultiLab?</h5>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Visualisasi Mudah & Interaktif
            </h3>
            <p className="text-lg leading-relaxed text-white">
              GiMultiLab menyajikan data dalam bentuk tabel, grafik, dan
              indikator visual, sehingga lebih mudah dipahami oleh semua
              kalangan.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={petaPangan}
            alt="Peta Pangan Lokal"
            className="max-w-sm md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="w-full md:w-1/2">
            <h5 className="text-darkGreen font-bold">Mengapa GiMultiLab?</h5>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Mengapa GiMultiLab? Dari Peta Pangan Lokal Hingga Wawasan
              Swasembada
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Dari peta pangan lokal hingga wawasan swasembada, GiMultiLab
              membantu memahami ketersediaan pangan dan mendukung upaya
              ketahanan gizi nasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
