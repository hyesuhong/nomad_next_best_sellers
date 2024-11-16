export interface ApiResult<T> {
	copyright: string;
	num_results: number;
	results: T;
	status: string;
	last_modified?: string;
}
