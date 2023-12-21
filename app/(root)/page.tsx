'use client'

import { useForm } from 'react-hook-form'

export default function Home() {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				password: data.password
			})
		})
	}

	return (
		<main>
			<section>
				<h1 className='text-2xl font-bold'>Home page</h1>

				<form onSubmit={handleSubmit(onSubmit)}>
					<input type='text' {...register('name')} placeholder='Name' />
					<br />
					<br />
					<input type='email' {...register('email')} placeholder='Email' />
					<br />
					<br />
					<input
						type='password'
						{...register('password')}
						placeholder='Password'
					/>
					<br />
					<br />
					<button type='submit'>Submit</button>
				</form>
			</section>
		</main>
	)
}
