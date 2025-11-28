import { Send, CreditCard, Package } from "lucide-react";

interface SectionProps {
  fullpageApi: any;
}

const Section3: React.FC<SectionProps> = ({ fullpageApi }) => {
  return (
    <div className="section relative flex flex-col items-center justify-center text-white px-6">

      <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-center">
        LUMIERS - STORE ONLINE
      </h2>

      <p className="text-base md:text-lg text-center mb-8 md:mb-10">
        ¡Conocé cómo funciona nuestro servicio!
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl">

        {/* Envío */}
        <div className="flex flex-col items-center text-center">
          <div className="max-md:scale-75 max-md:mb-1">
            <Send size={50} className="mb-4 text-purple-300" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Envío</h3>
          <p className="text-sm text-gray-200">
            Entregamos tu pedido de manera rápida y segura a todo el país.
          </p>
        </div>

        {/* Pago */}
        <div className="flex flex-col items-center text-center">
          <div className="max-md:scale-75 max-md:mb-1">
            <CreditCard size={50} className="mb-4 text-purple-300" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Pago</h3>
          <p className="text-sm text-gray-200">
            Aceptamos todos los medios de pago con máxima seguridad.
          </p>
        </div>

        {/* Retiros */}
        <div className="flex flex-col items-center text-center">
          <div className="max-md:scale-75 max-md:mb-1">
            <Package size={50} className="mb-4 text-purple-300" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Retiros</h3>
          <p className="text-sm text-gray-200">
            También podés retirar tu pedido en nuestro punto de entrega.
          </p>
        </div>
      </div>

      {/* BOTÓN – mobile más compacto */}
      <button
        className="
          absolute 
          bottom-6 right-6 md:bottom-10 md:right-10
          px-3 py-2 md:px-4 md:py-2
          bg-white text-black font-bold rounded-full
          transition cursor-pointer
          animate-[sink_2s_ease-in-out_infinite]
          shadow-md
          hover:scale-[1.03] hover:shadow-lg
          active:scale-[0.98]
        "
        onClick={() => fullpageApi.moveTo(1)}
      >
        Volver al inicio
      </button>

    </div>
  );
};

export default Section3;
