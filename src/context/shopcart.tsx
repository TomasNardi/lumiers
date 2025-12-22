import { createContext, useEffect, useState } from "react"
// import { toast } from "react-toastify"

// ---------------- TYPES ----------------
export type CartItem = {
  id: number
  title: string
  price: number
  qty: number
}

type ShopCartContextType = {
  items: CartItem[]
  addItem: (product: Omit<CartItem, "qty">) => void
  decrementItem: (id: number) => void
  removeItem: (id: number) => void
  cartQuantity: number
}

// --------------- CONTEXT ---------------
export const ShopCartContext = createContext<ShopCartContextType | null>(null)

// --------------- PROVIDER ---------------
type ShopCartProviderProps = {
  children: React.ReactNode
}

export const ShopCartProvider = ({ children }: ShopCartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("ShopList")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("ShopList", JSON.stringify(items))
  }, [items])

  // ➕ Agregar / incrementar
  const addItem = (product: Omit<CartItem, "qty">) => {
    // toast.success("🛒 Producto agregado")

    setItems(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  const decrementItem = (id: number) => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    )
  }

  // 🗑 Eliminar producto completo
  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  // 🔢 Cantidad total
  const cartQuantity = items.reduce((acc, item) => acc + item.qty, 0)

  return (
    <ShopCartContext.Provider
      value={{ items, addItem, decrementItem, removeItem, cartQuantity }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
