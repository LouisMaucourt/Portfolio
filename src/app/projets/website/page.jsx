// pages/index.j
import NavProject from '../../components/layout/NavProject';
import ImageProject from '../../components/sections/ProjectImages';

const HomePage = () => {
  const images = [
    {
      src: "/images/projects/Website-LesKollectgers.webp",
      alt: "Evrve",
      title: "Website",
      attribute: 'Next.Js || Tailwind || Three.js || Gsap'
    },
    {
      src: "/images/projects/portfolio.webp",
      alt: "Profolio-Louis Maucourt  Mockup",
      title: "Portfolio ( ce site hihi )",
      attribute: 'Next.Js || Supabase || Tailwind || Three.js || View-transition '

    },
    {
      src: "/images/projects/dejours.webp",
      alt: "Evrve",
      title: "Déjours",
      websitelink: "https://dejours.com/",
      attribute: 'Wordpress || Php || Gsap'
    },
    {
      src: "/images/projects/bicycompost.webp",
      alt: "mockup bicycompost",
      title: "Bicycompost",
      attribute: 'Next.Js || React-bricks(admin) || Lenis || Gsap'

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
