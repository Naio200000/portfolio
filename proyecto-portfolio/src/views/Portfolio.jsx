import H1 from '../components/labels/H1';
import H2 from '../components/labels/H2';
import Card from '../components/fragments/portoflio/Cards'
import rechingonaImg from '../assets/imgs/rechingona/01-re-chingona_splash.jpg'
import tokioImg from '../assets/imgs/tokio/banner-lateral.jpg'
import komeijukuImg from '../assets/imgs/komeiUX/KomeiJukuMon.png'
import gamingRoom from '../assets/imgs/logos/gamingRoom.png'

const data = {
    design: [
        {
            id:1,
            title: "ReChingona",
            Subtitulo: "Manual de Marca y Diseño de E-Comerce",
            imagen: rechingonaImg,
            link:"rechingona"
        },
        {
            id:2,
            title: "Tokio",
            Subtitulo: "HomePage de la Ciudad de Tokio",
            imagen: tokioImg,
            link:"tokio"
        },
        {
            id:3,
            title: "Komei Juku",
            Subtitulo: "Diseño UX",
            imagen: komeijukuImg,
            link:"komeijuku"
        },
    ],
    development: [
        {
            id:1,
            title: "Komei Juku",
            Subtitulo: "E-Comerce en PHP",
            imagen: komeijukuImg,
            link: "tiendakomei"
        },
        {
            id:2,
            title: "Gaming Room",
            Subtitulo: "Blog/Red social en Vue.js y Firebase",
            imagen: gamingRoom,
            link: "gamingroom"
        },
    ]
}
function Portfolio() {

    return (
        
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto'>
                    <div className='py-4 px-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                        <H1 className={'lg:text-4xl text-3xl'}>Portfolio</H1>
                        <div className='py-4'>
                            <H2>Desarrollo</H2>
                            <div className='flex justify-center flex-wrap gap-3 my-2'>
                                {data.development.map((card) => (
                                    <Card 
                                        key={card.id}
                                        title={card.title}
                                        subtitle={card.Subtitulo}
                                        image={card.imagen}
                                        link={card.link}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='py-4 px-4 bg-white lg:rounded-b-3xl rounded-b-xl '>
                        <H2>Diseño</H2>
                        <div className='flex justify-center flex-wrap gap-3 my-2'>
                            {data.design.map((card) => (
                                <Card 
                                    key={card.id}
                                    title={card.title}
                                    subtitle={card.Subtitulo}
                                    image={card.imagen}
                                    link={card.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;