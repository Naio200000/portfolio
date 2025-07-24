import Gallery from "../../components/fragments/imageGallery/Gallery"
import H1 from "../../components/labels/H1"
import H2 from "../../components/labels/H2"
import H3 from "../../components/labels/H3"
import P from "../../components/labels/P"
import TokioGallery from '../../components/fragments/imageGallery/TokioGallery'

const Rechingona = () => {

    return(
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                    <H1 className={'lg:text-4xl text-3xl'}>Tokio</H1>
                    <div className="py-4">
                        <H2>Trabajo</H2>
                        <P className={'py-4'}>Proyecto de primer cuatrimestre en el cual había que imaginar la página web de turismo de una ciudad. Seleccionando la ciudad de Tokio se realizaron mockups de la Home, y páginas sobre la historia, gastronomía, deportes y algunas opciones de entretenimiento.</P>
                        <P className={'pb-4'}>La idea del proyecto es aprender sobre la composición de páginas web y el uso de Adobe Photoshop. La cual se usó para todo el proyecto</P>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-b-3xl rounded-b-xl'>
                    <H2 className="mb-2">Diseños</H2>
                    <div className="my-6 bg-gray-100">
                        <H3 className="mb-2">Mockups de Páginas Wrb y Banners</H3>
                        <Gallery 
                        galleryID="rechingona-gallery-mockups" 
                        images={TokioGallery}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rechingona