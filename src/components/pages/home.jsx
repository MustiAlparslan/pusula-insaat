import React from 'react'
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      {/* Hero Bölümü */}
      <section
        id="hero"
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/iln8oeM.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 text-white">
          {/* Typewriter Effect */}
          <motion.h1
            className="text-3xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["Geleceği Şekillendiriyoruz", "Kalite, Yenilik, Güven"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          {/* Alt Metin */}
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Kalite, yenilik ve güvenle inşaatın ötesine geçiyoruz.
          </motion.p>
          {/* CTA Butonu */}
          <motion.a
            href="#contact"
            className="mt-6 inline-block py-3 px-8 rounded-full text-white font-bold shadow-lg transition transform hover:scale-105"
            style={{
              background: "linear-gradient(to right, #1D4ED8, #22C55E)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Bize Ulaşın
          </motion.a>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="about" className="py-16 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
          <p className="text-lg text-gray-600">
            Pusula Yapı, dünya standartlarında projeler geliştiren ve müşteri memnuniyetini öncelik olarak belirleyen yenilikçi bir inşaat firmasıdır. Vizyonumuz, inşaat sektöründe fark yaratmaktır.
          </p>
        </motion.div>
      </section>

      {/* Projeler */}
      <section id="projects" className="py-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Projelerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ name: "Atayıldız Plaza 1", location: "Ankara", image: "https://i.imgur.com/iln8oeM.png" },
            { name: "Ankara Etlik Sağlık Kampüsü", location: "Ankara", image: "https://i.imgur.com/2nL9lwD.png" },
            { name: "Fethiye Özyer Merkez Ofis", location: "Muğla", image: "https://i.imgur.com/U0v42uN.jpeg" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>

  )
}
