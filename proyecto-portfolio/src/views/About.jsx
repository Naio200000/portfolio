import H1 from '../components/labels/H1';
import P from '../components/labels/P'
import Strong from '../components/labels/Strong'
import Em from '../components/labels/Em'
import bio2 from '../assets/imgs/bio/bio-2.jpg'
import bio3 from '../assets/imgs/bio/bio-3.jpg'


function About() {

    return (
        
        <div className='font-Raleway font-medium lg:text-lg'>
            <div className='max-w-[1280px] lg:mx-auto py-4 bg-backgroundCV'>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-t-3xl rounded-t-xl'>
                    <div className='lg:w-2/3 pe-4 relative'>
                        <H1 className={'lg:text-4xl text-3xl'}>Biografía</H1>
                        <P className={'py-4'}>Nací y crecí en <Em><a href="https://es.wikipedia.org/wiki/Necochea" target="_blank" className='hover:underline text-lg'>Necochea, Provincia de Buenos Aires.</a></Em> Es una ciudad costera de mediano tamaño, lo que permitía tener algunas comodidades de ciudad pero sin perder la seguridad y tranquilidad de un pueblo. Agradezco haber crecido en ese ambiente, tener la playa en <Strong>verano y el parque en invierno.</Strong></P>
                        <div  className='max-w-[440px] lg:w-72 lg:pt-6 pt-3 lg:px-6 lg:pb-12 pb-6 mx-auto lg:mx-2 lg:absolute  lg:top-28 lg:-right-72  -skew-x-2 bg-white drop-shadow-lg '>
                            <div className='skew-x-2'> 
                                <img className={'lg:w-11/12 mx-auto'} src={bio2}/>
                            </div>
                        </div>
                        <P className={'py-4'}>Viví ahí hasta los 18 años que me mudé a <Em><a href="https://es.wikipedia.org/wiki/Buenos_Aires" target="_blank" className='hover:underline text-lg'>Buenos Aires</a></Em>, para estudiar. En esos tiempos estaba muy integrado en la música y los equipos e instrumentos, así que decidí estudiar ingeniería en sonido. Arranqué con la carrera de <Strong>Producción Musical</Strong> en el <Em><a href="https://www.emba.com.ar/" target="_blank" className='hover:underline text-lg'>EMBA</a></Em>. Si bien no soy músico, nunca aprendí a tocar ningún instrumento, me gusta mucho todo lo que sea relacionado a los equipos y la grabación y edición. </P>
                        <P className={'py-4'}>Era por aquel entonces que me diagnosticaron con una enfermedad crónica <Em><a href="https://es.wikipedia.org/wiki/Enfermedad_renal_cr%C3%B3nica" target="_blank" className='hover:underline text-lg'>(Insuficiencia Renal Crónica)</a></Em> en relación a un problema que tuve de bebé. Esto puso una trabas en mi vida, especialmente a medida que la enfermedad fue progresando y tuve que <Strong>iniciar tratamiento de diálisis</Strong>. Por suerte solo fueron unos pocos años hasta que pudimos realizar el trasplante que mi mamá me donó, del cual llevo 16 años ya sin problemas</P>
                    </div>
                    <P className={'py-4'}>En 2013 empecé a trabajar en el <Em><a href="https://www.scba.gov.ar/" target="_blank" className='hover:underline text-lg'>Poder Judicial de la Provincia de Buenos Aires</a></Em>. Empecé sin saber nada, pero con el tiempo fui aprendiendo de qué se trataba y <Strong>hoy estoy a cargo de varios de los sistemas y operaciones que realizamos</Strong>.</P>
                </div>
                <div className='lg:w-11/12 mx-auto p-4 bg-white lg:rounded-b-3xl rounded-b-xl'>
                    <P className={'py-4'}>Tengo diversos hobbies, en especial <Strong>me gusta viajar, conocer otras culturas</Strong> y disfrutar la vida cotidiana en otros lugares. Practico artes marciales, <Em><a href="https://www.komeijuku.com.ar/" target="_blank" className='hover:underline text-lg'>Iaido</a></Em>, y eso me ha permitido <Strong>viajar a Japón</Strong> en varias oportunidades y poder estar durante períodos prolongados y vivir la cultura de primera mano. Me encanta cocinar, en especial cocina japonesa, y agasajar a mis amigos con especialidades no muy comunes en Argentina.</P>
                    <div className='py-4 px-2 bg-white drop-shadow-lg'>
                        <img className={'mx-auto'} src={bio3} />
                    </div>
                    <P className={'py-4'}><Strong>Otro de mis hobbies son los juegos de mesa</Strong>. Es más el juntarnos y disfrutar todos juntos que otra cosa, y para eso los juegos son la mejor excusa. Mi próximo proyecto es aprender a jugar <Em><a href="https://rtalsoriangames.com/cyberpunk/" target="_blank" className='hover:underline text-lg'>Cyberpunk Red</a></Em>, juego de rol, del cual voy a escribir sobre mi progreso <Em><a href="/blog" className='hover:underline text-lg'>aquí</a></Em>.</P>
                </div>
            </div>

        </div>
    );
}

export default About;