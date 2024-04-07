import ContactNetworks from '../../contactNetworks/contactNetworks'

import './WelcomeStyle.css'

const Welcome = () => {

    return (
        <div className="contWelcome">
            <div className="titleWelcome">
                <h1>Bienvenido</h1>
            </div>
            <div className="txtWelcome">
                <p>
                    Te encuentras en la seccion de Home,
                    aqui comentare brevenmente las secciones
                    de mi portafolio para ofrecer un preambulo
                    sobre que te encontraras en cada seccion,
                    ademas de brindarte links directos a ellos
                </p>
            </div>
            <div>
                <ContactNetworks />
            </div>
        </div>
    )

}

export default Welcome