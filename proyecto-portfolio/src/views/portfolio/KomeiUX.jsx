import Gallery from "../../components/fragments/imageGallery/Gallery"
import H1 from "../../components/labels/H1"
import H2 from "../../components/labels/H2"
import H3 from "../../components/labels/H3"
import P from "../../components/labels/P"
import KomeiUXGallery from "../../components/fragments/imageGallery/KomeiUXGallery.jsx"
import KomeiUXGalleryWireframes from "../../components/fragments/imageGallery/KomeiUXGalleryWireframes.jsx"

const Rechingona = () => {

    return(
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                    <H1 className={'lg:text-4xl text-3xl'}>Komei Juku</H1>
                    <div className="py-4">
                        <H2>Trabajo</H2>
                        <P className={'py-4'}>Parrafo 1</P>
                        <P className={'pb-4'}>Parrafo 2</P>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-b-3xl rounded-b-xl'>
                    <H2 className="mb-2">Diseños</H2>
                    <div className="my-6 bg-gray-100">
                        <H3 className="mb-2">Investigación y desarrollow</H3>
                        <Gallery 
                        galleryID="rechingona-gallery-mockups" 
                        images={KomeiUXGallery}
                        />
                    </div>
                    <div className="my-6 bg-gray-100">
                        <H3 className="mb-2">Wireframes</H3>
                        <Gallery 
                        galleryID="rechingona-gallery-mockups" 
                        images={KomeiUXGalleryWireframes}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rechingona