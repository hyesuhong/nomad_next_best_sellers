import { Glegoo } from 'next/font/google';

export const glegoo = Glegoo({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	variable: '--font-glegoo',
});
