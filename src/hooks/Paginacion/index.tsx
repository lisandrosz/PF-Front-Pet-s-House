import { useState } from 'react';

function usePagination(data: any[], itemsPerPage: number): any {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData(): any[] {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next(): void {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev(): void {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, maxPage));
  }

  function jump(page: number): void {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { currentData, next, prev, jump, currentPage, maxPage };
}

export default usePagination;
