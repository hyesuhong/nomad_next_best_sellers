import { ApiResult } from '@/types/api';
import { CategoryDetail } from '@/types/book';
import Image from 'next/image';
import styles from './page.module.css';

const BASE_URL = 'https://books-api.nomadcoders.workers.dev/list';

const getBooksByCategory = async (
	category: string
): Promise<ApiResult<CategoryDetail>> => {
	const url = `${BASE_URL}?name=${category}`;

	const response = await fetch(url);
	const data = await response.json();
	return data;
};

interface BookCategoryProps {
	params: Promise<{ slug: string }>;
}

export default async function BookCategory({ params }: BookCategoryProps) {
	const { slug } = await params;
	const data = await getBooksByCategory(slug);

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h3 className={styles.category_name}>{data.results.display_name}</h3>
				<div className={styles.table_wrapper}>
					{data.results.books.map((book) => (
						<div key={book.primary_isbn13} className={styles.table_row}>
							<div
								className={`glegoo ${styles.table_cell} ${styles.table_cell_rank}`}
							>
								{book.rank}
							</div>
							<div className={`${styles.table_cell} ${styles.table_cell_img}`}>
								<Image
									src={book.book_image}
									alt={book.title}
									width={book.book_image_width}
									height={book.book_image_height}
								/>
							</div>
							<div className={`${styles.table_cell} ${styles.table_cell_text}`}>
								<h4>{book.title}</h4>
								<p>{book.author}</p>
								<p>- {book.description}</p>
							</div>
							<div
								className={`${styles.table_cell} ${styles.table_cell_button}`}
							>
								<button>Buy</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
