import NavProject from '../../components/layout/NavProject';
import ImageProject from '../../components/sections/ProjectImages';

const HomePage = () => {
  const images = [
    {
      src: "/images/projects/UXUI-musee-histoire.webp",
      alt: "Mockup Ux/Ui",
      title: "Branding - UX/UI",
      attribute: 'But était de fiare un musée interractif depuis son smartphone'
    },
    {
      src: "/images/projects/roz-saveurs.webp",
      alt: "Mockup Roz Saveurs : Épicerie fine",
      title: "Website",
      attribute: `Création d'une identité graphique moderne et différenciante`

    },
    {
      src: "/images/projects/panorama.webp",
      alt: "Evrve",
      title: "Branding - UX/UI",
    },
    {
      src: "/images/projects/picto.webp",
      alt: "Evrve",
      title: "UX",
      attribute: `Création d'un panel d'icône homogène`
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
