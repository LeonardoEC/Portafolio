import RedDeContacto from '../../components/contactNetworks/ContactNetworks'

import '../aboutUs/AboutUsStyle.css'

const AboutUs = () => {


  return (
    <div className='bodyAboutUs'>
      <div className='containerAboutUs'>
        <div>
          <figure className='contBannerAboutUs'>
            <img className='bannerAbaoutUs' src="../../../public/banner.png" alt="" />
          </figure>
        </div>

        <div className='personalInfo'>
          <figure className='contPhoto'>
            <img className='imgPhoto' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lion-logo-design-template-b0125bc9d5c5c81120dbac471a2a9356_screen.jpg?ts=1675349645" alt="" />
          </figure>
          <h2 className='nameAbaoutUS'>Leonardo Vivas</h2>
        </div>


        <div className='headerAboutUS'>

          <div className='personalAboutUs'>

            <h6 className='subtitleAbautUS'>Programador</h6>
            <p className='descripAbautUS'>
              Diseña tu mundo, codificalo como tu quieras
              guarda tus mejores momentos en constantes y
              tus errores en variables para siempre poder mejorar,
              que cada aprendisaje sea un ciclo for anidado en un
              bucle withe para agrerar mas conocimientos a tu lista de talentos
              hasta el final de tu ciclo... Dejalo todo lo anterior
              dentro de una funcion para quienes sepan de tu
              codigo pueden reutilizarlo en el sullo.. La vida es un
              legado
            </p>
          </div>

          <div className='socialAboutUs'>
            <RedDeContacto />
          </div>

        </div>
        <div className='cardAboutUs1'>
          <div className='cardContTitle'>
            <h3>Historia</h3>
          </div>
          <div className='cardContHis'>
            <p>
              Mi historia el simple, comence a por mi amor por los
              Videojuegos, siempre quise hacerlos pero nunca supe por donde
              empezar o como hacer pero cuando me anime mis primeros pasos en la
              programacion los realice en C++ por un video de youtube, me resulto algo dificil
              asi que migre a python con el cual me senti muy comodo y lo que
              imaginaba lo podia hacer realidad, y ahi iniciaron mis primeros juegos
              que fueron por el CMD al tiempo inicie el camino en el desarrollo web de la
              mano de Argentina programa, en donde me lleve mi primera frustracion,
              digamos que entrar en Angular siendo muy novato el resto fue demaciado...
              Pero no me rendi y empece a estudiar como autodidacta, hasta que me anote en el ISPC
              el cual pense que seria una experiencia la cual potenciaria mis habilidades, pero fue
              todo lo contrario, no me explayare mucho pero no fue una experiencia para nada agradable...
              Pero bueno luego de la mano de Argentina programa Nuevamente fui invitado
              a formar parte de unos Bootcamps de MinHub aqui sin duda fue la mejor experiencia de mi vida
              no solo aprendi a programar sino que tambien aprendi a trabajar en equipo con personas que
              ni siquiera eran de mi grupo sin duda MindHub fue con potencio mi carrera y me dio la formacion
              que tanto anelava. Actualmente estoy terminando el ISPC pero estudiando de forma Autodidacta,
              ya no quiero hacer mas cursos, ahora quiero tener proyectos e ir aprendido con ellos
              mayormente me estoy dedidcando al desarrollo de videojuegos y es el area en la cual me enfocare
              pero el desarrollo web lo seguire manteniendo en practica
            </p>
          </div>
        </div>
        <div className='cardAboutUs2'>
          <div className='cardContTitle'>
            <h3>Logros y Medallas</h3>
          </div>
          <div className='cardContLM'>
            <img className='logoIMG' src="../../../public/bootcamp-desarrollador-web-front-end.1.png" alt="" />
            <img className='logoIMG' src="../../../public/desarrollador-full-stack-mern.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
