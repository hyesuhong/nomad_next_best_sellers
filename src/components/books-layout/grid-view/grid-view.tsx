import { Book } from '@/types/book';
import Image from 'next/image';
import styles from './grid-view.module.css';

interface GridViewProps {
	data: Book[];
}

export default function GridView({ data }: GridViewProps) {
	return (
		<div className={styles.grid_wrapper}>
			{data.map((book) => (
				<dl key={book.primary_isbn13} className={styles.card}>
					<dt>
						<Image
							src={book.book_image}
							alt={book.title}
							width={book.book_image_width}
							height={book.book_image_height}
						/>
					</dt>
					<dd className={styles.info_wrapper}>
						<h4 className={styles.book_title}>{book.title}</h4>
						<p className={styles.book_author}>{book.author}</p>
						<p className={styles.book_description}>{book.description}</p>
						<button className={styles.buy_button}>Buy</button>
					</dd>
				</dl>
			))}
		</div>
	);
}
