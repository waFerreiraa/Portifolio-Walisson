import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Walisson Almeida</h1>
      <nav>
        <a href="Hero.jsx">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
