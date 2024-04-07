// Importar
import { Link as LinkRouter } from 'react-router-dom'

// Estilo
import '../navBar/NavBarStyle.css'

const NavBar = () => {
    // Controlador
    // funciones


    // Vista
    return (
        <div className='contNavBar'>
            <LinkRouter className='btnNav' to="/">Inicio</LinkRouter>
            <LinkRouter className='btnNav' to="/abaout_us">Acerca de mi</LinkRouter>
            <LinkRouter className='btnNav' to="/web_development">Desarrollo web</LinkRouter>
            <LinkRouter className='btnNav' to="/video_game_development">Desarrollo Videojuegos</LinkRouter>
        </div>
    )
}

export default NavBar
