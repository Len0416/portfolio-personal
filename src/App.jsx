import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F5F5F5]">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Portfolio / Desarrollador web
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Construyendo el{" "}
          <span className="text-red-500">
            futuro digital
          </span>{" "}
          con precisión.
        </h1>

        <p className="mt-6 max-w-xl leading-7 text-[#A3A3A3]">
          Diseño y desarrollo experiencias digitales modernas,
          funcionales y adaptables a cualquier dispositivo.
        </p>

        <a
          href="#proyectos"
          className="mt-8 inline-flex rounded-md bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600"
        >
          Explorar proyectos
        </a>
      </section>

      <section
        id="proyectos"
        className="border-t border-[#303030] px-6 py-16"
      >
        <h2 className="text-2xl font-semibold">
          Proyectos destacados
        </h2>
      </section>
    </main>
  );
}

export default App
