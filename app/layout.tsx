import './globals.css'
import { poppins } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Medicare',
	description: 'Application for doctor appointment',
	icons: {
		icon: [
			{
				url: '/images/favicon.png',
				href: '/images/favicon.png'
			}
		]
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					poppins.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
