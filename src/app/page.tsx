import { getCategories } from '@/api/book';
import styles from '@/styles/main_page.module.css';
import { getDuration, groupByDuration } from '@/utils/book';
import Link from 'next/link';

export default async function Home() {
	const categories = await getCategories();
	const grouppedList = groupByDuration(categories.results);

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<article className={styles.article}>
					<div className={styles.duration_title_wrapper}>
						<h4 className={styles.duration_title}>{getDuration('WEEKLY')}</h4>
					</div>
					<ul className={styles.link_list}>
						{grouppedList.WEEKLY.map((category) => (
							<li key={category.list_name_encoded}>
								<Link href={`/list/${category.list_name_encoded}`}>
									{category.display_name}
								</Link>
							</li>
						))}
					</ul>
				</article>
				<article className={styles.article}>
					<div className={styles.duration_title_wrapper}>
						<h4 className={styles.duration_title}>{getDuration('MONTHLY')}</h4>
					</div>
					<ul className={styles.link_list}>
						{grouppedList.MONTHLY.map((category) => (
							<li key={category.list_name_encoded}>
								<Link href={`/list/${category.list_name_encoded}`}>
									{category.display_name}
								</Link>
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
}
