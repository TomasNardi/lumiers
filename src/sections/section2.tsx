const Section2 = () => {
    return (
        <>
            <div className="section sm:p-2 flex flex-col items-center justify-center text-white bg-gradient-to-r from-neutral-1000 from-0% via-neutral-900 via-50% to-neutral-800 to-100%">

                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                    Descubre el aroma que has estado buscando
                </h2>

                <p className="text-sm md:text-lg p-2  text-center">
                    Bienvenido a LUMIERE AROMAS, donde cada vela está diseñada para transformar espacios y emociones. <br />
                    Nuestros aromas exclusivos —creados con ceras premium y esencias de alta pureza— ofrecen una fragancia duradera, equilibrada y auténtica.
                </p>

                {/* GRID – SOLO MOBILE CAMBIADO */}
                <div
                    className="
                        grid 
                        grid-cols-2      /* MOBILE */
                        gap-4            /* MOBILE */
                        p-4              /* MOBILE */
                        mt-6             /* MOBILE */

                        md:grid-cols-4   /* PC ORIGINAL */
                        md:gap-10
                        md:p-10
                        md:mt-10
                    "
                >

                    {[
                        {
                            img: "https://i.ibb.co/5xvRrbRq/Whats-App-Image-2025-11-29-at-22-17-39.jpg",
                            label: "Repuesto Citrus"
                        },
                        {
                            img: "https://thecandleshop.com.ar/cdn/shop/files/A55D_VELAAROMATICATINNECTARINE_a.jpg?v=1690207576&width=800",
                            label: "Nectarine Tin"
                        },
                        {
                            img: "https://thecandleshop.com.ar/cdn/shop/files/AccesorioVI124N-a.jpg?v=1760030122&width=800",
                            label: "Accesorio VI124"
                        },
                        {
                            img: "https://thecandleshop.com.ar/cdn/shop/files/A51-Nectarine.jpg?v=1754071511&width=800",
                            label: "Vela Nectarine"
                        }
                    ].map((item, i) => (
                        
                        <div
                            key={i}
                            className="
                                col-span-1 
                                relative 
                                group

                                /* MOBILE SIN SCROLL */
                                h-[160px]

                                /* PC ORIGINAL */
                                md:aspect-square 
                                md:h-auto
                            "
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover cursor-pointer rounded-xl"
                            />

                            <div
                                className="
                                    absolute bottom-0 left-0 w-full 
                                    bg-neutral-800/70 flex items-center justify-center
                                    text-white text-sm

                                    /* MOBILE SIEMPRE VISIBLE */
                                    h-[28%]
                                    opacity-100 
                                    translate-y-0

                                    /* PC ORIGINAL */
                                    md:h-[20%]
                                    md:opacity-0
                                    md:translate-y-5
                                    md:group-hover:opacity-100
                                    md:group-hover:translate-y-0
                                    md:transition-all md:duration-300 md:ease-out
                                    rounded-b-xl
                                "
                            >
                                <p>{item.label}</p>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}

export default Section2;
