// import { createContext, useState } from "react"


// export const CartContext = createContext(null)

// export const CartProvider= ({children}) =>{

//     const [cart,setCart] = useState ([])

//     return(
//        <CartContext.Provider value={[cart,setCart]}>
//             {children}
//        </CartContext.Provider>
//     )
// }

import { createContext, useState } from "react"

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  if (cart === null || setCart === null) {
    // Evitar la iteración cuando el contexto sea null
    return null
  }

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}