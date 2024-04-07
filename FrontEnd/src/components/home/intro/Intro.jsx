import '../intro/IntroStyle.css'

const Intro = () => {
    return (
        <div className="BodyIntro">

            <section className='constSect'>
                <h1 className='titleIntro'>Sobre mi</h1>
                <div className='contArt contArtRever'>
                    <div>
                        <p className='textIntro'>
                            Soy estudiante programacion en el Instituto Politecnico de Cordoba(ISPC) y
                            tambien autodicacta, e realizado multiples cursos en diversas
                            areas del sector IT pero actualmente me estoy enfocando en el
                            Desarrollo de videojuegos y las paginas webs
                        </p>
                    </div>
                    <figure className='contSecImg'>
                        <a href="abaout_us">
                            <img className='imgIntro' src="assetPC.png" alt="pagina web" />
                        </a>
                    </figure>
                </div>
            </section>

            <section className='constSect'>
                <h1 className='titleIntro titleIntroCenter'>Desarrollo web</h1>
                <div className='contArtCenter'>

                    <figure className='contSecImg'>
                        <a href="">
                            <img className='imgIntro' src="AssetPersonaEnWeb.gif" alt="pagina web" />
                        </a>
                    </figure>
                    <div>
                        <p>
                            El desarrollo web no fue mi primer accercamiento
                            a la programacion, pero si mi primera experiencia
                            a la hora crear proyectos y participar tanto en cursos,
                            bootcamps e insitutciones de formacion para ampliar mis
                            conocimientos
                        </p>
                    </div>
                </div>
            </section>

            <section className='constSect'>
                <h1 className='titleIntro'>Desarrollo de Video Juegos</h1>
                <div className='contArt'>
                    <div>
                        <p>
                            La programacion de videojuegos fue mi principal motivo
                            para estudiar programacion y aun que no le e podido dedicar
                            el tiempo suficiente anteriormente,actualmente es lo que mas 
                            estudio y a lo que mas tiempo le dedico
                        </p>
                    </div>
                    <figure className='contSecImg'>
                        <a href="">
                            <img className='imgIntro' src="assetPersonaGames.png" alt="pagina web" />
                        </a>
                    </figure>
                </div>
            </section>
        </div>
    )
}

export default Intro