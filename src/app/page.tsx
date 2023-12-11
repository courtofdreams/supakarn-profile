import { Menu } from "./menu";
import { ProjectCard } from "./project-card";
import PageHeader from "./page-header";
import { projectList } from "./projects";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full grid grid-cols-2 p-5">
        <h1 className="flex align-items-center">Sb.</h1>
        <Menu></Menu>
      </div>

      <PageHeader />
      <section className="h-full w-full" id="project">
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
      <section className="h-full w-full" id="contact">
        <h2 className="flex items-center text-align-center"></h2>
        <div className="content h-full">
          <div className="flex align-items-center">
            <input type="email" className={styles.input} id="Email" name="Email" placeholder="supakarnb.bun@gmail.com" autoComplete="off" />
            <input className={styles.submit} value="Subscribe" type="submit" />
          </div>
        </div>
      </section>
    </main>
  );
}
