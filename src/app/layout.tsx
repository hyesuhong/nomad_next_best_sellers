import Header from '@/components/header';
import { glegoo } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'NYT Best Sellers Explorer',
		template: '%s | NYT Best Sellers Explorer',
	},
	description: 'The New York Times Best Sellers Explorer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={glegoo.className}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
