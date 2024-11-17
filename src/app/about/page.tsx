import styles from '@/styles/about_page.module.css';

export default function About() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h3>About us</h3>
				<p>
					Welcome to the official explorer for The New York Times Best Sellers
					lists.
					<br />
					We hope you enjoy your stay!
				</p>
			</section>
		</main>
	);
}
