import { IcoGrid, IcoList } from '@/assets/icons';
import styles from '@/styles/components/books-layout.module.css';
import { ChangeEvent, useId } from 'react';

interface SelectViewTypeProps {
	currentType: 'grid' | 'list';
	changeHandler: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectViewType({
	currentType,
	changeHandler,
}: SelectViewTypeProps) {
	const listInputId = useId();
	const gridInputId = useId();

	return (
		<div className={styles.select_container}>
			<span className={styles.radio_wrapper}>
				<input
					type='radio'
					name='view-type'
					value='list'
					id={listInputId}
					checked={currentType === 'list'}
					onChange={changeHandler}
				/>
				<label htmlFor={listInputId}>
					<IcoList />
				</label>
			</span>
			<span className={styles.radio_wrapper}>
				<input
					type='radio'
					name='view-type'
					value='grid'
					id={gridInputId}
					checked={currentType === 'grid'}
					onChange={changeHandler}
				/>
				<label htmlFor={gridInputId}>
					<IcoGrid />
				</label>
			</span>
		</div>
	);
}
