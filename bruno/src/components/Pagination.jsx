import React from 'react';
import '../style/Pagination.css';

export default function Pagination({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
  const totalPages = postsPerPage > 0 ? Math.ceil(totalPosts / postsPerPage) : 0;

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const paginate = (pageNumber, e) => {
    if (e) {
      e.preventDefault();
    }
    const clampedPage = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(clampedPage);
  };

  const movePage = (direction, e) => {
    if (direction == "left") {
      paginate(currentPage - 1, e);
    }

    if (direction === "right") {
      paginate(currentPage + 1, e);
    }
  }



  return (
    <nav>
      <ul className="pagination">
        <li className={`previous-arrow ${currentPage <= 1 ? 'disabled' : ''}`}>
          <a onClick={(e) => movePage("left", e)} href="!#">
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
            <a onClick={(e) => paginate(number, e)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className={`next-arrow ${currentPage >= totalPages ? 'disabled' : ''}`}>
          <a onClick={(e) => movePage("right", e)} href="!#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}