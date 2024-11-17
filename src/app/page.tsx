import styles from '@/styles/main_page.module.css';
import { ApiResult } from '@/types/api';
import { BookCategory } from '@/types/book';
import { getDuration, groupByDuration } from '@/utils/book';
import Link from 'next/link';

const BASE_URL = 'https://books-api.nomadcoders.workers.dev/lists';

const getBooksLists = async (): Promise<ApiResult<BookCategory[]>> => {
	const response = await fetch(BASE_URL);
	const data = await response.json();
	return data;
};

export default async function Home() {
	const booksLists = await getBooksLists();
	const grouppedList = groupByDuration(booksLists.results);

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
