import H1 from "../../components/labels/H1.jsx"
import H2 from "../../components/labels/H2.jsx"
import P from "../../components/labels/P.jsx"

const Rechingona = () => {

    return(
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                    <H1 className={'lg:text-4xl text-3xl'}>Gaming Room</H1>
                    <div className="py-4">
                        <H2>Trabajo</H2>
                        <P className={'py-4'}>Proyecto para la facultad, el cual consiste en generar una red social o blog, de una tematica a elección.</P>
                        <P className={'pb-4'}>La idea de este proyecto es aprender a hacer una webapp con Vue.js y usar Firestore como backend para Usuarios, Posts y Storage</P>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-b-3xl rounded-b-xl'>
                    <iframe className='w-full h-[700px] lg:h-[1080px] rounded-lg' src="https://dv-cwm-alsinet.web.app/#/home" title="Komei Juku Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Rechingona