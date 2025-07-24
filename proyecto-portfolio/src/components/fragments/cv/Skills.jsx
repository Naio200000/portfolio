import H3 from "../../labels/H3"
import P from "../../labels/P"

const Skills = ({skills}) => {


    return (
        <article className="">
            <div className="flex flex-col items-center lg:items-start">
                <div className="mb-6">
                    <H3>{skills.subtitle}</H3>
                    <P className={''}>{skills.text}</P>
                </div>
            </div>
        </article>
    )
}

export default Skills