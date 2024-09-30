import React from 'react'
import Nav from './components/Nav'
import Herosection from './components/Herosection'
import Footer from './components/Footer'

export default function App() {
  return (
    <React.StrictMode>
      <Nav Brand='Transport' pic='https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <Herosection/>
      <Footer/>
    </React.StrictMode>
  )
}
