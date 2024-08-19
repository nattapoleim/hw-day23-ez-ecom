function Footer() {
   return (
      <footer>
         <section className='bg-no-repeat bg-cover bg-center h-[24rem] bg-footer flex items-center justify-center gap-5 uppercase text-white flex-col font-light'>
            <p className='text-xs tracking'>Keep updated</p>
            <p className='text-xl tracking'>SIGN UP TO OUR Newsletter</p>
            <p className='text-sm tracking'>DISCOVER NEWS, OFFERS AND MORE</p>
            <div className='flex flex-col gap-4 md:flex-row'>
               <input
                  type='text'
                  className='bg-transparent border-white rounded-none w-[26rem] input input-bordered placeholder:text-light'
                  placeholder='Enter your email'
               />

               <button className='btn-white'>subscribe</button>
            </div>
         </section>
         <section className='flex items-center justify-center h-20 text-sm uppercase bg-primary text-light tracking'>
            Nattapol Eiamsa-Ard.
         </section>
      </footer>
   )
}

export default Footer
