import { ChangeEvent, useId } from 'react';
import styles from '../books-layout.module.css';

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
					<svg
						strokeWidth='1.5'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						color='currentColor'
					>
						<path
							d='M3 12H7.5H12H16.5H21M3 12V16.5M3 12V7.5M21 12V16.5M21 12V7.5M3 16.5V20.4C3 20.7314 3.26863 21 3.6 21H7.5H12H16.5H20.4C20.7314 21 21 20.7314 21 20.4V16.5M3 16.5H7.5H12H16.5H21M21 7.5V3.6C21 3.26863 20.7314 3 20.4 3H16.5H12H7.5H3.6C3.26863 3 3 3.26863 3 3.6V7.5M21 7.5H16.5H12H7.5H3'
							stroke='currentColor'
							strokeWidth='1.5'
						></path>
					</svg>
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
					<svg
						strokeWidth='1.5'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						color='currentColor'
					>
						<path
							d='M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z'
							stroke='currentColor'
							strokeWidth='1.5'
						></path>
						<path
							d='M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z'
							stroke='currentColor'
							strokeWidth='1.5'
						></path>
						<path
							d='M14 9.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z'
							stroke='currentColor'
							strokeWidth='1.5'
						></path>
						<path
							d='M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V9.4C10 9.73137 9.73137 10 9.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z'
							stroke='currentColor'
							strokeWidth='1.5'
						></path>
					</svg>
				</label>
			</span>
		</div>
	);
}
