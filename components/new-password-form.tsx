import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	restorePasswordStep3Data,
	restorePasswordStep3Schema
} from '@/lib/validation/restore-password-schema'

import FormInput from './shared/form-input'
import { Button } from './ui/button'

const NewPasswordForm = () => {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<restorePasswordStep3Data>({
		resolver: zodResolver(restorePasswordStep3Schema)
	})

	const onSubmit: SubmitHandler<restorePasswordStep3Data> = async data => {
		console.log('data ==>', data)
		push('/login')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid'>
			<h1 className='mb-4 text-pretty text-center text-2xl font-bold'>
				Set new password
			</h1>
			<p className='mb-7 text-balance text-center text-base font-medium'>
				Please enter your new password
			</p>

			<div className='mb-4 grid gap-4'>
				<FormInput
					type='password'
					label='new password'
					register={register('password')}
					error={errors.password?.message}
					placeholder='New password'
				/>
				<FormInput
					type='password'
					label='repeat password'
					register={register('confirm_password')}
					error={errors.confirm_password?.message}
					placeholder='Repeat password'
				/>
			</div>

			<Button
				disabled={isSubmitting}
				type='submit'
				className='mb-3 w-full rounded-lg bg-indigo-500 text-base font-bold disabled:pointer-events-none disabled:opacity-40'
			>
				{isSubmitting ? 'Submitting...' : 'Set and login'}
			</Button>

			<Link href='/login' className='justify-self-end py-2 text-sm'>
				Back to
				<span className='ml-1 font-semibold text-indigo-500'>Login</span>
			</Link>
		</form>
	)
}

export default NewPasswordForm
