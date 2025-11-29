import { FcPaid, FcNext, FcPrevious } from "react-icons/fc";
import Galaxy from "../background/Galaxy";

const Section1 = (): JSX.Element => {
    return (
        <div className="section h-screen text-white relative overflow-hidden">

            {/* BG GALAXY */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Galaxy
                    mouseInteraction={false}
                    mouseRepulsion={false}
                    /* MÁS LUCES EN MOBILE */
                    density={window.innerWidth < 768 ? 0.45 : 0.2}
                    glowIntensity={window.innerWidth < 768 ? 0.25 : 0.1}
                    saturation={0.1}
                    hueShift={100}
                    transparent={true}
                />
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 h-full p-3 md:p-12">

                {/* COLUMNA 1 */}
                <div className="relative col-span-1 flex items-center justify-center">

                    {/* TEXTO SUPERIOR */}
                    <p className="
                        absolute z-20 top-5 left-0 md:left-40 select-none
                        text-xs md:text-xl 
                        bg-gradient-to-r from-gray-600/95 via-gray-500 to-gray-600/90
                        text-white font-extralight drop-shadow p-2 md:p-3
                        rounded-3xl shadow-xl animate-[sink_2s_ease-in-out_infinite]
                        flex items-center gap-2
                    ">
                        Nuevas Fragancias <FcNext />
                    </p>

                    {/* TEXTO INFERIOR */}
                    <p className="
                        absolute z-20 -bottom-2 md:bottom-10 right-0 md:right-20
                        font-extralight bg-gradient-to-r from-gray-600/95 via-gray-500 to-gray-400
                        text-white text-xs md:text-xl p-2 md:p-3
                        rounded-3xl shadow-xl select-none
                        animate-[sink_4s_ease-in-out_infinite]
                        flex items-center gap-2
                    ">
                        <FcPrevious /> Huele a Huerta y Manzanilla
                    </p>

                    {/* IMAGEN */}
                    <img
                        src="https://i.ibb.co/cc05jmn9/pngwing-com.png"
                        alt=""
                        className="relative z-10 w-[75%] md:w-[80%] max-w-[350px] md:max-w-[450px] object-contain animate-fade-in-right"
                    />
                </div>

                {/* COLUMNA 2 */}
                <div className="relative z-10 col-span-1 flex flex-col items-start justify-center mt-10 p-3 md:p-10 text-center md:text-left animate-fade-in-up">

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.60)] ">
                        LUMIER AROMAS
                    </h1>
                    
                    <p className="mb-5 text-md md:text-base animate-fade-in-up">Store Online de Velas y fragancias.</p>

                    <div className="hidden md:block h-0.5 w-20 md:w-30 bg-gradient-to-r from-gray-50/60 via-gray-200/40 to-gray-400/20 mb-6 rounded-full mx-auto md:mx-0"></div>

                    <p className="text-sm md:text-xl mb-4 font-light tracking-wide text-white">
                        Boutique de Velas - Deco Interiores
                    </p>

                    <p className="text-xs md:text-base font-extralight tracking-wide text-white/70 mb-4">
                        Creá momentos. Encendé sensaciones.
                    </p>

                    {/* BOTONES */}
                    <div className="flex md:flex-row gap-5 md:gap-6 justify-center align-middle mt-4 relative z-30 animate-fade-in-left">

                        <button className="
                            z-30 flex items-center gap-2
                            px-2 py-1 md:px-6 md:py-2
                            rounded-full text-white font-medium
                            text-sm md:text-xl
                            bg-gradient-to-r from-lime-700 via-lime-600 to-lime-500
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:opacity-85 cursor-pointer
                            shadow-md active:scale-95
                            
                        ">
                            Ir a la Tienda <FcPaid className="text-lg md:text-xl " />
                        </button>

                        <button className="
                            z-30 px-6 py-2 rounded-full text-white font-medium
                            text-sm md:text-xl
                            bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-500
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:opacity-85 cursor-pointer
                             
                            
                        ">
                            Contactar
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section1;
