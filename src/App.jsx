import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Expertise from './components/Expertise.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <section
        id="proyectos"
        className="border-t border-[#303030] mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-2xl font-semibold font-jakarta mb-6">
          Proyectos destacados
        </h2>
      </section>
    </div>
  );
}

export default App;
