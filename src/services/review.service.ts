import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return await instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: TypeData) {
		return await instance<ICategory>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
