import LogoSection from "./sections/LogoSection.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    {/* <ExperienceSection /> */}
    <TechStack />
    <Contact />
    <Footer />
    </>

    
  )
}

export default App
