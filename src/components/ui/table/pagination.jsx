import React from "react";
import { Icon } from '@iconify/react';

const PaginationComponent = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container mt-4 flex justify-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} >
            <button onClick={() => onPageChange(number)} className={`btn btn-secondary btn-md circle ${currentPage === number ? 'bg-purple-500' : ''}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;