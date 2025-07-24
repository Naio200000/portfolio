import P from '../../labels/P'
import Links from '../links/Links'
import Socials from '../links/Socials'

const Footer = () => {

    return (
        <section className='my-2 flex flex-col justify-end'>
            <article>
                <Socials />
            </article>
            <article className='lg:w-1/2 md:w-3/4 mx-auto'>
                <Links className={'flex justify-evenly'} />
            </article>
            <article className='mt-2'>
                <P className={'text-center font-bold'}>Powered by Naio</P>
            </article>
        </section>
    )
}

export default Footer