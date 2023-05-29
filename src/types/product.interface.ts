import { ICategory } from "./category.interface"
import { IReview } from "./review.interface"


export interface Iproduct {
  id: number
  name: string
  slug: string
  description: string 
  price: number
  reviews: IReview[]
  images: string[]
  createdAt: string
  category: ICategory
}

export interface IProductDetails {
  product: Iproduct
}