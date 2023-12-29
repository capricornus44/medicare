'use server'

import { cookies } from 'next/headers'

import { verifyToken } from './auth'
import { excludeFields } from './utils'

export async function deleteAccessToken() {
	cookies().delete('accessToken')
}

export async function getUserInfo() {
	const accessToken = cookies().get('accessToken')?.value

	if (!accessToken) return null

	const user = await verifyToken(accessToken)
	return excludeFields({ ...user }, ['createdAt', 'updatedAt', 'iat', 'exp'])
}
