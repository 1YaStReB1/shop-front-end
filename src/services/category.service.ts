import { getContentType } from '@/api/api.helper'
import { instance } from '@/api/api.interceptor'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.intarface'
import { ICategory } from '@/types/category.interface'
import axios from 'axios'
import Cookies from 'js-cookie'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		return await instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},


	async create() {
		return await instance<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: {name}
		})
	},

	async delete(id: string | number) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	},


}
