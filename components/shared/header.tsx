'use client'

import { MenuIcon, UserCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getUserInfo } from '@/lib/actions'
import { User } from '@/types/user'

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'

import LogoutButton from './logout-button'
import { MobileMenu, NavigationMenu } from './navigation-menu'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchUserInfo = async () => {
			const verifiedUser = await getUserInfo()
			setUser(verifiedUser as User)
		}
		fetchUserInfo()
	}, [])

	return (
		<header className='sticky top-0 py-4'>
			<div className='container flex items-center justify-between'>
				<Sheet>
					<SheetTrigger className='lg:hidden'>
						<MenuIcon />
					</SheetTrigger>
					<SheetContent side='left' className='grid w-3/4 grid-rows-[auto_1fr]'>
						<SheetHeader className='border-b pb-4'>
							<UserCircle2Icon className='size-24' />
							<p className='text-left text-base font-semibold'>{user?.name}</p>
						</SheetHeader>

						<MobileMenu />

						<LogoutButton isMobile />
					</SheetContent>
				</Sheet>

				<Image
					src='https://jtr6vvwzqvphjthn.public.blob.vercel-storage.com/logo.png'
					alt='MediCare logo'
					priority
					width={56}
					height={56}
					className='hidden lg:block'
				/>

				<NavigationMenu />

				<div className='flex items-center gap-6'>
					<ThemeToggle />
					<LogoutButton />
				</div>
			</div>
		</header>
	)
}

export default Header
