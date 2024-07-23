// pages/index.j
import NavProject from '../../components/layout/NavProject';
import ImageProject from '../../components/sections/ProjectImages';

const HomePage = () => {
  const images = [
    {
      src: "/images/projects/3d-bar.webp",
      alt: "Bar 3D",
      title: "Mon ptit Bar",
      attribute: 'Blender'
    },
    {
      src: "/images/projects/meuble.webp",
      alt: "Meuble moumoute",
      title: "Meuble moumoute",
      attribute: 'Blender - Collaboration mode, collection autour du cube'

    },
    {
      src: "/images/projects/profil-v4.webp",
      alt: "Evrve",
      title: "3D",
      attribute: `Blender - Workshop pour trouver un concept sur la clarté d'un restaurant`

    },
    {
      src: "/images/projects/fire.webp",
      alt: "Restaurant transparent",
      title: "Restaurant transparent",
      attribute: `Blender - Création de visuels pour un Storytelling`

    },
  ];

  return (
    <section className='px-8 flex flex-col justify-between h-[93vh] lg:h-auto'>
      <NavProject />
      <ImageProject images={images} withLinks={false} />
    </section>
  );
};

export default HomePage;
