'use client';

import { SideTab } from '@/components/side-tab';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const tabItems = [
	{ id: 'WEEKLY', label: 'Weekly' },
	{ id: 'MONTHLY', label: 'Monthly' },
];

export default function Home() {
	const [activeTab, setActiveTab] = useState('WEEKLY');

	const onTabItemClick = (id: string) => {
		setActiveTab(id);
	};

	return (
		<main className={styles.main}>
			<aside className={styles.aside}>
				<SideTab
					items={tabItems}
					activeItemId={activeTab}
					itemClickHandler={onTabItemClick}
				/>
			</aside>
			<section className={styles.section}>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
				<Link href={`/list/id`} className={styles.book_link}>
					Combined Print & E-Book Fiction
				</Link>
			</section>
		</main>
	);
}
