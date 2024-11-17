import { Book } from '@/types/book';
import Image from 'next/image';
import styles from './list-view.module.css';

interface ListViewProps {
	data: Book[];
	// styles: { [key: string]: string };
}

export default function ListView({ data }: ListViewProps) {
	return (
		<div className={styles.table_wrapper}>
			{data.map((book) => (
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
					<div className={`${styles.table_cell} ${styles.table_cell_button}`}>
						<button>Buy</button>
					</div>
				</div>
			))}
		</div>
	);
}
