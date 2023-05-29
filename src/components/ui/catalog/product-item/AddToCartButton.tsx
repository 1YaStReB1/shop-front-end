import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { Iproduct } from '@/types/product.interface'
import React, { FC } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

type Props = {}

const AddToCartButton: FC<{ product: Iproduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								size: selectedSize
						  })
				}
			>
				{currentElement ? <AiFillHeart> : <AiOutlineHeart>}
			</button>
		</div>
	)
}

export default AddToCartButton
