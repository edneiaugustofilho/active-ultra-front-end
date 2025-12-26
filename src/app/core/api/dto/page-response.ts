export interface PageResponse<T> {

  content?: T[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;

  pageable?: Pageable;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
}
