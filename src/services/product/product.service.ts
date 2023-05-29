import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'
import { Iproduct } from '@/types/product.interface'

import {
	PRODUCTS,
	TypeProductData,
	TypeProductDataFilters
} from './product.types'

export const ProductService = {
	async getAll(quertData = {} as TypeProductDataFilters) {
		return await instance<Iproduct[]>({
			url: PRODUCTS,
			method: 'GET',
			params: quertData
		})
	},

	async getSimilar(id: string | number) {
		return await instance<Iproduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await instance<Iproduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return await instance<Iproduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return await instance<Iproduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return await instance<Iproduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeProductData) {
		return await instance<Iproduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return await instance<Iproduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
