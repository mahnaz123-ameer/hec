import React, { useState } from "react";
import ProfileGridViewCard from "./ProfileGridViewCard";
import { Icon } from "@iconify/react";
import Pagination from "../Pagination";
import ProfileGridSecondViewCard from "./ProfileGridSecondViewCard";
import ProfileGridThirdViewCard from "./ProfileGridThirdViewCard";

const GridViewWrapper = ({
  data,
  dynamicPagination,
  gridStyle,
  gridColumns,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log('gridStyle', gridStyle);
  

  return (
    <div>
      {gridStyle === "second" ? (
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
              gridColumns ? gridColumns : 4
            } gap-6`}
          >
            {currentItems.map((item, index) => (
              <ProfileGridSecondViewCard key={index} data={item} />
            ))}
          </div>
        </>
      ): gridStyle === "third" ? (
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
              gridColumns ? gridColumns : 4
            } gap-y-6 -ml-0 -mr-10`}
          >
            {currentItems.map((item, index) => (
              <ProfileGridThirdViewCard key={index} data={item} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
              gridColumns ? gridColumns : 4
            } gap-6`}
          >
            {currentItems.map((item, index) => (
              <ProfileGridViewCard key={index} data={item} />
            ))}
          </div>
        </>
      )} 

      {/* Pagination */}
      {!dynamicPagination && data?.length > 0 ? (
        <div className="flex items-center justify-between px-4 py-3 bg-white mt-4 flex-wrap">
          {/* Total rows count */}
          <div className="flex-1 text-sm text-gray-700">
            {`${indexOfFirstItem + 1}-${Math.min(
              indexOfLastItem,
              data.length
            )} of ${data.length}`}
          </div>

          {/* Page buttons */}
          <div className="flex-1 flex justify-center">
            <nav className="relative z-0 inline-flex -space-x-px gap-5 flex-wrap">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
              </button>

              {/* Page numbers */}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`relative inline-flex items-center rounded-full px-4 py-2 border ${
                    currentPage === number
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  } text-sm font-medium`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Icon icon="mdi:chevron-right" className="w-5 h-5" />
              </button>
            </nav>
          </div>

          {/* Rows per page selector */}
          <div className="flex-1 flex justify-end items-center">
            <span className="text-sm text-gray-700 mr-2">Rows per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {[10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        data?.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )
      )}
    </div>
  );
};

export default GridViewWrapper;
