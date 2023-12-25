import bcrypt from 'bcryptjs'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

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

export const excludeFields = (
	object: Record<string, any>,
	keys: string[]
): Record<string, any> => {
	const updatedObject = { ...object }

	for (const key of keys) {
		delete updatedObject[key]
	}

	return updatedObject
}
