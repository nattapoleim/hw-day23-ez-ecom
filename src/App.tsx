import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { products } from './data/products'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Product from './pages/Product'
import { ProductType } from './utils/cartType'
import ScrollToTop from './utils/ScrollToTop'

function App() {
   const [myCart, setMyCart] = useState<ProductType[]>([])
   const [cartUpdated, setCartUpdated] = useState<number>(0)

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
         {/* <Outlet context={{ setCartUpdated }} /> */}
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product/:id' element={<Product setCartUpdated={setCartUpdated} />} />
         </Routes>
         <Footer />
      </main>
   )
}

export default App
