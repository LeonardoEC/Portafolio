import { Link as LinkRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Style
import '../carousel/CarouselStyle.css'


const Carousel = () => {

    const [indextect, setIndextect] = useState(0)

    const tect = [
        {
            id: 1, title: "HTML", bg_img: "red", institucion: [
                { id_insti_Html: 1, nameInst: "ISPC", img_cer: ["url_insti", "url_insti", "url_insti"] },
                { id_insti_Html: 2, nameInst: "FreeCode", img_cer: ["url_insti", "url_insti"] },
                { id_insti_Html: 3, nameInst: "SoloLearn", img_cer: ["url_insti", "url_insti"] }
            ]
        },
        {
            id: 2, title: "CSS", bg_img: "blue", institucion: [
                { id_insti_Css: 1, nameInst: "ISPC", img_cer: ["url_insti", "url_insti"] },
                { id_insti_Css: 2, nameInst: "SoloLearn", img_cer: ["url_insti", "url_insti"] }
            ]
        },
        {
            id: 3, title: "CSS", bg_img: "orange", institucion: [
                { id_insti_Css: 1, nameInst: "ISPC", img_cer: ["url_insti", "url_insti"] },
                { id_insti_Css: 2, nameInst: "SoloLearn", img_cer: ["url_insti", "url_insti"] }
            ]
        }
    ]

    const show = {
        show_letter: 1,
        move: 1,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIndextect((prev) =>
                prev === tect.length - show.show_letter ? 0 : prev + 1
            );
        }, 4000)
        return () => clearInterval(interval);
    }, [tect.length, show.show_letter])

    const next = () => {
        setIndextect((prev) =>
            prev === tect.length - show.show_letter ? 0 : prev + 1
        )
        console.log("funciona")
    }

    const previous = () => {
        setIndextect((prev) =>
            prev === 0 ? tect.length - show.show_letter : prev - 1
        )
    }


    return (
        <div className='body_Carousel'>
            <button onClick={previous} className='btn_previous'>{"<"}</button>
            {
                tect.slice(indextect, indextect + show.show_letter).map((techts) => (
                    <div key={techts.id}
                        style={{ background: techts.bg_img }}
                        className='cont_Carrousel'>
                        <h3 className='title_tec'>{techts.title}</h3>
                        {
                            techts.institucion.map((inst) => (
                                <div className='card_tect'>
                                    <h1>{inst.nameInst}</h1>
                                    <figure className='cont_img_tec'>
                                        {
                                            inst.img_cer.map((x) => (
                                                <p>{x}</p>
                                            ))
                                        }
                                    </figure>
                                </div>
                            ))
                        }
                        <LinkRouter to={`/detailTec/${techts.id}`} className='btnTec' >More info</LinkRouter>
                    </div>
                ))
            }
            <button onClick={next} className='btn_next'>{">"}</button>
        </div>
    )
}

export default Carousel