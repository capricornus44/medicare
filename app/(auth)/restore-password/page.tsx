'use client'
import { useSearchParams } from 'next/navigation'

import NewPasswordForm from '@/components/new-password-form'
import RestorePasswordForm from '@/components/restore-password-form'
import SendOtpForm from '@/components/send-otp-form'

export default function RestorePassword() {
	const searchParams = useSearchParams()
	const step = searchParams.get('step')

	return (
		<section className='container flex h-full flex-col justify-center'>
			{step === '1' ? (
				<RestorePasswordForm />
			) : step === '2' ? (
				<SendOtpForm />
			) : (
				<NewPasswordForm />
			)}
		</section>
	)
}
