import { IcoLoadingBlocks } from '@/assets/icons';
import styles from '@/styles/pages/loading-page.module.css';

export default function Loading() {
	return (
		<div className={styles.wrapper}>
			<IcoLoadingBlocks />
		</div>
	);
}
