import { FcPaid} from "react-icons/fc";
import Plasma from "../background/Plasma.jsx";
import { ChevronRight, ChevronLeft } from "lucide-react";
const Section1 = (): JSX.Element => {

    const irTienda = () => {
        window.open("https://lumierearomasshop.empretienda.com.ar/", "_blank");
    };

    const irContacto = () => {
       window.open(
            "https://wa.me/5491135209713?text=Hola!%20Quiero%20info%20",
            "_blank"
        );

    };

    return (
        <div className="section h-screen text-white relative overflow-hidden ">

            {/* MARQUEE SUPERIOR */}
            <div className="absolute top-0 left-0 w-full z-50 bg-white text-black py-1 overflow-hidden">
                <div className="marquee-wrapper">
                    <div className="marquee-content">💥 BLACK FRIDAY • 20 % OFF 💥</div>
                    <div className="marquee-content">💥 BLACK FRIDAY • 20 % OFF 💥</div>
                    <div className="marquee-content">💥 BLACK FRIDAY • 20 % OFF 💥</div>
                    <div className="marquee-content">💥 BLACK FRIDAY • 20 % OFF 💥</div>
                </div>
            </div>

            {/* BG PLASMA */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Plasma
                    color="#ff6b35"
                    speed={0.6}
                    direction="forward"
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={true}
                />
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 md:gap-20 h-full p-2 md:p-12">

                {/* COLUMNA 1 */}
                <div className="relative col-span-1 flex items-center justify-center">

                <p 
                className="
                tracking-wide
                    absolute z-20 top-10 left-0 md:left-20
                    select-none text-xs md:text-xl
                    bg-gradient-to-r from-red-500 via-red-600 to-red-800
                    text-white font-extralight drop-shadow
                    p-2 md:p-3 rounded-3xl shadow-xl
                    animate-[sink_2s_ease-in-out_infinite]
                    flex items-center gap-2
                "
                >
                Vela de Llama Intensa 
                <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                </p>

                <p 
                className="
                tracking-wide

                    absolute z-20 bottom-4 md:bottom-25 right-0 md:right-15
                    font-extralight
                    bg-gradient-to-r from-red-800 via-red-600 to-red-500
                    text-white text-xs md:text-xl
                    p-2 md:p-3 rounded-3xl shadow-xl select-none
                    animate-[sink_4s_ease-in-out_infinite]
                    flex items-center gap-2
                "
                >
                <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
                Aroma Cheescake Intenso
                </p>

                    <img
                        src="https://i.ibb.co/nN4DL4Zc/Gemini-Generated-Image-n5qhvyn5qhvyn5qh-1.png"
                        alt=""
                        className="relative z-10 w-[75%] md:w-[80%] max-w-[350px] md:max-w-[500px] object-contain animate-fade-in-right"
                    />
                </div>

                {/* COLUMNA 2 */}
                <div className="relative z-10 col-span-1 flex flex-col items-center md:items-start justify-center  p-3 md:p-10 text-center md:text-left animate-fade-in-up">

                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.60)] ">
                        LUMIERE AROMAS
                    </h1>

                    <p className="mb-5 text-lg md:text-base animate-fade-in-up font-thin">
                        Lumiere Store Online - Velas y fragancias.
                    </p>

                    <div className="hidden md:block h-0.5 w-20 md:w-30 bg-gradient-to-r from-gray-50/60 via-gray-200/40 to-gray-400/20 mb-6 rounded-full mx-auto md:mx-0"></div>

                    <p className="text-sm md:text-xl mb-4 font-light tracking-wide text-white">
                        Boutique de Velas - Deco Interiores
                    </p>

                    <p className="text-xs md:text-base font-extralight tracking-wide text-white/70 mb-4">
                        Creá momentos. Encendé sensaciones.
                    </p>

                    <img
                        src="https://www.whatnot.com/cdn/assets/1dbee64c086e3bd0/_next/static/media/qrcodeBlack.ceb3dd60.png"
                        alt="QR"
                        className="hidden md:block w-32 md:w-40 mb-4 animate-fade-in-up select-none bg-fuchsia-50 rounded-xl md:rounded-2xl"
                    />

                    {/* BOTONES */}
                    <div className="flex w-full md:w-auto flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-6 mt-4 relative z-30 animate-fade-in-left">

                        <button
                            onClick={irTienda}
                            className="z-30 flex items-center gap-2 px-6 py-2 md:px-6 md:py-2 rounded-full text-white font-medium text-lg md:text-xl bg-gradient-to-r from-lime-700 via-lime-600 to-lime-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-85 cursor-pointer shadow-md active:scale-95 shadow-[0_0_8px_rgba(132,204,22,a0.45)] hover:shadow-[0_0_22px_rgba(163,230,53,1)]"
                        >
                            Ir a la Tienda <FcPaid className="text-lg md:text-xl" />
                        </button>

                        <button
                            onClick={irContacto}
                            className="z-30 px-6 py-2 rounded-full text-white font-medium text-lg md:text-xl bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-85 cursor-pointer shadow-[0_0_8px_rgba(255,255,255,0.25)] hover:shadow-[0_0_22px_rgba(255,255,255,0.55)]"
                        >
                            Contactar
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section1;
