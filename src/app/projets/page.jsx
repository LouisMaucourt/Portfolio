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
            link: 'projets/website'
        },
        {
            src: "/images/projects/3d-bar.webp",
            alt: "Evrve",
            title: "3D",
            link: 'projets/website'
        },
        {
            src: "/images/projects/UXUI-musee-histoire.webp",
            alt: "Evrve",
            title: "UX / UI",
            link: 'projets/website'
        },
        {
            src: "/images/projects/3d-bar.webp",
            alt: "Evrve",
            title: "Branding",
            link: 'projets/website'
        },
    ];

    return (
        <section className='px-8 flex flex-col justify-between'>
            <NavProject />
            <ImageProject images={images} withLinks={true} />
        </section>
    );
};

export default HomePage;
