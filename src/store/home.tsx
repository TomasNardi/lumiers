// ----------------------------------- INTERFACES ----------------------------------
interface WindowProps {
  className: string
  children?: React.ReactNode
}

interface GridProps {
  className: string
  children?: React.ReactNode
}

//--------------------------- TYPES --------------------------------------------- 
type Product = {
  id: number
  title: string
  subtitle: string
  imgsrc: string
  price: number
  stock: boolean
}

type ProductProps = Product & {
  className: string
}

// ---------------------------------- COMPONENTS ----------------------------------

// Layout principal
const Window = ({ className, children }: WindowProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// Grid contenedor
const Grid = ({ className, children }: GridProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// Card de producto (UN SOLO producto)
const ProductCard = ({
  title,
  subtitle,
  imgsrc,
  price,
  stock,
  className,
}: ProductProps) => {
  return (
    <div className={className}>
      <img
        src={imgsrc}
        alt={title}
        className="h-48 object-cover rounded justify-self-center"
      />

      <h1 className="text-lg font-semibold mt-2">{title}</h1>
      <h2 className="text-sm text-gray-500">{subtitle}</h2>

      <p className="mt-2 font-bold">${price}</p>

      <p className={stock ? "text-green-600" : "text-red-600"}>
        {stock ? "Hay stock" : "Sin stock"}
      </p>

      <button
        disabled={!stock}
        className={`mt-3 w-full py-2 rounded text-white ${
          stock ? "bg-black hover:bg-gray-800 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

// ---------------------------------- DATA ----------------------------------

const productos: Product[] = [
  {
    id: 1,
    title: "Vela Aromática Vainilla",
    subtitle: "Dulce y cálida",
    imgsrc:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMEKxQfgwB-IZ7yxmxe1r07BKGLNf5dJH8dPrKEHKSlokAeGBVbm6a9_i37gy9bYNNUVvLED4g_7tAv_I-MvpPoqQsWsS1qGF-MOt9GKrzu5XlSA_hkWeBV7KaQuVTbzNfTkyDNA&usqp=CAc",
    price: 12.99,
    stock: true,
  },
  {
    id: 2,
    title: "Vela Lavanda",
    subtitle: "Relajante natural",
    imgsrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCOR-drp6nrttw-Bi5nNSGVRlgAA8jGN35mfxxPHtLDgR0YlhAISWo2nheUOQRfwHi5n8EXEyaBxt4XvAMAK6vSYlQDoDCkLVXq_Lb2nM2Gb1_ZziuthsISDC1w3hgadeTUg5r1g&usqp=CAc",
    price: 14.5,
    stock: true,
  },
  {
    id: 3,
    title: "Vela Lavanda",
    subtitle: "Relajante natural",
    imgsrc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCOR-drp6nrttw-Bi5nNSGVRlgAA8jGN35mfxxPHtLDgR0YlhAISWo2nheUOQRfwHi5n8EXEyaBxt4XvAMAK6vSYlQDoDCkLVXq_Lb2nM2Gb1_ZziuthsISDC1w3hgadeTUg5r1g&usqp=CAc",
    price: 14.5,
    stock: true,
  },
  {
    id: 4,
    title: "Vela Lavanda",
    subtitle: "Relajante natural",
    imgsrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCOR-drp6nrttw-Bi5nNSGVRlgAA8jGN35mfxxPHtLDgR0YlhAISWo2nheUOQRfwHi5n8EXEyaBxt4XvAMAK6vSYlQDoDCkLVXq_Lb2nM2Gb1_ZziuthsISDC1w3hgadeTUg5r1g&usqp=CAc",
    price: 14.5,
    stock: true,
  },
]

// ---------------------------------- PAGE ----------------------------------

const Home = () => {
  return (
    <Window className="min-h-screen p-6 ">
      <Grid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 d-flex p-6 rounded">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            {...producto}
            className=" p-4 rounded shadow"
          />
        ))}
      </Grid>
    </Window>
  )
}

export default Home
