import { Link } from 'react-router-dom';
import H1 from '../components/labels/H1';
import P from '../components/labels/P';
import Strong from '../components/labels/Strong';


function Contacts() {

    return (
        
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className=' max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-3xl rounded-xl'>
                    <div className='lg:w-2/3 pe-4 relative'>
                        <H1 className={'lg:text-4xl text-3xl'}>Error 404</H1>
                        <P className={'py-4'}>No se encontró la página que estabas buscando</P>
                        <P className={'py-4'}>Haz click <Link to={'/'}><Strong>aquí</Strong></Link>  para volver al Curriculum</P>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;