import H4 from "../../labels/H4";
import P from "../../labels/P";
import Titles from "./titles";


const Experiencias = ({title, subtitle, dates, responsability, border}) => {

    return (
        <div className={`mb-6 lg:mb-3 pb-3 border-b-2 border-black ${border}`}>
            <Titles 
                title={title}
                subtitle={subtitle}
                dates={dates}
            />
            <div className="lg:px-4">
                <H4 className={'mb-2 lg:text-xl'}>Responsabilidades</H4>
                {responsability.map((respo, index) => (
                    <P key={index} className={'mb-2 leading-5 lg:px-5 px-3 lg:text-lg'} >{respo}</P>
                ))}
            </div>
        </div>
    )
}

export default Experiencias;