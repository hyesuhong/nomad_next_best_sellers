import { Glegoo, Roboto } from 'next/font/google';

export const glegoo = Glegoo({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	variable: '--font-glegoo',
});

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	variable: '--font-roboto',
});
