import Image from 'next/image'

import { ThemeToggle } from '@/components/shared/theme-toggle'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header className='fixed left-0 right-0 flex justify-between px-6 py-4'>
				<Image
					src='https://jtr6vvwzqvphjthn.public.blob.vercel-storage.com/logo.png'
					alt='MediCare logo'
					priority
					width={56}
					height={56}
				/>

				<ThemeToggle />
			</header>

			<main className='h-dvh'>{children}</main>
		</>
	)
}

export default AuthLayout
