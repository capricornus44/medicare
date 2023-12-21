import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const { name, email, password } = await request.json()

	try {
		await sql`CREATE TABLE IF NOT EXISTS Users (user_id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255) );`

		await sql`INSERT INTO Users (name, email, password) VALUES (${name}, ${email}, ${password});`
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}

	return NextResponse.json(
		{ message: 'User has been created' },
		{ status: 201 }
	)
}
