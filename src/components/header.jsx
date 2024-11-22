import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Sayfa yolunu alır

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfaya göre Header arka plan rengi
  const headerBackground =
    location.pathname === "/contact"
      ? "bg-gray-100" // Contact sayfasında gri arka plan
      : scrolled
      ? "bg-white" // Scroll yapılınca beyaz arka plan
      : "bg-transparent"; // Diğer sayfalarda transparan

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            className={`text-2xl font-bold transition duration-300 ${
              scrolled || location.pathname === "/contact"
                ? "text-gray-800"
                : "text-white"
            }`}
          >
            Pusula Yapı
          </motion.h1>
        </Link>
        {/* Hamburger Menü */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        {/* Navigasyon */}
        <nav
          className={`md:flex space-x-6 ${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 bg-white md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none z-40 md:z-auto`}
        >
          {[
            { name: "Hakkımızda", path: "#about" },
            { name: "Projeler", path: "#projects" },
            { name: "Hizmetler", path: "#services" },
            { name: "İletişim", path: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  className={`block md:inline-block px-6 py-2 md:py-0 ${
                    scrolled || location.pathname === "/contact"
                      ? "text-gray-800"
                      : "text-white"
                  } transition-all hover:text-blue-500`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`block md:inline-block px-6 py-2 md:py-0 ${
                    scrolled || location.pathname === "/contact"
                      ? "text-gray-800"
                      : "text-white"
                  } transition-all hover:text-blue-500`}
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
