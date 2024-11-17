import { getBooksByCategory } from '@/api/book';
import BooksLayout from '@/components/books-layout';
import styles from '@/styles/pages/book-list-page.module.css';

interface BookCategoryProps {
	params: Promise<{ slug: string }>;
}

export default async function BookCategory({ params }: BookCategoryProps) {
	const { slug } = await params;
	const data = await getBooksByCategory(slug);

	return (
		<section className={styles.section}>
			<h3 className={styles.category_name}>{data.results.display_name}</h3>
			<BooksLayout data={data.results.books} />
		</section>
	);
}
