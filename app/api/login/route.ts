import { sql } from '@vercel/postgres'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { email, password } = await request.json()

	try {
		const { rows: users } =
			await sql`SELECT * FROM Users WHERE email = ${email} AND password = ${password};`

		if (users.length === 0) {
			return NextResponse.json(
				{ error: 'Invalid credentials', ok: false },
				{ status: 401 }
			)
		}

		cookies().set('access-token', 'my-token', {
			maxAge: 300
		})

		return NextResponse.json(
			{ message: 'User has been authenticated successfully', ok: true },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
