// importaciones
import { useState } from 'react'

import Bienvenido from '../../components/home/welcome/Welcome'
import Intro from '../../components/home/intro/Intro'
// estilos
import '../home/HomeStyle.css'



const Home = () => {
  // funciones

  let [showAboutUs, setShowAboutUS] = useState(true)
  let [showProjectWeb, setShowProjectWeb] = useState(false)
  let [showProjectGame, setShowProjectGame] = useState(false)


  const handleShowAboutUs = () => {
    setShowAboutUS(!showAboutUs)
  }

  const handleShowProjectWeb = () => {
    setShowProjectWeb(!showProjectWeb)
  }

  const handleShowProjectGame = () => {
    setShowProjectGame(!showProjectGame)
  }

  // Vista
  return (
    // Cuerpo de la pagina
    <div className='bodyHome'>
      {/* Titulo de pagina */}
      <div className='contTitleWelcome'>
        <h1 className='tintleHome'>Leonardo Vivas</h1>
        <h5 className='subTitleHome'>Desarrollo web y Videojuegos</h5>
      </div>
      {/* Contenedor general */}
      <div className='contHome'>

        {/* Carta izquierda */}
        <div className='cardHome1'>
          <Bienvenido />
        </div>


        {/* Carta derecha */}
        <div className='cardHome2'>
          {/* Cuerpo de seccion */}
          <Intro />
        </div>
      </div>
    </div>
  )
}

export default Home
