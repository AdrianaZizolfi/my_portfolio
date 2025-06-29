import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/allbooked.png" alt="AllBooked" />
            </div>
            <div className="text-content">
            <a
                href="https://www.allbooked.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
              <h2>
                AllBooked, the All-in-one Web Application for Business Management, User Friendly and Easy to Use
              </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                An app built with Django, Phyton, TailwindCSS & Javascript for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/aether.png"
                  alt="Creative Agency"
                />
              </div>
              <a href="https://www.aethercreativeagency.co.uk/"
              target="_blank"
              rel="noopener noreferrer">
              <h2>Aether Creative Agency</h2>
              </a>
              
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/movie.png" alt="YC Directory App" />
              </div>
              <a href="https://movie-app-teal-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
                <h2>Movie Database App </h2>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;