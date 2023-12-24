import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/utils'

export async function POST(request: Request) {
	const { name, email, password, role, gender } = await request.json()

	try {
		const existingUser = await prisma.user.findUnique({ where: { email } })

		if (existingUser) {
			return NextResponse.json(
				{ error: 'Email already exists', ok: false },
				{ status: 400 }
			)
		}

		const hashedPassword = await hashPassword(password)
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				role,
				gender
			}
		})

		return NextResponse.json(
			{ message: 'User has been created', ok: true },
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
