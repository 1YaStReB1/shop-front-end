import { Iproduct } from "./product.interface"


export interface ICartItem {
  id: number
  product: Iproduct
  quantity: number
  price: number
}