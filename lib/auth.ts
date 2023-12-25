import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

export const getJWTSecret = () => {
	const secret = process.env.AUTH_SECRET_KEY

	if (!secret) {
		return NextResponse.json({ error: 'Wrong secret key', ok: false })
	}

	return new TextEncoder().encode(secret)
}

export const verifyToken = async (token: string) => {
	try {
		const { payload } = await jwtVerify(token, getJWTSecret())
		return payload
	} catch (error) {
		return null
	}
}
