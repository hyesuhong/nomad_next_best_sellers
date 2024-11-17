'use client';

import { Book } from '@/types/book';
import { ChangeEvent, useState } from 'react';
import GridView from './grid-view/grid-view';
import ListView from './list-view/list-view';
import SelectViewType from './select-view-type/select-view-type';

interface BooksLayoutProps {
	data: Book[];
}

export default function BooksLayout({ data }: BooksLayoutProps) {
	const [viewType, setViewType] = useState<'list' | 'grid'>('list');

	const onViewTypeChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = ev;
		if (value === 'list' || value === 'grid') {
			setViewType(value);
		}
	};

	return (
		<>
			<SelectViewType currentType={viewType} changeHandler={onViewTypeChange} />
			{viewType === 'list' ? (
				<ListView data={data} />
			) : (
				<GridView data={data} />
			)}
		</>
	);
}
