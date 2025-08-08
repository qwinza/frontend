import React from "react";
import Reason from "../components/Reason";
import FeatureCard from "../components/FeatureCard";

export default function AboutUs() {
  return (
    <section id="about" class="py-12 bg-giCream mt-20">
      <div class="container mx-auto px-4">
        <h5 class="font-bold text-center text-black">
          Sedikit Tentang
        </h5>
        <h2 className="text-giGreen text-center text-4xl font-bold mb-12">GiMultiLab</h2>

        <p class="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Kami hadir untuk mendukung{" "}
          <span class="text-giGreen font-semibold">swasembada pangan</span>{" "}
          Indonesia melalui teknologi. Dari penelusuran bahan pangan lokal
          hingga edukasi gizi, kami membantu masyarakat dan UMKM mendapatkan
          informasi gizi yang akurat, praktis, dan berbasis potensi daerah.
        </p>
      </div>
      <Reason />
      <FeatureCard /> 
    </section>
  );
}
