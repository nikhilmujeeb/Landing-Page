import Hero from "./components/Hero";
import Features from "./components/Features";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Features />
      <RSVPForm />
      <Footer />
    </main>
  );
}
