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
      readonly width: number
      readonly depth: number
      readonly height: number
   }
   image: string
}
