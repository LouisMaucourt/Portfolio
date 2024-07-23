// pages/index.j
import NavProject from '../../components/layout/NavProject';
import ImageProject from '../../components/sections/ProjectImages';

const HomePage = () => {
  const images = [
    {
      src: "/images/projects/carte-de-visite.webp",
      alt: "Mockup Ux/Ui",
      title: "La Poignée Verte",
      attribute: 'Branding : Workshop pour un restaurnant équitable et transparent'
    },
    {
      src: "/images/projects/logo-experimental.webp",
      alt: "Logo",
      title: "Logo",
      attribute: 'Branding'
    },
    {
      src: "/images/projects/logo-soum.webp",
      alt: "Logo Sooum",
      title: "Soum",
      attribute: 'Logo pour un maître artisan en linogravure'

    },
    {
      src: "/images/projects/livre-cinecreatiis.webp",
      alt: "Cinecreatis",
      title: "Cinecreatis",
      attribute: 'Couverture de présentation pour un synopsis film (étude)'

    },
    {
      src: "/images/projects/lis.webp",
      alt: "Couverture Life is strange",
      title: "Life is Strange",
      attribute: `Couverture en reprennant tles codes du jeu ( trop cool ) Life is Strange`
    },
    {
      src: "/images/projects/logo-canalkayak.webp",
      alt: "Logo Kayak",
      title: "CanalKayak",
    },
    {
      src: "/images/projects/pg-flyer.webp",
      alt: "Flyer Mockup",
      title: "La Poignée verte",
      attribute: `Mise en page d'un flyer, Poignée verte`

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
