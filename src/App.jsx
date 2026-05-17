import { lazy, Suspense, useState } from "react";

import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/NavBar";

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`app-shell ${isLoading ? "is-loading" : ""}`}>
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <ShowcaseSection />
          <FeatureCards />
          <Experience />
          <TechStack />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default App;
