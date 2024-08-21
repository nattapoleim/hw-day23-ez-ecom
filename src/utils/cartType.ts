export interface CartType {
   myCart: ProductType[]
   setCartUpdated: (prev: number) => void
}

export interface ProductType {
   readonly id: string
   readonly name: string
   price: number
   readonly features: string[]
   readonly dimensions: {
      readonly width: number // estimated
      readonly depth: number // estimated
      readonly height: number // estimated
   }
   image: string
}
