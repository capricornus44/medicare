'use client'

import { HomeIcon, MailIcon, SearchIcon, StethoscopeIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const NavigationLinks = [
	{
		path: '/',
		label: 'Home',
		icon: <HomeIcon />
	},
	{
		path: '/doctors',
		label: 'Find a doctor',
		icon: <SearchIcon />
	},
	{
		path: '/services',
		label: 'Services',
		icon: <StethoscopeIcon />
	},
	{
		path: '/contacts',
		label: 'Contacts',
		icon: <MailIcon />
	}
]

export const MobileMenu = () => {
	const pathname = usePathname()

	return (
		<nav className='flex w-full flex-col justify-between'>
			<ul>
				{NavigationLinks.map(({ path, label, icon }) => (
					<li key={path}>
						<Link
							href={path}
							className={cn(
								'flex items-center gap-4 py-4 text-base font-medium',
								{ 'text-indigo-500': pathname === path }
							)}
						>
							{icon} {label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export const NavigationMenu = () => {
	const pathname = usePathname()

	return (
		<nav className='hidden h-full lg:block'>
			<ul className='flex items-center gap-6'>
				{NavigationLinks.map(({ path, label, icon }) => (
					<li key={path}>
						<Link
							href={path}
							className={cn('flex items-center gap-2 text-base font-medium', {
								'text-indigo-500': pathname === path
							})}
						>
							{icon} {label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
