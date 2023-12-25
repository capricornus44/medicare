import { SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { getJWTSecret } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { excludeFields, validatePassword } from '@/lib/utils'

export async function POST(request: Request) {
	const { email, password } = await request.json()

	try {
		const user = await prisma.user.findUnique({ where: { email } })

		if (!user) {
			return NextResponse.json(
				{ error: 'User not found', ok: false },
				{ status: 400 }
			)
		}

		const passwordMatch = await validatePassword(password, user.password)

		if (!passwordMatch) {
			return NextResponse.json(
				{ error: 'Password is wrong', ok: false },
				{ status: 400 }
			)
		}

		const payload = excludeFields(user, [
			'password',
			'created_at',
			'updated_at'
		])

		const accessToken = await new SignJWT(payload)
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setExpirationTime('24h')
			.sign(getJWTSecret())

		cookies().set('accessToken', accessToken, { maxAge: 24 * 60 * 60 })

		return NextResponse.json(
			{ message: 'User has been authenticated successfully', ok: true },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
