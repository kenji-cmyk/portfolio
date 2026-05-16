import { useState } from "react";

import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/NavBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`app-shell ${isLoading ? "is-loading" : ""}`}>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
