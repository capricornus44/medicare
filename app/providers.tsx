'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

interface ProvidersProps {
	children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<Toaster richColors position='top-right' />
			{children}
		</ThemeProvider>
	)
}
