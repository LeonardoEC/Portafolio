
// estilos
import '../web_development/WebDevelopmentStyle.css'

// props
import Carousel from '../../components/carousel/Carousel'

const WebDevelopment = () => {

    return (
        // Body
        <div className='bodyWebDevelopment'>
            {/* Container */}
            <div className='rowWD_1'>
                {/* cartd */}
                <div className='colWE_1'>
                    <h2 className='titleWE'>Desarrollo web</h2>
                    <p className='textWE'>
                        Bienvenido, como desarrollador web tuve un inicio
                        un poco caotico debido a la imposicion de usar Angular,
                        sin siquiera haberme enseñado JavaScript pero esta mala experiencia
                        no me detuvo, ya que comence a estudiar HTML, CSS y JavaScript
                        de manera autodidacta, luego intente incorporar SQL para mis bases de datos
                        pero tampoco resulto ser de mis herramientas favoritas, con el Bootcamp
                        de Minhub reforce mucho mis habilidades basicas de desarrollo web y mas adelante
                        aprendi a manejar React y MogoDB ademas de que forjaron mis habilidades
                        en mi Stack actual el cual es MERN.
                    </p>

                    <div className='colWE_2'>
                        <h1>Certificados</h1>
                        <div className='rowWD_2'>
                            <div className='colWE_2'>
                                <Carousel className="carousel"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='colWE_2'>
                        <h1>Proyectos</h1>
                        <div className='rowWD_2'>
                            <div className='colWE_2'>
                            <img src="" alt="cetficado" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WebDevelopment