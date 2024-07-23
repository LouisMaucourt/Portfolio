import BentoPresentation from "../app/components/sections/BentoPresentation";
import BentoPresentationMobile from "../app/components/sections/BentoPresentationMobile";
import Technos from "../app/components/sections/Technos";
import ProjectsTitle from "./components/sections/ProjectTitle";
import Words from "./components/sections/Words";
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <>
      <div className="block lg:hidden">
        <BentoPresentation />
      </div>
      <div className="hidden lg:block">
        <BentoPresentationMobile />
      </div>
      <Technos />
      <section className="overflow-clip h-[60vh] block w-[98vw]">
        <h2 className="text-animation overflow-hidden mt-32">Fusion de la créativité et de la technologie</h2>
      </section>
      <ProjectsTitle />
      <Words />
      <Contact />
    </>
  );
}
