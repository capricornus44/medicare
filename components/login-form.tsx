'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginData, loginSchema } from '@/lib/validation/login-schema'

import FormInput from './shared/form-input'
import { Button } from './ui/button'

const LoginForm = () => {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<LoginData>({
		resolver: zodResolver(loginSchema)
	})

	const onSubmit: SubmitHandler<LoginData> = async data => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: data.email,
				password: data.password
			})
		})

		const user = await response.json()

		if (!user.ok) {
			return toast.error(user.error)
		}

		toast.success(user.message)
		push('/')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid'>
			<div className='mb-2 grid gap-4'>
				<FormInput
					type='email'
					label='email address'
					register={register('email')}
					error={errors.email?.message}
					placeholder='john.smith@gmail.com'
				/>
				<FormInput
					type='password'
					label='password'
					register={register('password')}
					error={errors.password?.message}
					placeholder='Enter password'
				/>
			</div>

			<Link
				href='/restore-password?step=1'
				className='mb-4 justify-self-end text-sm text-indigo-500'
			>
				Forgot your password?
			</Link>

			<Button
				disabled={isSubmitting}
				type='submit'
				className='mb-3 w-full rounded-lg bg-indigo-500 text-base font-bold disabled:pointer-events-none disabled:opacity-40'
			>
				{isSubmitting ? 'Submitting...' : 'Log in'}
			</Button>

			<Link href='/register' className='flex justify-center py-2 text-sm'>
				Don't have an account?
				<span className='ml-1 font-semibold text-indigo-500'>Register</span>
			</Link>
		</form>
	)
}

export default LoginForm
