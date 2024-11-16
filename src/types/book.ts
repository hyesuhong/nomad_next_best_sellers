export const durationCode = {
	WEEKLY: 'weekly',
	MONTHLY: 'monthly',
} as const;

export type DurationKey = keyof typeof durationCode;
export type DurationValue = (typeof durationCode)[DurationKey];

export interface BookCategory {
	display_name: string;
	list_name: string;
	list_name_encoded: string;
	newest_published_date: string;
	oldest_published_date: string;
	updated: DurationKey;
}
