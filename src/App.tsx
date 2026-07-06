import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AgentsSection } from './sections/AgentsSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { TechnologySection } from './sections/TechnologySection';
import { FeaturesSection } from './sections/FeaturesSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AgentsSection />
        <WorkflowSection />
        <TechnologySection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
