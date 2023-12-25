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
      <section className="h-fit w-full p-10" >
      <div className="content grid grid-cols-2">
        <p className={`p-5 ${styles.introductionText}`}> i am a <span className={styles.coolUnderline}>developer</span> by heart and a <span className={styles.coolUnderline}>::designer</span> by passion</p>
        <blockquote className={styles.blockquote}>
          <p className={styles.blockquoteText}>
            I'm a full-stack engineer with over 6 years of expertise. Proven in driving innovative solutions for business growth. Skilled in maintaining clear documentation, resolving complex issues, and optimizing performance. Recognized for leading the successful development of Streaming PC. Proficient in various programming languages, frameworks, and tools. SET Hackathon 2019 Winner. Ready to deliver exceptional results in future technology.
          </p>
          <button className="mt-3 bg-transparent text-base hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Get In Touch
          </button>
        </blockquote>
      </div>
      </section>
      
      <section className="h-full w-full" id="project">
        <h2 className="flex items-center text-align-center">Projects</h2>
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
