

import '../mainIntro/MainIntroStyle.css'

const MainIntro = () => {

    return (
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
            <button onClick={cambiar}>Intro</button>
        </div>
    )
}

export default MainIntro