import ProfilePortrait from './ui/ProfilePortrait.jsx';

function Hero() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5]" id="home">
      <section className="flex items-center mx-auto max-w-6xl justify-center px-6">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Portfolio / Desarrollador web
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl text-wrap font-jakarta">
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
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="#proyectos"
              className="mt-8 inline bg-red-500 min-w-[180px] px-5 text-center py-3 font-medium text-white transition hover:bg-red-600"
            >
              Explorar proyectos
            </a>
            <a
              href="#contacto"
              className="mt-8 inline border min-w-[180px] border-white text-center px-5 py-3 font-medium text-white"
            >
              Contactarme
            </a>
          </div>
          <div className="border-t border-white my-10"></div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <h2 className=" text-[#A3A3A3] font-semibold inline-flex flex-col gap-2"><span className="text-white font-bold text-4xl">1+</span> AÑOS DE EXP</h2>
            <h2 className=" text-[#A3A3A3] font-semibold inline-flex flex-col gap-2"><span className="text-white font-bold text-4xl">10+</span> PROYECTOS</h2>
            <h2 className=" text-[#A3A3A3] font-semibold inline-flex flex-col gap-2"><span className="text-white font-bold text-4xl">5+</span> CLIENTES</h2>
          </div>
        </div>
        <ProfilePortrait />
      </section>
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

export default Hero;