import Hero from '../components/home/Hero'
import HomeProducts from '../components/home/HomeProducts'

function Home() {
   return (
      <section className='min-h-screen font-light uppercase bg-white'>
         <Hero />
         <HomeProducts />
      </section>
   )
}

export default Home
