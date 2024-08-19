import Hero from '../components/home/Hero'

function Home() {
   return (
      <section className='min-h-screen font-light uppercase bg-white'>
         <Hero />
         <div className='px-4 py-20 md:px-10'>
            <div className='space-y-8 text-center'>
               <p className='text-xs md:text-sm tracking'>DISCOVER OUR BEST SELLERS</p>
               <p className='text-lg md:text-xl tracking'>SOFAS AND CORNER SOFAS</p>
            </div>
            <div className='grid items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
               {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className='card md:max-w-96'>
                     <figure className=''>
                        <img src={`/src/assets/products/product${index + 1}.png`} alt='product1' />
                     </figure>
                     <div className='items-center text-center card-body'>
                        <p className='text-sm tracking'>Hudson Click Clack Sofa Bed</p>
                        <p className='text-xs tracking'>$1895</p>
                        <div className='mt-4 card-actions'>
                           <button className='btn-black'>Buy Now</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Home
