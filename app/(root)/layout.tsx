import Header from '@/components/shared/header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}

export default Layout
