// Importaciones
import { Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

// Paginas
import MainIntro from '../components/mainIntro/MainIntro'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'
import NavBar from '../shared/navBar/NavBar'

// Estilos
import '../layout/MainStyle.css'


// Contenido
const Main = () => {
    // Controladores
    let [intro, setIntro] = useState(true)

    const handelIntro = () => {
        setIntro(!intro)
    }

    // Variables

    // Vista
    return (
        <>
            {
                intro ?
                    <div className="bodyMainIntro">
                        <div className='rowVGD_1'>
                            <div>
                                <h1>Monedas</h1>
                            </div>
                            <div>
                                <h1>Corazones</h1>
                            </div>
                        </div>
                        <h1>Conoce mi mundo</h1>
                        <button onClick={handelIntro}>Intro</button>
                    </div>
                    :
                    <div className='appi'>
                        <header>
                            <div className='header'>
                                <Header />
                                <nav className='nav'>
                                    <NavBar />
                                </nav>
                            </div>
                        </header>
                        <main className='main'>
                            <div className='outlet'>
                                <Outlet />
                            </div>
                        </main>
                        <footer className='footer'>
                            <Footer />
                        </footer>
                    </div>
            }
        </>
    )
}

export default Main
