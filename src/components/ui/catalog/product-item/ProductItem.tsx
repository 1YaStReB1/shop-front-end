import { Iproduct } from '@/types/product.interface'
import Image from 'next/image'
import React, {FC} from 'react'
import AddToCartButton from './AddToCartButton'

type Props = {}

const ProductItem: FC<{product: Iproduct}> = ({product}) =>{
  return (
    <div>
      <div>
        <FavoriteButton productId={product.id} />
        <AddToCartButton product={product} />
        <Image width={300} height={300} src={product.images[0]} alt={product.name}/>


      </div>
      <h3>{product.name}</h3>
      <div>{product.category.name}</div>
      <ProductRating rating={product.rating} />
      <div>{product.price}</div>
    </div>
  )
}

export default ProductItem