import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function PaginationTwo() {
   

  return (
    <div className="pagination-first">
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</div>

  );
}