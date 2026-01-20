import { useContext, useState } from "react"
import { ShopCartContext } from "../context/shopcart"
import CartShop from "./cartshop"
import ResumeShop from "./resumeshop"
// import ResumeShop from "./resumeshop"


// ---------------- TYPES ----------------
type Product = {
  id: number
  title: string
  subtitle: string
  imgsrc1: string
  imgsrc2: string
  price: number
  stock: boolean
}

type ProductProps = Product & {
  className: string
  onAdd: () => void
  onOpenResume: () => void
}

// ---------------- COMPONENTS ----------------
const Window = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
)

const Grid = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
)

const ProductCard = ({
  title,
  subtitle,
  imgsrc1,
  imgsrc2,
  price,
  stock,
  className,
  onOpenResume, 
  onAdd ,
}: ProductProps) => {
  return (
    <div className={className}>
      <div className="relative group overflow-hidden rounded ">
        <link rel="preload" as="image" href={imgsrc2} />

        <img
          src={imgsrc1}
          alt={title}
          className="
            w-full
            border-2
            scale-120
            object-cover
            transition-all
            duration-500
            ease-out
            group-hover:opacity-0
            group-hover:scale-110
            group-hover:blur-[1px]
          "
        />

        <img
          src={imgsrc2}
          alt={title}
          className="
            absolute
            inset-0
            w-full
            object-cover
            opacity-0
            transition-all
            duration-500
            ease-out
            group-hover:opacity-100
            group-hover:scale-115
          "
        />
      </div>

      <h1 className="relative z-10 text-lg font-semibold mt-4">
        {title}
      </h1>

      <h2 className="text-sm text-gray-500">{subtitle}</h2>

      <p className="lg:mt-2 font-bold">${price}</p>

      <div className="flex items-center  gap-2 mt-1 lg:mt-2">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            stock ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <p className={`text-sm font-medium ${
          stock ? "text-green-600 text-[10px] lg:text-base" : "text-red-600"
        }`}>
          {stock ? "Disponible para entrega" : "Sin stock"}
        </p>
      </div>


        <button
        disabled={!stock}
        onClick={() => {
        onAdd()
        onOpenResume()
      }}
      className={`mt-4 w-full text-[8px] lg:text-base py-2 md:py-2 rounded text-white ${
        stock
          ? "bg-neutral-900 hover:bg-gray-800 cursor-pointer"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      Agregar al carrito
    </button>

    </div>
  )
}

// ---------------- DATA ----------------
const productos: Product[] = [
  {
    id: 1,
    title: "Vela Vainilla",
    subtitle: "Dulce y cálida",
    imgsrc1: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    imgsrc2: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 12.99,
    stock: true,
  },
  {
    id: 2,
    title: "Vela Lavanda",
    subtitle: "Relajante natural",
    imgsrc1: "https://thecandleshop.com.ar/cdn/shop/files/NV12RG-a.jpg?v=1762349067&width=800",
    imgsrc2: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 14.5,
    stock: true,
  },
  {
    id: 3,
    title: "Vela Sándalo",
    subtitle: "Amaderada y profunda",
    imgsrc1: "https://thecandleshop.com.ar/cdn/shop/files/NV11L-a.jpg?v=1762349067&width=800",
    imgsrc2: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 16.25,
    stock: false,
  },
  {
    id: 4,
    title: "Vela Cítrica",
    subtitle: "Fresca y energizante",
    imgsrc1: "https://thecandleshop.com.ar/cdn/shop/files/A53-HigoOriente.jpg?v=1754070424&width=800",
    imgsrc2: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 13.75,
    stock: true,
  },
  {
    id: 5,
    title: "Vela Rosa Blanca",
    subtitle: "Suave y floral",
    imgsrc1: "https://thecandleshop.com.ar/cdn/shop/files/NV11F-a.jpg?v=1762349067&width=800",
    imgsrc2: "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 15.99,
    stock: true,
  },
]

// ---------------- PAGE ----------------
const Home = () => {
  const cart = useContext(ShopCartContext)
  const [openResume , setOpenResume] = useState(false)

  if (!cart) return null

 return (
  <Window className="min-h-screen bg-neutral-200 p-3 lg:p-10 relative">
    <Grid className="max-w-20xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
      {productos.map(producto => (
        <ProductCard
          key={producto.id}
          {...producto}
          className="p-4 lg:p-6 rounded-xl shadow-2xl border-2 border-neutral-200 bg-white"
          onAdd={() =>
            cart.addItem({
              id: producto.id,
              title: producto.title,
              price: producto.price,
              image: producto.imgsrc1, 
            })
          }
          onOpenResume={() => setOpenResume(true)}
        />
      ))}
    </Grid>

    {/*Carrito flotante */}
    <CartShop />

    <ResumeShop 
    open = {openResume}
    onClose = {()=> setOpenResume(false)}/>

  </Window>)}

export default Home
