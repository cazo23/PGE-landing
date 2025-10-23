import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import System from "./components/System";
// import Results from "./components/Results"; // Hidden for now - to be added later with testimonials
import SecondResult from "./components/SecondResult";
import TargetAudience from "./components/TargetAudience";
import Beta from "./components/Beta";
import Differentiator from "./components/Differentiator";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <System />
      {/* <Results /> */} {/* Hidden for now - to be added later with testimonials */}
      <SecondResult />
      <TargetAudience />
      <Differentiator />
      <Beta />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
