import bcrypt from 'bcryptjs'
import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

export async function hashPassword(password: string) {
	const saltRounds = 10
	const hashedPassword = await bcrypt.hash(password, saltRounds)
	return hashedPassword
}

export async function validatePassword(
	inputPassword: string,
	hashedPassword: string
) {
	const passwordMatch = await bcrypt.compare(inputPassword, hashedPassword)
	return passwordMatch
}

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
