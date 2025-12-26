export interface SearchRequest {
  query?: string;

  pageNumber: number;
  pageSize: number;

  direction?: 'ASC' | 'DESC';
  sortBy?: string;
}
