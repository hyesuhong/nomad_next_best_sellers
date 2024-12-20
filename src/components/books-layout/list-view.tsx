import styles from '@/styles/components/books-layout.module.css';
import { Book } from '@/types/book';
import Image from 'next/image';

interface ListViewProps {
	data: Book[];
}

export default function ListView({ data }: ListViewProps) {
	return (
		<div className={styles.list_container}>
			{data.map((book) => (
				<div key={book.primary_isbn13} className={styles.list_row}>
					<div
						className={`glegoo ${styles.list_cell} ${styles.list_cell_center}`}
					>
						{book.rank}
					</div>
					<div className={styles.list_cell}>
						<Image
							src={book.book_image}
							alt={book.title}
							width={book.book_image_width}
							height={book.book_image_height}
							className={styles.book_cover_img}
						/>
					</div>
					<div className={`${styles.list_cell} ${styles.book_info_wrapper}`}>
						<h4 className={styles.book_title}>{book.title}</h4>
						<p className={styles.book_author}>{book.author}</p>
						<p className={styles.book_description}>{book.description}</p>
					</div>
					<div className={`${styles.list_cell} ${styles.list_cell_center}`}>
						<a
							href={book.amazon_product_url}
							target='_blank'
							className={styles.buy_button}
						>
							Buy
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
