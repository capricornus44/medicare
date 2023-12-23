import RegisterForm from '@/components/register-form'

export default function Register() {
	return (
		<section className='container flex h-full flex-col justify-center'>
			<h1 className='mb-4 text-pretty text-center text-3xl font-extrabold'>
				Welcome to MediCare
			</h1>

			<RegisterForm />
		</section>
	)
}
