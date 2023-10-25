// importaciones


// estilos
import '../home/HomeStyle.css'



const Home = () => {
  return (

    <div className='contMainHome'>
      {/* Titulo */}
      <div className='contTitle'>
        <h1>Bienvenido!</h1>
    </div>
      
      {/* Cuerpo de home */}
      <div className='bodyHome'>

        {/* Seccion sobre mi */}
        <div className='contCardsHome'>
          <div className='contTitleSecction'>
            <h2 className='TitleMainHome'>Leonardo Daniel Vivas</h2>
            <h4 className='subTitleMainHome'>Develop</h4>
          </div>
          <div>
            <p className='textMainHome'>
              Soy estudiante en desarrollador web y Videojuegos,
              este ultimo fue el que desperto mi curiosidad por la programacion
              asi que asi comence a estudiar C++, aun que me parecio un lenguaje
              algo complicado y pase a Python donde hice mis primeros juegos
              con arrays y variables. Luego el desarrollador web me abrio sus puertas...
              <br/><br/>
              Si quieres saber mas de mi y continuar con esta breve introduccion, 
              te invito a que visites la seccion Sobre mi.
            </p>
          </div>
        </div>

        {/* Seccion proyectos */}
        <div className='contProyectIntro'>

          {/* Seccion proyectos web */}
          <div className='contCardsHome'>
            <div>
              <h2 className='subTitleMainHome'>Proyectos web</h2>
              <div>
                <p className='textMainHome'>
                  Como estudiante en desarrollador web tube altas y bajas,
                  aprendi a usar HTML, CSS y JavaScript por mi cuenta y luego
                  en Argentina Programa 2.0 y el ISPC comence a introducir los 
                  frameworks de Bootstrap y Angular, al tener poca experiencia e informacion
                  sobre este ultimo me frustre y empece a pensar que tal vez no era para mi...
                  Pero de la mano de Argentina programa 4.0 y MinHub conoci a React y MERN 
                  mi actual stack.
                  <br/><br/>
                  Para conocer mas sobre mi formacion en el sector web, ve a la seccion sobre mi o 
                  Puedes ver algunos de mis proyectos en la seccion Proyectos Web
                </p>
              </div>
            </div>
          </div>
          
          {/* Seccion proyectos Juegos */}
          <div className='contCardsHome'>
            <div>
              <h2 className='subTitleMainHome'>Proyectos Juegos</h2>
              <div>
                <p className='textMainHome'>
                  Mi inicio en lo videojuegos se remonta a desde que tengo memoria
                  siempre los jugaba o escribia historias pero nunca me anime a hacer
                  uno por desconocimiento, siempre pense que seria muy dificil o incluso
                  imposible asi que se quedo como en un hobby pero cuando me anime a intentaro
                  utilizando el motor GODOT fue abrir las puertas al mundo de la programacion...
                  <br/><br/>
                  Conoce mas de mi historia como desarrollador de videojuegos indi
                  en la seccion sobre mi o visita la seccion proyectos Juegos
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Seccion herramientas */}
        <div className='contCardsHome'>
          <div className='contTitleSecction'>
            <h2 className='subTitleMainHome'>Herramientas</h2>
          </div>

          <div className='bodyHerramientas'>
            <div className='contCardsHome'>
              <section>
                <h2 className='subTitleMainHome'>Herramientas web</h2>
                <figure>
                  
                </figure>
              </section>
            </div>

            <div className='contCardsHome'>
              <section>
                <h2 className='subTitleMainHome'>Herramientas Juegos</h2>
                <figure>
                  <img src="" alt="" />
                </figure>
              </section>
            </div>
          </div>
        </div>

        


      </div>
    </div>
  )
}

export default Home
