import { Menu } from "./menu";
import { ProjectCard } from "./project-card";
import PageHeader from "./page-header";
import { projectList } from "./projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full grid grid-cols-2 p-5">
        <h1 className="flex align-items-center">Sb.</h1>
        <Menu></Menu>
      </div>

      <PageHeader />
      <section className="h-full w-full" >
        <h2 className="flex items-center text-align-center">Works</h2>
        <div className="content h-full">
          <p className="grid grid-cols-4">
            {projectList.map((project, index) => 
              <ProjectCard
                key={`project-${index}`}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            )}
          </p>
        </div>
      </section>
      <section className="h-full w-full">
        <h2 className="flex items-center text-align-center">Contact Me</h2>
        <div className="content h-full">
          <p className="grid">
            email: supakarnb.bun@gmail.com
            
          </p>
        </div>
      </section>
    </main>
  );
}
