import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Division from '../components/division'

export default function MainLayout ({ children }) {
  return (
    <div className='font-sans text-gray-800'>
      <Header />
      {children}
      <Footer />
      <Division />
    </div>
  )
}
