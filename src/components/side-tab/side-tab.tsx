import styles from './side-tab.module.css';

interface SideTabProps {
	items: { label: string; id: string }[];
	activeItemId: string;
	itemClickHandler: (id: string) => void;
}

export default function SideTab({
	items,
	activeItemId,
	itemClickHandler,
}: SideTabProps) {
	return (
		<ul className={styles.tab_list}>
			{items.map((item) => (
				<li
					key={item.id}
					className={`${styles.tab_item} ${
						activeItemId === item.id ? styles.active : ''
					}`}
					onClick={() => itemClickHandler(item.id)}
				>
					{item.label}
				</li>
			))}
		</ul>
	);
}
