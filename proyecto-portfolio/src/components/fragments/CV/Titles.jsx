import H3 from "../../labels/H3";
import P from "../../labels/P";


const Titles = ({title, subtitle, dates}) => {

    return (
        <div className="mb-8 flex justify-between items-end">
            <div>
                <H3 className={'mb-2 lg:text-2xl'}>{title}</H3>
                <P className={''}>{subtitle}</P>
            </div>
            <div className="">
                <P className={'lg:text-2xl text-lg text-right uppercase font-MonomaniacOne'}>{dates}</P>
            </div>
        </div>
    )
}

export default Titles;