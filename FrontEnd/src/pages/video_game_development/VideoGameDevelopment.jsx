import { useEffect, useRef, useState } from 'react'

// Estilos
import '../video_game_development/VideoGameDevelopmentStyle.css'


const VideoGameDevelopment = () => {

    let [intro, setIntro] = useState(true)
    let [demo, setDemo] = useState(true)

    const handelIntro = () => {
        setIntro(!intro)
    }

    const handelDemo = () => {
        setDemo(!demo)
    }




    return (
        <div className='bodyVGD'>
            {
                intro ?
                    <div className='introVGD'>
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
                    <div className='bodyVGD2'>
                        <div className='rowVGD_2'>
                            <div className='colMenuVGD'>
                                <h1>Menu</h1>
                                <h2>Historia</h2>
                                <h2>Tecnologia</h2>
                                <h2 onClick={handelDemo}>Demos</h2>
                                {
                                    demo ? null :
                                        <div>
                                            <h3>Encuentra al asesino</h3>
                                            <h3>Novela Grafica</h3>
                                        </div>
                                }
                                <h2>Audio</h2>
                                <h2 onClick={handelIntro}>Apagar</h2>
                            </div>
                            <div className='colDisplay'>
                                <h1>Display</h1>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}


export default VideoGameDevelopment
