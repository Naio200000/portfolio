import Gallery from "../../components/fragments/imageGallery/Gallery"
import Images from '../../components/fragments/imageGallery/RechingonaGalerry'
import ImagesMockups from '../../components/fragments/imageGallery/RechingonaGalleryMockups'
import H1 from "../../components/labels/H1"
import H2 from "../../components/labels/H2"
import H3 from "../../components/labels/H3"
import P from "../../components/labels/P"

const Rechingona = () => {

    return(
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                    <H1 className={'lg:text-4xl text-3xl'}>ReChingona</H1>
                    <div className="py-4">
                        <H2>Trabajo</H2>
                        <P className={'py-4'}>Proyecto para la facultad, en el cual había que generar una identidad de marca con su manual de usuario y el diseño de la aplicación y mockups de campañas de marketing La aplicación debía ser un e-comerse de cualquier índole. </P>
                        <P className={'pb-4'}>La idea de este proyecto principalmente es aprender el uso de la herramienta Adobe Illustrator. Lo cual se usó para todo el proyecto. Desde el diseño de la identidad de marca hasta el diseño de las pantallas.</P>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white '>
                    <a href="/public/pdfs/identidad-Marca rechingona.pdf" target="_blank" rel="noopener noreferrer"><H2 className="mb-2">ver Manual de Marca</H2></a>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-b-3xl rounded-b-xl'>
                    <H2 className="mb-2">Diseños</H2>
                    <div className="my-6 bg-gray-100">
                        <H3 className="mb-2">Mockups de Marketing</H3>
                        <Gallery 
                        galleryID="rechingona-gallery-mockups" 
                        images={ImagesMockups}
                        />
                    </div>
                    <div className="my-6 bg-gray-100">
                        <H3 className="mb-2">Mockups de Marketing</H3>
                        <Gallery 
                        galleryID="rechingona-gallery" 
                        images={Images}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rechingona