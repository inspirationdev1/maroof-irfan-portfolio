import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Projects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="About Projects" sub="⭐️ Projects Details" />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {projects.map((project, index) => (
            <GlowCard card={project} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={project.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{project.name}</p>
                  <p className="text-white-50">{project.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
