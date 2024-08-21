import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { products } from './data/products'
import { ProductType } from './utils/cartType'
import ScrollToTop from './utils/ScrollToTop'

function App() {
   const [myCart, setMyCart] = useState<ProductType[]>([])
   const [cartUpdated, setCartUpdated] = useState(0)

   useEffect(() => {
      const getCart = localStorage.getItem('cart')
      const dummyCart = getCart ? JSON.parse(getCart) : []
      const inCart: ProductType[] = []

      if (dummyCart && dummyCart.length > 0) {
         dummyCart.forEach((id: string) => {
            const findProduct = products.find(p => p.id === id)
            if (findProduct) {
               inCart.push(findProduct)
            }
         })
         setMyCart(inCart)
      } else {
         localStorage.setItem('cart', JSON.stringify([]))
      }
   }, [cartUpdated])

   return (
      <main>
         <ScrollToTop />
         <Navbar myCart={myCart} setCartUpdated={setCartUpdated} />
         <Outlet context={{ setCartUpdated }} />
         <Footer />
      </main>
   )
}

export default App
