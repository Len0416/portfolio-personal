import { CodeXml } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-[#080808] text-[#F5F5F5] fixed top-0 w-full border-b z-2 border-[#303030]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold flex items-center gap-2">
          <CodeXml className="text-red-500" />
          <a href="#home" className="text-red-500">
            Portfolio
          </a>
        </div>
        <div className="space-x-5">
          <a href="#proyectos" className="hover:text-red-500">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-red-500">
            Contacto
          </a>
          <a href="#about" className="hover:text-red-500">
            Sobre mí
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;