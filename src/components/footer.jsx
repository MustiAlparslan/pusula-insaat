import React from 'react'
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                &copy; 2024 Pusula Yapı. Tüm Hakları Saklıdır.
            </motion.p>
        </footer>
    )
}
