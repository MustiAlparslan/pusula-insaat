import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { references_data as references } from '../../data/references-data';

const Placeholder = () => (
  <div className="w-full h-full bg-gray-300 flex items-center justify-center animate-pulse">
    <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  </div>
);

export default function References() {
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  // Placeholder'ları yarım saniye göster
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlaceholders(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 mt-6 p-6 flex flex-col items-center">
      {/* Başlık */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Referanslarımız
      </motion.h1>

      {/* Flex Container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
        {showPlaceholders
          ? // Placeholder Kartlar
            references.map((_, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col w-full sm:w-[45%] lg:w-[30%] h-80 bg-gray-300 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Placeholder />
              </motion.div>
            ))
          : // Gerçek Kartlar
            references.map((ref, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col w-full sm:w-[45%] lg:w-[30%] h-80 bg-gray-300 rounded-lg shadow-lg overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Gerçek Resim */}
                <img
                  src={ref.image}
                  alt={ref.description}
                  className="w-full h-full object-cover transition-all duration-500 grayscale hover:grayscale-0"
                />

                {/* Metin Bilgisi */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md p-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {ref.description}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {ref.city}, {ref.country}
                  </p>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
}