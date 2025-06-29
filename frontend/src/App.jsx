import SocialIcons from "./Modules/Pages/baseComponents/SocialIcons";
import AboutMePage from "./Modules/Pages/pageComponents/AboutMePage";
import ContactPage from "./Modules/Pages/pageComponents/ContactPage";
import EducationWorkPage from "./Modules/Pages/pageComponents/EducationWorkPage";
import HomePage from "./Modules/Pages/pageComponents/HomePage";
import OwnProjectPage from "./Modules/Pages/pageComponents/OwnProjectPage";
import ProjectsPage from "./Modules/Pages/pageComponents/ProjectsPage";
import ServicesPage from "./Modules/Pages/pageComponents/ServicesPage";

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-[#801eb0] w-full overflow-hidden">
        <SocialIcons scrollToSection={scrollToSection} />
      </div>
      <div id="home">
        <HomePage />
      </div>
      <div id="services">
        <ServicesPage />
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="education">
        <EducationWorkPage />
      </div>
      <div id="projects">
        <ProjectsPage/>
      </div>
      <div id="own-projects">
        <OwnProjectPage/>
      </div>
      <div id="contact">
        <ContactPage/>
      </div>
    </>
  );
};

export default App;