// products.ts

// ---------------- Utils ----------------
const createSlug = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres raros
    .trim()
    .replace(/\s+/g, "-") // espacios → guiones

// ---------------- Product Type ----------------
export type Product = {
  id: number
  title: string
  subtitle: string
  slug: string
  description: string
  imgsrc1: string
  imgsrc2: string
  price: number
  stock: boolean
}

// ---------------- Products ----------------
const productos: Product[] = [
  {
    id: 1,
    title: "Vela Vainilla",
    subtitle: "Dulce y cálida",
    slug: createSlug("Vela Vainilla"),
    description:
      "Aroma dulce y envolvente que genera una sensación inmediata de confort.\nIdeal para momentos de relax, lectura o descanso en casa.\nSu fragancia cálida aporta armonía y bienestar al ambiente.",
    imgsrc1:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    imgsrc2:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 12.99,
    stock: true,
  },
  {
    id: 2,
    title: "Vela Lavanda",
    subtitle: "Relajante natural",
    slug: createSlug("Vela Lavanda"),
    description:
      "Fragancia suave y natural con efecto relajante.\nPerfecta para reducir el estrés y acompañar rutinas de descanso.\nIdeal para dormitorios, baños o momentos de meditación.",
    imgsrc1:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12RG-a.jpg?v=1762349067&width=800",
    imgsrc2:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 14.5,
    stock: true,
  },
  {
    id: 3,
    title: "Vela Sándalo",
    subtitle: "Amaderada y profunda",
    slug: createSlug("Vela Sándalo"),
    description:
      "Aroma intenso y amaderado, profundo y elegante.\nAporta una atmósfera cálida y sofisticada a cualquier espacio.\nIdeal para ambientes tranquilos y de introspección.",
    imgsrc1:
      "https://thecandleshop.com.ar/cdn/shop/files/NV11L-a.jpg?v=1762349067&width=800",
    imgsrc2:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 16.25,
    stock: false,
  },
  {
    id: 4,
    title: "Vela Cítrica",
    subtitle: "Fresca y energizante",
    slug: createSlug("Vela Cítrica"),
    description:
      "Fragancia fresca y vibrante que revitaliza el ambiente.\nPerfecta para aportar energía y claridad durante el día.\nIdeal para livings, cocinas o espacios de trabajo.",
    imgsrc1:
      "https://thecandleshop.com.ar/cdn/shop/files/A53-HigoOriente.jpg?v=1754070424&width=800",
    imgsrc2:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 13.75,
    stock: true,
  },
  {
    id: 5,
    title: "Vela Rosa Blanca",
    subtitle: "Suave y floral",
    slug: createSlug("Vela Rosa Blanca"),
    description:
      "Aroma floral delicado y equilibrado.\nBrinda una sensación de calma y suavidad sin ser invasiva.\nIdeal para crear ambientes románticos y acogedores.",
    imgsrc1:
      "https://thecandleshop.com.ar/cdn/shop/files/NV11F-a.jpg?v=1762349067&width=800",
    imgsrc2:
      "https://thecandleshop.com.ar/cdn/shop/files/NV12P-a.jpg?v=1762349067&width=800",
    price: 15.99,
    stock: true,
  },
]

export default productos;
