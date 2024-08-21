import { Dispatch, SetStateAction } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { products } from '../data/products'

function Product() {
   const { id } = useParams()
   const product = products.find(p => p.id === id)
   const { setCartUpdated } = useOutletContext<{
      setCartUpdated: Dispatch<SetStateAction<number>>
   }>()

   const addToCart = () => {
      const getCart = localStorage.getItem('cart')
      const curCart = getCart ? JSON.parse(getCart) : []
      const newCart = [...curCart, id]
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCartUpdated(prev => prev + 1)
   }

   return (
      <section className='md:h-[calc(100svh-6rem)] font-light px-5 md:px-2 lg:px-10'>
         <main className='grid h-full gap-4 py-10 md:grid-cols-2'>
            <div className='overflow-hidden bg-green-300 '>
               <img
                  className='object-center w-full md:h-full'
                  src={`/src/assets/products/${product?.image}`}
                  alt={product?.name}
               />
            </div>
            <div className='flex flex-col items-start justify-end gap-8 py-10 lg:px-10'>
               <p className='text-xs tracking'>{product?.id}</p>
               <h2 className='tracking'>{product?.name}</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non dolorum
                  adipisci perferendis placeat incidunt voluptatem et commodi dolore, iste quasi
                  exercitationem laudantium cum. Debitis.
               </p>
               <div className='flex flex-col items-start w-full gap-4 sm:items-center sm:flex-row'>
                  {product?.features.map(f => (
                     <div key={f} className='text-xs badge badge-sm badge-outline'>
                        {f}
                     </div>
                  ))}
               </div>
               <p className='text-xs uppercase'>
                  dimenstions: {product?.dimensions.width} * {product?.dimensions.depth} *{' '}
                  {product?.dimensions.height}
               </p>
               <button onClick={addToCart} className='ml-auto btn-black'>
                  ADD TO CART
               </button>
            </div>
         </main>
      </section>
   )
}

export default Product
