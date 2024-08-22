import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface CheckoutForm {
   fullName: string
   email: string
   phone: string
   address: string
   subDistrict: string
   district: string
   province: string
   zipCode: string
}

function Checkout() {
   const { register, handleSubmit } = useForm<CheckoutForm>()

   const onSubmit = (data: CheckoutForm) => {
      console.log(data)
   }

   return (
      <section className='min-h-[calc(100svh-4rem)] md:h-[calc(100svh-4rem)]'>
         <main className='grid h-full grid-cols-2 divide-x'>
            <div className='p-10'>
               <h1 className='text-3xl'>Checkout</h1>
               <p className='mt-6 font-medium'>Shipping Infomation</p>
               <form className='mt-2 space-y-2' onSubmit={handleSubmit(onSubmit)}>
                  <label className='w-full form-control'>
                     <div className='label'>
                        <span className='label-text'>
                           Full Name <span className='text-red-500'>*</span>
                        </span>
                     </div>
                     <input
                        type='text'
                        placeholder='Enter Full Name'
                        className='w-full input input-bordered input-md'
                        required
                        {...register('fullName')}
                     />
                  </label>
                  <div className='flex gap-2'>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              Email Address <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='email'
                           placeholder='Enter Email Address'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('email')}
                        />
                     </label>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              Phone Number <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='tel'
                           pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                           placeholder='Enter Phone Number'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('phone')}
                        />
                     </label>
                  </div>
                  <label className='w-full form-control'>
                     <div className='label'>
                        <span className='label-text'>
                           Address <span className='text-red-500'>*</span>
                        </span>
                     </div>
                     <input
                        type='text'
                        placeholder='Enter Address'
                        className='w-full input input-bordered input-md'
                        required
                        {...register('address')}
                     />
                  </label>
                  <div className='flex gap-2'>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              Sub District <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='text'
                           placeholder='Enter SubDistrict'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('subDistrict')}
                        />
                     </label>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              District <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='text'
                           placeholder='Enter District'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('district')}
                        />
                     </label>
                  </div>
                  <div className='flex gap-2'>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              Province <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='text'
                           placeholder='Enter Province'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('province')}
                        />
                     </label>
                     <label className='w-full form-control'>
                        <div className='label'>
                           <span className='label-text'>
                              Zip Code <span className='text-red-500'>*</span>
                           </span>
                        </div>
                        <input
                           type='text'
                           placeholder='Enter Zip Code'
                           className='w-full input input-bordered input-md'
                           required
                           {...register('zipCode')}
                        />
                     </label>
                  </div>
               </form>
               <Link to='/' className='mt-4 btn btn-outline'>
                  Back
               </Link>
            </div>
            <div className='p-10 bg-light'>
               <h1 className='text-3xl'>Cart</h1>
               <p className='mt-6 font-medium'>Review your cart</p>
               <div className='flex flex-col gap-4 mt-4'>
                  <div className='flex gap-4'>
                     <div className='overflow-hidden rounded-md size-20'>
                        <img
                           src='/src/assets/products/product1.png'
                           alt=''
                           className='object-center w-full'
                        />
                     </div>
                     <div className='flex flex-col justify-between'>
                        <div className='font-light'>
                           <p className='text-sm'>Product Name</p>
                           <p className='text-xs text-primary/50'>1x</p>
                        </div>
                        <p>xx</p>
                     </div>
                  </div>
               </div>

               <div className='flex items-center justify-between mt-4'>
                  <input
                     type='text'
                     placeholder='Enter Coupon'
                     className='w-1/2 input input-bordered input-md'
                  />
               </div>
               <button className='w-3/4 mt-10 btn btn-black'>Pay Now</button>
            </div>
         </main>
      </section>
   )
}

export default Checkout
