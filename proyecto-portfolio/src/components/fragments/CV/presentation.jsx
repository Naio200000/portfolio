import H1 from "../../labels/H1"
import P from "../../labels/P"


const Presentation = ({className = ''}) => {

    return (
        <article className={`lg:w-full md:mt-10 px-6 ${className}`}>
            <div className=" lg:mb-8 mb-32 lg:w-full w-1/2 lg:m-0 ms-auto me-8">
                <H1 className={'lg:text-6xl text-5xl'}>Nicolas Alsinet</H1>
                <P className={'sr-only'}>Curriculum Vitae</P>
            </div>
            <div className="">
                <P className={'mb-8 leading-7'}>{"Con experiencia en difentes ambientes técnicos, ya me encuentro interiorizado con la interaccion con equipos miltidisciplinarios para encontrar soluciones acorde a las necesidades."}</P>
                <P className={'leading-7'}>{"Hoy me encuentro en búsqueda de oportunidades de Desarrollo FrontEnd, asegurando código limpio y manteniendo siempre calidad en implementaciones tanto en código como a nivel diseño."}</P>
            </div>
        </article>
    )
}

export default Presentation
