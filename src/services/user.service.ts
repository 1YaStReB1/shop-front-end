import { getContentType } from '@/api/api.helper'
import { instance } from '@/api/api.interceptor'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.intarface'
import { ICategory } from '@/types/category.interface'
import { IUser } from '@/types/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'

const USERS = 'categories'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		return await instance<IUser[]>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: TypeData) {
		return await instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return await instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
