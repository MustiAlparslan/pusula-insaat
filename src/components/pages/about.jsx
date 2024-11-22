import React from 'react'
import { motion } from 'framer-motion'

export default function About () {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Hero Bölümü */}
      <motion.div
        className='relative flex items-center justify-center text-center text-white bg-cover bg-center h-screen'
        style={{
          backgroundImage: "url('https://i.imgur.com/V8FlLln.png')"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Siyah Opak Katman */}
        <div className='absolute inset-0 bg-black opacity-60'></div>

        {/* İçerik */}
        <motion.div
          className='relative z-10 max-w-4xl px-6'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className='text-4xl md:text-5xl font-semibold mb-6 text-orange-500'>
            Pusula Alüminyum
          </h1>
          <motion.p
            className='text-lg md:text-xl mb-6 text-gray-200 leading-relaxed'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Pusula Alüminyum, alüminyum sektöründe lider konumda bulunan,
            yenilikçi ve müşteri odaklı bir şirkettir. Yılların tecrübesi ve
            uzman kadrosu ile yüksek kaliteli alüminyum ürünleri üretmekte ve
            geniş bir yelpazede hizmet sunmaktadır. Misyonumuz, sektörde en iyi
            çözümleri sağlayarak müşteri memnuniyetini en üst düzeyde tutmak ve
            sürdürülebilir başarı elde etmektir.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* İçerik Bölümü */}
      <motion.div
        className='max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className='text-gray-800 space-y-12'>
          {/* Misyonumuz */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold text-orange-500 mb-4'>
              Misyonumuz
            </h2>
            <p className='text-lg leading-relaxed'>
              Teknoloji ve inovasyonu birleştirerek, müşterilerimize en yüksek
              kalitede alüminyum ürünleri ve çözümleri sunmak. Çevreye duyarlı
              üretim süreçleri ve sürdürülebilirlik ilkeleri ile sektörde fark
              yaratmak.
            </p>
          </motion.div>

          {/* Vizyonumuz */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold text-orange-500 mb-4'>
              Vizyonumuz
            </h2>
            <p className='text-lg leading-relaxed'>
              Global pazarda tanınan ve tercih edilen bir lider olarak,
              alüminyum sektöründe yenilikçi ve sürdürülebilir çözümler
              geliştirmek.
            </p>
          </motion.div>

          {/* Değerlerimiz */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold text-orange-500 mb-4'>
              Değerlerimiz
            </h2>
            <ul className='list-disc ml-6 text-lg space-y-2'>
              <li>
                <strong>Kalite:</strong> Ürünlerimizin her aşamasında
                mükemmelliği hedefleyerek, müşteri memnuniyetini sağlamayı
                taahhüt ederiz.
              </li>
              <li>
                <strong>İnovasyon:</strong> Sürekli olarak yeni teknolojiler ve
                yöntemler geliştirerek sektörde öncü olmayı amaçlarız.
              </li>
              <li>
                <strong>Çevreye Duyarlılık:</strong> Üretim süreçlerimizde
                çevresel sürdürülebilirliği ve doğa dostu uygulamaları ön planda
                tutarız.
              </li>
              <li>
                <strong>Müşteri Odaklılık:</strong> Müşterilerimizin
                ihtiyaçlarına en uygun çözümleri sunarak, onların başarısına
                katkıda bulunuruz.
              </li>
              <li>
                <strong>Takım Çalışması:</strong> İşbirliği ve dayanışma ile
                güçlü bir ekip ruhu oluşturur, başarılarımızı birlikte kutlarız.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
