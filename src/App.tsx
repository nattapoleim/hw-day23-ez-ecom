import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './utils/ScrollToTop'

function App() {
   return (
      <main>
         <ScrollToTop />
         <Navbar />
         <Outlet />
         <Footer />
      </main>
   )
}

export default App
