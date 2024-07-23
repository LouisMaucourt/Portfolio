// pages/index.js
"use client";
import NavProject from '../components/layout/NavProject';
import ImageProject from '../components/sections/ProjectImages';

const HomePage = () => {
    const images = [
        {
            src: "/images/projects/Website-LesKollectgers.webp",
            alt: "Evrve",
            title: "Website",
            link: '/projets/website'
        },
        {
            src: "/images/projects/3d-bar.webp",
            alt: "Evrve",
            title: "3D",
            link: 'projets/3d'
        },
        {
            src: "/images/projects/carte-de-visite.webp",
            alt: "Evrve",
            title: "Branding",
            link: 'projets/branding',
        },
        {
            src: "/images/projects/UXUI-musee-histoire.webp",
            alt: "Evrve",
            title: "Ux - Ui",
            link: 'projets/ux-ui'
        },
    ];

    return (
        <section className='px-8 flex flex-col justify-between h-[93vh] lg:h-auto'>
            <NavProject />
            <ImageProject images={images} withLinks={true} />
        </section>
    );
};

export default HomePage;
