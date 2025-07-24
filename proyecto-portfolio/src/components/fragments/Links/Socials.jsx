import linkedIn from '../../../assets/imgs/logos/linkedIn.png' 
import github from '../../../assets/imgs/logos/github.png' 
import instagram from '../../../assets/imgs/logos/instagram.png' 
import SocialLogo from './SocialLogo'


const Socials = () => {

    return (
        <div className='flex justify-center items-center gap-14 py-2 h-16'>
            <SocialLogo img={github} altimg={''} social={'Github'} pathName={'https://github.com/Naio200000'} />
            <SocialLogo img={linkedIn} altimg={''} social={'LinkedIn'} pathName={'https://www.linkedin.com/in/nicolas-alsinet-99a067226/'} />
            <SocialLogo img={instagram} altimg={''} social={'Instagram'} pathName={'https://www.instagram.com/naio.200000/'} />
        </div>
    )

}

export default Socials