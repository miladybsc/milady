import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Privacy } from "./components/Privacy";
import { DeFi } from "./components/DeFi";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-dark text-text-light">
      <Nav />
      <main>
        <Hero />
        <Privacy />
        <DeFi />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
