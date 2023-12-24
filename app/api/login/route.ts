import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import { validatePassword } from '@/lib/utils'

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
				{ error: 'Incorrect password', ok: false },
				{ status: 400 }
			)
		}

		return NextResponse.json(
			{ message: 'User has been authenticated successfully', ok: true },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
