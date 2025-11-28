import { FcPaid } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const Section1 = (): JSX.Element => {
    return (
        <div className="section h-screen bg-gradient-to-tl from-orange-900 from-25% via-orange-700 via-50% to-yellow-500 to-100% text-white">

            {/* GRID PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full p-3 md:p-12">

                {/* COLUMNA 1 - IMAGEN + TEXTOS */}
                <div className="col-span-1 flex items-center justify-center relative">

                <p
                    className="
                        absolute z-1 top-5 left-0 md:left-40 select-none
                        bg-gradient-to-r from-gray-600/95 via-gray-500 to-gray-600/90
                        text-white text-lg md:text-md font-poppins font-extralight
                        drop-shadow p-2 md:p-3 rounded-3xl shadow-xl
                        animate-[sink_2s_ease-in-out_infinite]
                        transition
                        flex items-center gap-2
                    "
                >
                    Nuevas Fragancias <FcNext />
                </p>


                <p
                    className="
                        absolute z-1 -bottom-2 md:bottom-10 right-0 md:right-20
                        font-extralight
                        bg-gradient-to-r from-gray-600/95 via-gray-500 to-gray-400
                        text-white text-xs md:text-xl 
                        p-2 md:p-3 rounded-3xl shadow-xl
                        select-none
                        animate-[sink_4s_ease-in-out_infinite]
                        flex items-center gap-2
                    "
                >
                    <FcPrevious /> Huele a Huerta y Manzanilla
                </p>



                    {/* IMAGEN AGRANDADA */}
                    <img
                        src="https://i.ibb.co/cc05jmn9/pngwing-com.png"
                        alt=""
                        className="w-[75%] md:w-[80%] max-w-[350px] md:max-w-[450px] object-contain animate-fade-in-right "
                    />

                </div>

                {/* COLUMNA 2 - FADE IN */}
                <div className="col-span-1 flex flex-col items-start justify-center p-6 md:p-10 text-center md:text-left">

                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] animate-fade-in-up">
                        LUMIERS
                    </h1>

                    <div className="h-0.5 w-20 md:w-30 bg-gradient-to-r from-gray-50/60 via-gray-200/40 to-gray-400/20 mb-6 rounded-full mx-auto md:mx-0"></div>

                    <p className="text-lg md:text-xl mb-4 font-light tracking-wide text-white">
                        Boutique de Velas - Deco Interiores
                    </p>
                    <p className="text-sm md:text-base font-extralight tracking-wide text-white/70 mb-4">
                        Creá momentos. Encendé sensaciones.
                    </p>

                    <div className="flex  md:flex-row gap-4 md:gap-6 justify-center md:justify-start">

                    <button
                    className="
                        flex items-center gap-2
                        px-6 py-2 rounded-full text-white font-medium
                        bg-gradient-to-r from-lime-700 via-lime-600 to-lime-500
                        transform transition-all duration-300 ease-in-out
                        hover:-translate-y-1 hover:opacity-85 cursor-pointer
                    "
                    >
                    Ir a la Tienda <FcPaid size={20} />
                    </button>


                        <button className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-500 transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-85 cursor-pointer">
                            Contactar
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section1;
