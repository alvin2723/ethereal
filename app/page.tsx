import CallToAction from "./sections/CallToAction";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
