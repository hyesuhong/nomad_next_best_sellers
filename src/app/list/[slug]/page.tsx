import BooksLayout from '@/components/books-layout';
import styles from '@/styles/book_list_page.module.css';
import { ApiResult } from '@/types/api';
import { CategoryDetail } from '@/types/book';

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
				<BooksLayout data={data.results.books} />
			</section>
		</main>
	);
}
