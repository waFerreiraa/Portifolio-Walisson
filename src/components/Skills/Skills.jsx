import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFlutter } from "react-icons/fa6";
import "./Skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaFlutter />, name: "Flutter" },
];

export default function Skills() {
  return (
    <section id="skills" data-aos="fade-up">
      <h3>Minhas Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card" data-aos="zoom-in" data-aos-delay={i * 100}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
