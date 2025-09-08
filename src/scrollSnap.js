import { useEffect } from "react";

function useScrollSnap() {
  useEffect(() => {
    const main = document.querySelector("main");
    const sections = document.querySelectorAll("section");

    if (!main || sections.length === 0) return;

    let isScrolling;

    const handleScroll = () => {
      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        let closestSection = sections[0];
        let minDistance = Math.abs(sections[0].getBoundingClientRect().top);

        sections.forEach((sec) => {
          const distance = Math.abs(sec.getBoundingClientRect().top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = sec;
          }
        });

        closestSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    main.addEventListener("scroll", handleScroll);

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useScrollSnap;
