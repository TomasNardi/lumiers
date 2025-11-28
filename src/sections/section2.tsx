const Section2 = () => {
    return (
        <>
            <div className="section flex flex-col items-center justify-center text-white bg-gradient-to-r from-neutral-1000 from-0% via-neutral-900 via-50% to-neutral-800 to-100%">

                <h2 className="text-3xl font-semibold mb-2 text-center">
                    Descubre el aroma que has estado buscando
                </h2>

                <p className="text-lg text-center">
                    Bienvenido a LUMIERS, donde cada vela está diseñada para transformar espacios y emociones. <br />
                    Nuestros aromas exclusivos —creados con ceras premium y esencias de alta pureza— ofrecen una fragancia duradera, equilibrada y auténtica.
                </p>

                <div className="grid grid-cols-4 gap-10 p-10 mt-10">

                    {/* ITEM */}
                    {[
                        {
                            img: "https://thecandleshop.com.ar/cdn/shop/files/REPUESTOCITRUS.png?v=1758807643&width=800",
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
                        <div key={i} className="col-span-1 relative group">
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover cursor-pointer"
                            />

                            <div className="
                                absolute bottom-0 left-0 w-full h-[20%]
                                bg-neutral-800/70 flex items-center justify-center
                                opacity-0 translate-y-5
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-300 ease-out
                            ">
                                <p className="text-white text-sm">{item.label}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Section2;
