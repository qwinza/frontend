import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-6 py-4 transition-shadow duration-300 bg-giCream ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-giGreen">GiMultiLab</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-giGreen">Beranda</Link></li>
          <li><Link to="/tentang" className="hover:text-giGreen">Tentang</Link></li>
          <li><Link to="/fitur" className="hover:text-giGreen">Peta Pangan Lokal</Link></li>
          <li><Link to="/fitur" className="hover:text-giGreen">Artikel & Tips</Link></li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="border border-black hover:bg-giGreen hover:border-giGreen hover:text-white text-black px-4 py-2 rounded-md transition"
          >
            Masuk
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-giGreen" /> : <Menu className="w-6 h-6 text-giGreen" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4 pb-4 pt-4 border-t bg-giCream">
          <Link to="/" className="block text-giGreen hover:text-opacity-80">Beranda</Link>
          <Link to="/tentang" className="block text-giGreen hover:text-opacity-80">Tentang</Link>
          <Link to="/peta" className="block text-giGreen hover:text-opacity-80">Peta Pangan Lokal</Link>
          <Link to="/Artikel" className="block text-giGreen hover:text-opacity-80">Artikel & Tips</Link>
          <Link
            to="/login"
            className="block border border-giGreen text-giGreen hover:bg-giGreen hover:text-white px-3 py-2 rounded-md w-fit mt-2"
          >
            Masuk
          </Link>
        </div>
      )}
    </nav>
  );
}
