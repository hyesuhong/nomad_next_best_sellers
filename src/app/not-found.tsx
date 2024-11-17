import buttonStyles from '@/styles/components/button-shape.module.css';
import styles from '@/styles/pages/error-page.module.css';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.error_title}>Not Found</h3>
			<p className={styles.error_message}>Could not find requested resource</p>
			<Link href='/' className={buttonStyles.button}>
				Return Home
			</Link>
		</div>
	);
}
