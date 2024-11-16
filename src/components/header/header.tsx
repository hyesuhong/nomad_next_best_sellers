'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
	const path = usePathname();

	const getLinkClassName = (targetPath: string) => {
		return `${styles.link} ${path === targetPath ? styles.active : ''}`;
	};

	return (
		<header className={styles.header}>
			<h1 className={`glegoo ${styles.header_title}`}>
				The New York Times Best Sellers
			</h1>
			<nav className={styles.nav}>
				<span className={styles.link_wrapper}>
					<Link href='/' className={getLinkClassName('/')}>
						Home
					</Link>
				</span>
				<span className={styles.link_wrapper}>
					<Link href='/about' className={getLinkClassName('/about')}>
						About
					</Link>
				</span>
			</nav>
		</header>
	);
}
