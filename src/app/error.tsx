'use client';

import buttonStyles from '@/styles/components/button-shape.module.css';
import styles from '@/styles/pages/error-page.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.error_title}>Something went wrong!</h3>
			<p className={styles.error_message}>{error.message}</p>
			<div className={styles.button_wrapper}>
				<Link href='/' className={buttonStyles.button}>
					Go to Main
				</Link>
				<button className={buttonStyles.button} onClick={() => reset()}>
					Try again
				</button>
			</div>
		</div>
	);
}
