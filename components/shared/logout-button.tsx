'use client'

import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { deleteAccessToken } from '@/lib/actions'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const LogoutButton = ({ isMobile }: { isMobile?: boolean }) => {
	const { push } = useRouter()

	const onLogout = async () => {
		await deleteAccessToken()
		push('/login')
	}

	return (
		<Button
			variant='ghost'
			className={cn('justify-start gap-4 p-0 lg:h-6 lg:w-6', {
				'inline-flex': isMobile,
				hidden: !isMobile,
				'lg:inline-flex': !isMobile
			})}
			onClick={onLogout}
		>
			<LogOutIcon />
			<span className='inline-block lg:hidden'>Log out</span>
		</Button>
	)
}

export default LogoutButton
