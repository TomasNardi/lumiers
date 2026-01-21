import { useParams } from "react-router-dom"
import { useState } from "react"
import productos from "./products"

// ---------------- TYPES ----------------
type GridProps = {
  className: string
  children: React.ReactNode
}

// ---------------- COMPONENTS ----------------
const Grid = ({ className, children }: GridProps) => {
  return <div className={className}>{children}</div>
}

const ProductDetail = () => {
  const { slug } = useParams()
  const producto = productos.find(p => p.slug === slug)

  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (!producto) return <p className="p-8">Producto no encontrado</p>

  const images = [producto.imgsrc1, producto.imgsrc2]
  const currentImage = activeImage || producto.imgsrc1

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Grid className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ---------------- THUMBNAILS ---------------- */}
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${producto.title} ${index + 1}`}
              onClick={() => setActiveImage(img)}
              className={`
                w-full aspect-square object-cover border rounded-xs cursor-pointer
                transition
                ${currentImage === img
                  ? "border-black ring-1 ring-black"
                  : "opacity-60 hover:opacity-100"}
              `}
            />
          ))}
        </div>

        {/* ---------------- IMAGEN PRINCIPAL ---------------- */}
        <div className="lg:col-span-6">
          <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={currentImage}
              alt={producto.title}
              className="w-full h-full object-cover transition-all"
            />
          </div>
        </div>

        {/* ---------------- INFO / DESCRIPCIÓN ---------------- */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">{producto.title}</h1>
          <p className="text-gray-500">{producto.subtitle}</p>

            <div>
            <p className="text-xl font-bold">${producto.price}</p>
            <p className="text-xs text-gray-500">Precios con Impuestos Nacionales</p>
            </div>

          {!producto.stock && (
            <span className="text-sm text-red-500 font-medium">
              Sin stock
            </span>
          )}

          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
            {producto.description}
          </div>

          <p className="font-bold">Consultar Opciones de Retiro</p>

            {/* Product available  */}
             <div className="flex items-center  gap-2 mt-1 lg:mt-2">
                <span
                className={`w-2.5 h-2.5 rounded-full ${
                    producto.stock ? "bg-green-500" : "bg-red-500"
                }`}
                />
                <p className={`text-sm font-medium ${
                producto.stock ? "text-green-600 text-[10px] lg:text-base" : "text-red-600"
                }`}>
                {producto.stock ? "Disponible para entrega inmediata" : "Sin stock"}
                </p>
            </div>

          <button
            disabled={!producto.stock}
            className={`mt-4 px-6 py-3 text-sm font-medium rounded
              ${
                producto.stock
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Agregar al carrito
          </button>
        </div>
      </Grid>
    </section>
  )
}

export default ProductDetail
