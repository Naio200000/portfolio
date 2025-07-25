import Experiencias from '../components/fragments/cv/Experiencias';
import Presentation from "../components/fragments/cv/Presentation";
import Titles from '../components/fragments/cv/Titles';
import H2 from "../components/labels/H2";
import P from '../components/labels/P';
import Img from '../components/labels/Img';
import profileImage from '../assets/imgs/cv/perfil.jpg' 
import Skills from '../components/fragments/cv/Skills';
import { useEffect, useState } from 'react';
import SkeletonSkill from '../components/fragments/skeletons/SkeletonSkill';
import SkeletonCert from '../components/fragments/skeletons/SkeletonCert';
import SkeletonExp from '../components/fragments/skeletons/SkeletonExp';

function CV() {

    const BASE_URL = import.meta.env.NODE_ENV === "development" ? 'http://localhost:5001' : '/cv';
    
    const [ loadingSkills, setLoadingSkills ] = useState(true);
    const [ loadingExp, setLoadingExp ] = useState(true);
    const [ loadingCert, setLoadingCert ] = useState(true);

    const [ skills, setSkills ] = useState([]);

    useEffect(() => {

        const fetchSkills = async () => {
            try {
                const res = await fetch(`${BASE_URL}/skills`)
                const data = await res.json();
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally {
                setLoadingSkills(false);
            }
        }
        fetchSkills();
    },[])

    const [ experiences, setExperiences ] = useState([]);

    useEffect(() => {

        const fetchExperiences = async () => {
            try {
                const res = await fetch(`${BASE_URL}/experiences`)
                const data = await res.json();
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            } finally {
                setLoadingExp(false);
            }
        }
        fetchExperiences();
    },[])

    const [ certifications, setCertifications ] = useState([]);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const res = await fetch(`${BASE_URL}/certifications`)
                const data = await res.json();
                setCertifications(data);
            } catch (error) {
                console.error('Error fetching certifications:', error);
            } finally {
                setLoadingCert(false);
            }
        }
        fetchCertifications();
    },[])

    return (
        
        <div className='lg:max-w-frame relative mx-auto lg:pb-4 font-Raleway font-medium lg:text-xl bg-backgroundCV'>
            <div className='max-w-36 w-1/3 max-h-[190px] lg:w-72 lg:max-w-none lg:max-h-none absolute z-10 md:left-48 lg:left-24 left-8 lg:top-32 top-8'>
                <div className='lg:pt-6 pt-3 lg:px-6 px-3 lg:pb-12 pb-6 -skew-x-2 bg-white drop-shadow-lg'>
                    <div className='skew-x-2'>
                        <Img className={'lg:w-11/12 mx-auto'} src={profileImage} alt='Foto de Perfil'/>
                    </div>
                </div>
            </div>
            <div className='md:w-3/4 md:mx-auto lg:w-full lg:flex lg:justify-center pt-3 lg:pt-0'>
                <header className="lg:w-7/12 lg:-ml-9 lg:m-3 mx-2 pt-8 lg:rounded-6xl rounded-3xl bg-white shadow-shadowExpCV">
                    <Presentation />
                    <article className="my-12 px-6">
                        <div className="">
                            <H2 className={'mb-8 lg:text-3xl text-2xl'}>Certificaciones</H2>
                            {loadingCert && <SkeletonCert />}
                            {certifications.map((section) => (
                                <Titles 
                                    key={section._id} 
                                    title={section.title}
                                    subtitle={section.subtitle}
                                    dates={section.dates}
                                />
                            ))}
                        </div>
                        <div className="">
                            <H2 className={'mb-8 lg:text-3xl text-2xl'}>Experiencias</H2>
                            {loadingExp && <SkeletonExp />}
                            {experiences.map((exp, index) => {    
                                let border = ((experiences.length - 1) == index) ? 'border-none pb-0' : '';
                                return (
                                    <Experiencias 
                                        key={exp._id}
                                        title={exp.title}
                                        subtitle={exp.subtitle}
                                        dates={exp.dates}
                                        responsability={exp.responsability}
                                        border={border}
                                    />
                                )})}
                        </div>
                    </article>
                </header>
                <section className='lg:w-5/12 lg:self-center lg:order-first'>
                    <div className='lg:w-11/12  lg:flex lg:flex-col lg:justify-end'>
                        <div className='w-full lg:py-20 py-6 lg:px-12 px-4 bg-black text-white md:rounded-ss-3xl md:rounded-se-3xl lg:rounded-se-none lg:rounded-ss-4xl lg:rounded-bl-4xl lg:shadow-shadowSkillCV'>
                            {loadingSkills && <SkeletonSkill />}
                            {skills.map((skill) => {
                                if (skill.title == 'Lenguajes') {
                                    return (
                                        <>
                                            <H2 className={'mb-6 lg:text-3xl text-2xl text-center lg:text-start'}>{'Lenguajes'}</H2>
                                            <Skills 
                                                key={skill._id}
                                                skills={skill}
                                            />
                                            <H2 className={'mb-6 lg:text-3xl text-2xl text-center lg:text-start'}>{'Tecnología'}</H2>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <Skills
                                                key={skill._id}
                                                skills={skill}
                                            />
                                        </>
                                    )
                                }
                            })}
                            <article className=''>
                                <H2 className={'my-6 lg:text-3xl lg:text-left text-2xl text-center '}>Idiomas</H2>
                                <div className='flex justify-evenly'>
                                    <P className={'lg:w-1/2 mb-3 font-bold'}>Inglés</P>
                                    <P className={'lg:w-1/2'}>Avanzado</P>
                                </div>
                                <div className='flex justify-evenly'>
                                    <P className={'lg:w-1/2 font-bold'} >Japonés</P>
                                    <P className={'lg:w-1/2'} >Avanzado</P>
                                </div>
                            </article>
                            <article>
                                <H2  className='my-6 lg:text-3xl lg:text-left text-2xl text-center '>Contactos</H2>
                                <div className='lg:block flex justify-evenly'>
                                    <div className='my-3'>
                                        <P className={'font-bold'}>Mail</P>
                                        <P className={'my-1'}>nicolas.alsinet@gmail.com</P>
                                    </div>
                                    <div className='my-3'>
                                        <P className={'font-bold'}>T.E.</P>
                                        <P className={'my-1'}>11-36753721</P>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CV;