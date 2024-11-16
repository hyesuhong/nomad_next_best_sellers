import { BookCategory, durationCode, DurationKey } from '@/types/book';

export const getDuration = (key: DurationKey) => durationCode[key];

export const groupByDuration = (data: BookCategory[]) => {
	const grouppedList = data.reduce<Record<DurationKey, BookCategory[]>>(
		(acc, book) => {
			acc[book.updated].push(book);
			return acc;
		},
		{ WEEKLY: [], MONTHLY: [] }
	);

	return grouppedList;
};
