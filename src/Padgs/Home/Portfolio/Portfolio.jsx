import React from 'react'
import Card from '../../../Componant/Navbar/Card/Card'
import Footer from '../../../Componant/Navbar/Footer/Footer'

export default function Portfolio() {
  return (
    <>
    <div className='container'>
        <h1 className='text-center pt-3 text-capitalize'>portfolio component</h1>
        <div className='row g-3 py-5 rounded-3  '>
      <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/poert1.png"/>
      <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/port2.png"/>
      <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/port3.png"/>
      <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/poert1.png"/>
      <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/port2.png"/>
       <Card imgsrc="https://routeegy.github.io/startFramework/assets/images/port3.png"/>
        </div>
    </div>
    <Footer/>
    </>
  )
}
