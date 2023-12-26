import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCwIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	restorePasswordStep2Data,
	restorePasswordStep2Schema
} from '@/lib/validation/restore-password-schema'

import FormInput from './shared/form-input'
import { Button } from './ui/button'

const SendOtpForm = () => {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<restorePasswordStep2Data>({
		resolver: zodResolver(restorePasswordStep2Schema)
	})

	const onSubmit: SubmitHandler<restorePasswordStep2Data> = async data => {
		console.log('data ==>', data)
		push('/restore-password?step=3')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid'>
			<h1 className='mb-4 text-pretty text-center text-2xl font-bold'>
				Check your email
			</h1>
			<p className='mb-7 text-balance text-center text-base font-medium'>
				We emailed a confirmation code with 4 numbers to user.email@gmail.com
			</p>

			<FormInput
				type='text'
				label='OTP'
				register={register('otp')}
				error={errors.otp?.message}
				placeholder='Enter OTP'
			/>

			<Button
				variant='ghost'
				className='mx-auto my-4 flex items-center justify-center gap-2 bg-transparent p-0 text-base'
			>
				Resend code <RotateCwIcon className='text-amber-500' />
			</Button>

			<Button
				disabled={isSubmitting}
				type='submit'
				className='mb-3 w-full rounded-lg bg-indigo-500 text-base font-bold disabled:pointer-events-none disabled:opacity-40'
			>
				{isSubmitting ? 'Submitting...' : 'Verify'}
			</Button>

			<Link href='/login' className='justify-self-end py-2 text-sm'>
				Back to
				<span className='ml-1 font-semibold text-indigo-500'>Login</span>
			</Link>
		</form>
	)
}

export default SendOtpForm
