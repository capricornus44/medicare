import LoginForm from '@/components/login-form'

export default function Login() {
	return (
		<section className='container flex h-full flex-col justify-center'>
			<h1 className='mb-4 text-pretty text-center text-3xl font-extrabold'>
				Welcome to MediCare
			</h1>
			<p className='mb-7 text-balance text-center text-base font-medium'>
				We happy to see you! To use your account you should log in first
			</p>

			<LoginForm />
		</section>
	)
}
