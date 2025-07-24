import Img from '../../labels/Img'
import Span from '../../labels/Span'

const SocialLogo = ({img, altimg, pathName, social}) => {

    return (
        <div>
            <a href={pathName} target="_blank">
                <Img className={'w-12 hover:p-0 p-1 hover:bg-gray-800 rounded-lg'} src={img} alt={altimg}/>
                <Span className="sr-only">{social}</Span>
            </a>
        </div>
    )
}

export default SocialLogo