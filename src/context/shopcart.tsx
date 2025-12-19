import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

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
  removeItem: (id: number) => void
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

  const addItem = (product: Omit<CartItem, "qty">) => {
    toast.success("🛒 Producto Agregado", {
  style: {
    boxShadow: "0px 15px 16px rgba(0,0,0,0.15)",
    borderRadius: "8px",
  },
})

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

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("ShopList", JSON.stringify(items))
  }, [items])

  return (
    <ShopCartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShopCartContext.Provider>
  )
}
