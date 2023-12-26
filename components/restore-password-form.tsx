import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	restorePasswordStep1Data,
	restorePasswordStep1Schema
} from '@/lib/validation/restore-password-schema'

import FormInput from './shared/form-input'
import { Button } from './ui/button'

const RestorePasswordForm = () => {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<restorePasswordStep1Data>({
		resolver: zodResolver(restorePasswordStep1Schema)
	})

	const onSubmit: SubmitHandler<restorePasswordStep1Data> = async data => {
		console.log('data ==>', data)
		push('/restore-password?step=2')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid'>
			<h1 className='mb-4 text-pretty text-center text-2xl font-bold'>
				Forgot your password?
			</h1>
			<p className='mb-7 text-balance text-center text-base font-medium'>
				Please enter your email address. We will send a code to change your
				password
			</p>

			<FormInput
				type='email'
				label='email address'
				register={register('email')}
				error={errors.email?.message}
				placeholder='Enter email'
			/>

			<Button
				disabled={isSubmitting}
				type='submit'
				className='mb-3 mt-4 w-full rounded-lg bg-indigo-500 text-base font-bold disabled:pointer-events-none disabled:opacity-40'
			>
				{isSubmitting ? 'Submitting...' : 'Send code'}
			</Button>

			<Link href='/login' className='justify-self-end py-2 text-sm'>
				Back to
				<span className='ml-1 font-semibold text-indigo-500'>Login</span>
			</Link>
		</form>
	)
}

export default RestorePasswordForm
