// import React from 'react'
// import Header from '../components/Header'
// import Main from '../components/Main'
// import Footer from '../components/Footer'

// const Home = () => {
//   return (
//     <>
//     <Header/>
//     <Main/>
//     <Footer/>
    
//     </>
//   )
// }

// export default Home

import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Header from '../components/Header'
import ImgYO from '../assets/Agustin.png'

const Home = () => {
    const alumno = {
        nombre:'Agustin Argañaraz',
        edad: 28,
        legajo: 55472,
        Tel: 3816130131,
        Deporte: 'Futbol',
        foto: ImgYO,
        instagram: 'http://instagram.com/agustin.arganaraz'
    }

  return (
    <div>
        <Header/>
        <Main alumno = {alumno} />
        <Footer/>
    </div>
  )
}

export default Home