import z from 'zod'

export const registerSchema = z.object({
	name: z.string({
		required_error: 'Name is required'
	}),
	email: z
		.string({
			required_error: 'Email is required'
		})
		.email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(20, { message: 'Password must be maximum 20 characters' }),
	role: z.enum(['patient', 'doctor']),
	gender: z.enum(['male', 'female', 'other'])
})

export type RegisterData = z.infer<typeof registerSchema>
