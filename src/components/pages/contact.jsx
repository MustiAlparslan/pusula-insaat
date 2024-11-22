import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col  mt-6  items-center justify-center bg-gray-100 p-6">
      {/* Logo */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
        />
      </motion.div>

      {/* İçerik ve Harita Bölümü */}
      <motion.div
        className="border border-gray-300 shadow-lg flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 p-6 sm:p-10 bg-white rounded-lg max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* İletişim Bilgileri */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            İletişim Bilgileri
          </h2>
          <p className="mb-6 text-gray-600 text-sm sm:text-base">
            Bize aşağıdaki iletişim bilgilerinden ulaşabilirsiniz.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">📞</span>
              <a
                href="tel:+903123944321"
                className="hover:underline hover:text-blue-500 transition-colors"
              >
                +90 (312) 394 43 21
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">📞</span>
              <a
                href="tel:+903123944322"
                className="hover:underline hover:text-blue-500 transition-colors"
              >
                +90 (312) 394 43 22
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">✉️</span>
              <a
                href="mailto:info@pusulaalüminyum.com.tr"
                className="hover:underline hover:text-blue-500 transition-colors"
              >
                info@pusulaalüminyum.com.tr
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">📍</span>
              <a
                href="https://maps.app.goo.gl/FgKdATyPsovXhqWP6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-500 transition-colors"
              >
                İvedik OSB. Mahallesi 1476 Cadde No: 8/26 Yenimahalle/ANKARA
              </a>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="w-full lg:w-auto">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.3160881671056!2d32.739305099999996!3d39.990225699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3498a55f51e23%3A0xc773c1dd5d29430!2sSerhat%2C%201476.%20Sk.%20No%3A8%20D%3A36%2026%2C%2006374%20Yenimahalle%2FAnkara!5e1!3m2!1str!2str!4v1732275798261!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
