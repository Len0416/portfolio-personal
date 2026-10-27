import SectionHeading from './ui/SectionHeading';
import { CodeXml, Palette, Smartphone, GitFork} from "lucide-react";

function Expertise() {
  return (
    <div className="mx-auto max-w-6xl mb-12 px-12 bg-[#080808] text-[#F5F5F5]" id="expertise">
      <SectionHeading title="Experticia Técnica" subtitle="Soluciones digitales centradas en diseño, tecnología y funcionalidad." />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 place-items-center">
        <div className="bg-[#1A1A1A] p-6 w-[100%] rounded-lg shadow-md">
          <CodeXml className="text-red-500 mb-2" />
          <h2 className="text-2xl font-semibold mb-2">Desarrollo web</h2>
          <p className='text-[#A3A3A3]'>
            Interfaces con React y JavaScript.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-6 w-[100%] rounded-lg shadow-md">
          <Palette className="text-red-500 mb-2"/>
          <h2 className="text-2xl font-semibold mb-2">UI / UX</h2>
          <p className='text-[#A3A3A3]'>
            Diseño visual y experiencia de usuario.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-6 w-[100%] rounded-lg shadow-md">
          <Smartphone className="text-red-500 mb-2"/>
          <h2 className="text-2xl font-semibold mb-2">Responsive</h2>
          <p className='text-[#A3A3A3]'>
            Adaptación a distintos dispositivos.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-6 w-[100%] rounded-lg shadow-md">
          <GitFork className="text-red-500 mb-2"/>
          <h2 className="text-2xl font-semibold mb-2">Flujo de desarrollo</h2>
          <p className='text-[#A3A3A3]'>
            Git, GitHub y despliegues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;