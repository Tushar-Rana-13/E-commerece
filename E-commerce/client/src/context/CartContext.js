import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  // ADD TO CART
  const addToCart = (product) => {

    setCart(prev => {

      const exist = prev.find(item => item._id === product._id)

      if (exist) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id))
  }

  // CLEAR CART
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}