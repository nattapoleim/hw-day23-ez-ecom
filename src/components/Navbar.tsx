import { Link } from 'react-router-dom'
import { CartType } from '../utils/cartType'
import Cart from './Cart'

function Navbar({ myCart, setCartUpdated }: CartType) {
   return (
      <header className='h-16 bg-black text-light'>
         <nav className='relative flex items-center justify-center h-full'>
            <Link to='/' className='text-3xl tracking'>
               AFTER.NOON
            </Link>
            <div className='absolute right-10'>
               <Cart myCart={myCart} setCartUpdated={setCartUpdated} />
            </div>
         </nav>
      </header>
   )
}

export default Navbar
