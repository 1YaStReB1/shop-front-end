import { ICartItem } from "./cart.intarface"
import { IUser } from "./user.interface"

export enum EnumOrderStatus {
  PENDING  = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED  = 'DELIVERED'
}


export interface IOrder{
  id: number
  createdAt: string
  items: ICartItem[]
  status: EnumOrderStatus
  user: IUser

}