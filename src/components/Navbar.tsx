import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <header className='h-24 bg-black text-light'>
         <nav className='relative flex items-center justify-center h-full'>
            <div className='text-4xl tracking'>AFTER.NOON</div>
            <div className='absolute hidden space-x-10 text-sm tracking-wider uppercase md:block right-10'>
               <Link to='/'>Home</Link>
               <Link to='/checkout'>Check Out</Link>
            </div>
         </nav>
      </header>
   )
}

export default Navbar
