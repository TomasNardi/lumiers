import { useContext, useState } from "react"
import { ShopCartContext } from "../context/shopcart"
import { BsBag } from "react-icons/bs"
import ResumeShop from "./resumeshop"

const CartShop = () => {
  const context = useContext(ShopCartContext)
  if (!context) return null

  const { cartQuantity } = context
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowPopUp(prev => !prev)}
        className="
          fixed bottom-4 right-4
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-neutral-900 text-white shadow-xl
          cursor-pointer
          
        "
      >
        <BsBag size={22} />

        {cartQuantity > 0 && (
          <span className="
            absolute -top-1 -right-1
            w-5 h-5 rounded-full
            bg-red-600 text-xs font-bold
            flex items-center justify-center
          ">
            {cartQuantity}
          </span>
        )}
      </button>

      <ResumeShop
        open={showPopUp}
        onClose={() => setShowPopUp(false)}
      />
    </>
  )
}

export default CartShop
