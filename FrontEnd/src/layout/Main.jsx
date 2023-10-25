// Importaciones
import { Outlet } from 'react-router-dom'

// Paginas
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'
import NavBar from '../shared/navBar/NavBar'

// Estilos
import '../layout/MainStyle.css'

// Contenido
const Main = () => {
    // Controlador

    // Vista
    return (
        <div className='appi'>
            <header className='header'>
                <Header />
            </header>
            <main className='main'>
                <nav className='nav'>
                    <NavBar />
                </nav>
                <div className='outlet'>
                    <Outlet />
                </div>
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Main
