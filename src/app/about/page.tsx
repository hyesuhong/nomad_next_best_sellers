import styles from '@/styles/pages/about-page.module.css';

export default function About() {
	return (
		<section className={styles.section}>
			<h3>About us</h3>
			<p>
				Welcome to the official explorer for The New York Times Best Sellers
				lists.
				<br />
				We hope you enjoy your stay!
			</p>
		</section>
	);
}
