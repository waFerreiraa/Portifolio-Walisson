import "./Hero.css";
import foto from "../../assets/Walisson Almeida.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text" data-aos="fade-right">
        <h2>Olá, eu sou <span>Walisson Almeida</span></h2>
        <p>
          Estudante de <b>Análise e Desenvolvimento de Sistemas</b> com foco em
          <b> Full Stack Development</b>. Apaixonado por criar soluções modernas
          e escaláveis.
        </p>
      </div>
      <div className="hero-img" data-aos="fade-left" data-aos-delay="200">
        <img src={foto} alt="Walisson Almeida" />
      </div>
    </section>
  );
}
