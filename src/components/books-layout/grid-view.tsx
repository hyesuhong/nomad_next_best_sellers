import styles from '@/styles/books-layout.module.css';
import { Book } from '@/types/book';
import Image from 'next/image';

interface GridViewProps {
	data: Book[];
}

export default function GridView({ data }: GridViewProps) {
	return (
		<div className={styles.grid_container}>
			{data.map((book) => (
				<dl key={book.primary_isbn13} className={styles.grid_card}>
					<dt>
						<Image
							src={book.book_image}
							alt={book.title}
							width={book.book_image_width}
							height={book.book_image_height}
							className={styles.book_cover_img}
						/>
					</dt>
					<dd className={styles.book_info_wrapper}>
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
