import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000,  // duração da animação
  once: false,      // <--- repete a animação ao rolar
  mirror: true,     // animação também ocorre ao rolar para cima
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
