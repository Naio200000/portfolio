import Img from '../../labels/Img'
import H3 from '../../labels/H3';
import P from '../../labels/P';
import { Link } from 'react-router-dom';

function Cards ({title, subtitle, image, link, linkExternal}) {
    
    return (
        <div className='pt-2 basis-[30%] grow px-4 pb-8 bg-white drop-shadow-lg '>
            <Link to={`/portfolio/${link}`}>
                <div className='w-60 h-[300px] overflow-hidden mx-auto mb-2'>
                    <Img src={image} className={'mx-auto'}/>
                </div>
                <div className='text-center lg:text-start'>
                    <H3>{title}</H3>
                    <P>{subtitle}</P>
                </div>
            </Link>
        </div>
    )

}

export default Cards