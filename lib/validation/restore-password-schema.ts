import z from 'zod'

export const restorePasswordStep1Schema = z.object({
	email: z.string().min(1, { message: 'Email is required' }).email({
		message: 'Must be a valid email'
	})
})

export const restorePasswordStep2Schema = z.object({
	otp: z.string().length(4, { message: 'OTP must be 4 characters' })
})

export const restorePasswordStep3Schema = z
	.object({
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(20, { message: 'Password must be maximum 20 characters' }),
		confirm_password: z
			.string()
			.min(1, { message: 'Confirm Password is required' })
	})
	.refine(data => data.password === data.confirm_password, {
		path: ['confirm_password'],
		message: "Password don't match"
	})

export type restorePasswordStep1Data = z.infer<
	typeof restorePasswordStep1Schema
>
export type restorePasswordStep2Data = z.infer<
	typeof restorePasswordStep2Schema
>
export type restorePasswordStep3Data = z.infer<
	typeof restorePasswordStep3Schema
>
