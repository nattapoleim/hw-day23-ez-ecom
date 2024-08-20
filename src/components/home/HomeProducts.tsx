import { Link } from 'react-router-dom'
import { products } from '../../data/products'

function HomeProducts() {
   return (
      <div className='px-4 py-20 md:px-10'>
         <div className='space-y-8 text-center'>
            <p className='text-xs md:text-sm tracking'>DISCOVER OUR BEST SELLERS</p>
            <p className='text-lg md:text-xl tracking'>SOFAS AND CORNER SOFAS</p>
         </div>
         <div className='grid items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {products.map(product => (
               <div key={product.id} className='card md:max-w-96'>
                  <figure className=''>
                     <img src={`/src/assets/products/${product.image}`} alt='product1' />
                  </figure>
                  <div className='items-center text-center card-body'>
                     <p className='text-sm tracking'>{product.name}</p>
                     <p className='text-xs tracking'>${product.price}</p>
                     <div className='mt-4 card-actions'>
                        <Link to={`/product/${product.id}`}>
                           <button className='btn-black'>Buy Now</button>
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default HomeProducts
