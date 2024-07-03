import BentoPresentation from "../app/components/sections/BentoPresentation"
import Technos from "../app/components/sections/Technos"
import ProjectsTitle from "./components/sections/ProjectTitle"
import Words from "./components/sections/Words"

export default function Home() {
  return (
    <main>
      <BentoPresentation />
      <Technos />
      <section className="w-40vh overflow-clip h-[30vh]">
        <h2 class="text-animation overflow-hidden">Combinaison du développement web et du webdesign</h2>
      </section>
      <ProjectsTitle />
      <Words />
    </main>
  );
} 