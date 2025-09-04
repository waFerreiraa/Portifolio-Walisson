import "./Projects.css";

const projects = [
  { title: "PaneluxIA", description: "Agente IA de receitas", link: "https://paneluxia-1.onrender.com/" },
  { title: "Projeto 2", description: "Descrição do projeto 2", link: "https://github.com/seuuser/projeto2" },
  { title: "Projeto 3", description: "Descrição do projeto 3", link: "https://github.com/seuuser/projeto3" },
];

export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up">
      <h3>Meus Projetos</h3>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card" data-aos="fade-up" data-aos-delay={i * 150}>
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}
