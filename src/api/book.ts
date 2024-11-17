import { ApiResult } from '@/types/api';
import { BookCategory, CategoryDetail } from '@/types/book';

const BASE_URL = 'https://books-api.nomadcoders.workers.dev';

export const getCategories = async (): Promise<ApiResult<BookCategory[]>> => {
	const targetUrl = `${BASE_URL}/lists`;

	const response = await fetch(targetUrl);
	if (!response.ok) {
		throw new Error('Fetch error');
	}

	const data = await response.json();

	if (data.status === 'ERROR') {
		throw new Error('Fetching categories was failed.');
	}
	return data;
};

export const getBooksByCategory = async (
	category: string
): Promise<ApiResult<CategoryDetail>> => {
	const targetUrl = `${BASE_URL}/list?name=${category}`;

	const response = await fetch(targetUrl);
	if (!response.ok) {
		throw new Error('Fetch error');
	}

	const data = await response.json();

	if (data.status === 'ERROR') {
		throw new Error('Fetching books list was failed.');
	}
	return data;
};
