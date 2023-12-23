'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { RegisterData, registerSchema } from '@/lib/validation/register-schema'
import { Gender, Role } from '@/public/data'

import FormInput from './shared/form-input'
import FormSelect from './shared/form-select'
import { Button } from './ui/button'

const RegisterForm = () => {
	const { push } = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<RegisterData>({
		resolver: zodResolver(registerSchema)
	})

	const onSubmit: SubmitHandler<RegisterData> = async data => {
		const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				password: data.password,
				role: data.role,
				gender: data.gender
			})
		})
		const user = await response.json()
		if (!user.ok) {
			return toast.error(user.error)
		}
		toast.success(user.message)
		push('/login')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-4 grid gap-4'>
				<FormInput
					label='Name'
					register={register('name')}
					error={errors.name?.message}
					placeholder='Your name'
				/>
				<FormInput
					type='email'
					label='email address'
					register={register('email')}
					error={errors.email?.message}
					placeholder='name@gmail.com'
				/>
				<FormInput
					type='password'
					label='password'
					register={register('password')}
					error={errors.password?.message}
					placeholder='Enter password'
				/>

				<div className='grid grid-cols-2 gap-3'>
					<FormSelect
						label='I am:'
						register={register('role')}
						error={errors.role?.message}
						options={Role}
					/>
					<FormSelect
						label='Gender:'
						register={register('gender')}
						error={errors.gender?.message}
						options={Gender}
					/>
				</div>
			</div>

			<Button
				disabled={isSubmitting}
				type='submit'
				className='mb-3 w-full rounded-lg bg-indigo-500 text-base font-bold disabled:pointer-events-none disabled:opacity-40'
			>
				{isSubmitting ? 'Submitting...' : 'Register'}
			</Button>

			<Link href='/login' className='flex justify-end py-2 text-sm'>
				Back to
				<span className='ml-1 font-semibold text-indigo-500'>Login</span>
			</Link>
		</form>
	)
}

export default RegisterForm
