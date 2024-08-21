import { ShoppingCart, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CartType, ProductType } from '../utils/cartType'

function Cart({ myCart, setCartUpdated }: CartType) {
   const removeItem = (id: string, index: number) => {
      const getCart = localStorage.getItem('cart')
      const curCart = getCart ? JSON.parse(getCart) : []
      const newCart = curCart.filter((p: ProductType, idx: number) => p.id !== id && idx !== index)
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCartUpdated(prev => prev + 1)
   }

   return (
      <div className='z-10 drawer drawer-end'>
         <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
         <div className='drawer-content'>
            {/* Page content here */}
            <label
               htmlFor='my-drawer-4'
               className='drawer-button btn btn-square btn-ghost text-light'
            >
               <ShoppingCart className='size-5' />
            </label>
         </div>
         <div className='drawer-side'>
            <label
               htmlFor='my-drawer-4'
               aria-label='close sidebar'
               className='drawer-overlay'
            ></label>
            <label
               htmlFor='my-drawer-4'
               aria-label='close sidebar'
               className='absolute z-40 btn btn-ghost top-4 right-4'
            >
               <X className='size-4 text-primary' />
            </label>
            <div className='menu bg-light text-primary min-h-full w-screen md:w-[30rem] p-4'>
               <h2 className='mt-10 text-2xl text-center uppercase tracking'>My Cart</h2>
               <div className='mt-6 space-y-4 font-light'>
                  {myCart?.map((item, index) => (
                     <article
                        key={item.id}
                        className='flex flex-row items-center justify-between gap-2'
                     >
                        <div className='p-0 overflow-hidden rounded-none size-20'>
                           <img
                              src={`/src/assets/products/${item.image}`}
                              alt='product'
                              className='object-cover object-center w-full'
                           />
                        </div>
                        <div className='flex items-center justify-center flex-1'>
                           <div className='w-full'>
                              <p className='text-xs'>{item.id}</p>
                              <p className=''>{item.name}</p>
                           </div>
                           <div>
                              <p>${item.price}</p>
                              <button
                                 onClick={() => removeItem(item.id, index)}
                                 className='text-xs hover:underline text-primary/60'
                              >
                                 remove
                              </button>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
               <Link to='/checkout' className='w-full mt-auto btn btn-black'>
                  CHECK OUT
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Cart
