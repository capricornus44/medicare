import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
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
