import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { name, email, password, role, gender } = await request.json()

	try {
		await sql`CREATE TABLE IF NOT EXISTS Users (user_id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), role VARCHAR(255), gender VARCHAR(255) );`

		await sql`INSERT INTO Users (name, email, password, role, gender) VALUES (${name}, ${email}, ${password}, ${role}, ${gender});`

		return NextResponse.json(
			{ message: 'User has been created', ok: true },
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
