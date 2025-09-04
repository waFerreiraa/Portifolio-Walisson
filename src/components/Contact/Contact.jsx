import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up">
      <h3>Contato</h3>
      <form className="contact-form" data-aos="fade-up" data-aos-delay="200">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
