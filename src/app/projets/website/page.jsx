// pages/index.js
"use client";
import NavProject from '../../components/layout/NavProject';
import ImageProject from '../../components/sections/ProjectImages';

const HomePage = () => {
  const images = [
    {
      src: "/images/projects/3d-bar.webp",
      alt: "Evrve",
      title: "Titre de l'image 1",
      link: 'projets/website'
    },
    {
      src: "/images/projects/branding-carte_de_visite-la_poignée_verte.webp",
      alt: "Evrve",
      title: "Titre de l'image 2",
      link: 'projets/website'
    },

  ];

  return (
    <section className='px-8 flex flex-col justify-between'>
      <NavProject />
      <ImageProject images={images} withLinks={false} />
    </section>
  );
};

export default HomePage;
