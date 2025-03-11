import React, { useEffect, useReducer, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "@/components/ui/Pagination"; // Assuming you have a Pagination component
import { Icon } from "@iconify/react";
import Button from "../Button";

const Table = ({
  columns,
  data,
  searchColumn, // Default to a column (like username)
  dynamicPagination = false,
  totalPages = 1,
  currentPage = 1,
  handlePageChange,
  globalFilter = false, // If you want to use global filter or not
  onChangeGlobalFilter,
  handleItemChanges,
  selecteRow,
  ...props
}) => {
  const [columnFilters, setColumnFilters] = useState([]); // For individual column filters
  const [globalFilterValue, setGlobalFilterValue] = useState(""); // For global search
  const [rowSelection, setRowSelection] = useState({}); // For row selection state
  const [sorting, setSorting] = useState([]); // For sorting state
  const rerender = useReducer(() => ({}), {})[1];

  // Initialize the table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters, // Track column filters
      globalFilter: globalFilterValue, // Track global filter value
      rowSelection, // Track selected rows
      sorting, // Track sorting state
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // For column filtering
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection, // Updates row selection state
    getRowId: (row) => row.id, // Ensure each row has a unique id
    enableRowSelection: true, // Enable row selection feature
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const taskName =
    columnFilters.find((f) => f.id === searchColumn)?.value || globalFilterValue;

  // Handle column-specific filtering
  const onFilterChange = (id, value) => {
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );
  };

  // Handle row selection
  useEffect(() => {
    if (selecteRow) {
      selecteRow(rowSelection); // Pass selected rows to parent if needed
    }
  }, [rowSelection]);

  return (
    <>
      
      {searchColumn && 
        <div className="flex items-center justify-between mb-4">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              value={taskName}
              onChange={(e) => {
                globalFilter
                  ? (onChangeGlobalFilter(e.target.value),
                    setGlobalFilterValue(e.target.value))
                  : onFilterChange(searchColumn, e.target.value);
              }}
            />
          </div>
          <div>{props.customActionButton}</div>
        </div>
      }
      {data?.length > 0 ? (
          <div className="relative w-full overflow-x-auto rounded-lg sm:rounded-lg bg-white border shadow-lg">
            <div className="inline-block w-full">
              <div className="relative">
                <div className="overflow-auto">
                  <table className="w-full text-sm text-left text-gray-500 border-collapse">
                    <thead className="bg-blue-100">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header, i) => {
                            return (
                              <th
                                key={header.id}
                                colSpan={header.colSpan}
                                className={`px-3 py-3 text-left text-base  text-black-700 uppercase tracking-wider ${
                                  header.column.getCanSort() ? 'cursor-pointer' : ''
                                } ${i <= 1 ? 'w-20' : ''}`}
                              >
                                {header.isPlaceholder ? null : (
                                  <div
                                    className="flex items-center justify-start"
                                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                                  >
                                    <span>{flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}</span>
                                    {header.column.getCanSort() && (
                                      <span className="inline-flex flex-col ml-2">
                                        <Icon 
                                          icon="mynaui:chevron-up-solid" 
                                          className={`w-4 h-4 -mb-2 hover:text-blue-600 ${
                                            header.column.getIsSorted() === "asc"
                                              ? "text-blue-600"
                                              : "text-gray-400"
                                          }`}
                                        />
                                        <Icon 
                                          icon="mynaui:chevron-down-solid" 
                                          className={`w-4 h-4 hover:text-blue-600${
                                            header.column.getIsSorted() === "desc"
                                              ? "text-blue-600"
                                              : "text-gray-400"
                                          }`}
                                        />
                                      </span>
                                    )}
                                  </div>
                                )}
                              </th>
                            );
                          })}
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {table.getRowModel().rows.map((row) => {
                        return (
                          <tr
                            key={`r_${row.id}`}
                            className={`${
                              row.getIsSelected()
                                ? "bg-blue-50 hover:bg-blue-100"
                                : "hover:bg-slate-50"
                            } transition-colors duration-200`}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <td
                                key={cell.id}
                                className="px-3 py-5 text-base"
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div className="py-4 px-4 w-full rounded-md text-center bg-gray-200 text-lg">
          No data found!
        </div>
      )}
      {!dynamicPagination && data?.length > 0 ? (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
          {/* Total rows count */}
          <div className="flex-1 text-sm text-gray-700">
            {`1-${table.getRowModel().rows.length} of ${data.length}`}
          </div>

          {/* Page buttons */}
          <div className="flex-1 flex justify-center">
            <nav className="relative z-0 inline-flex -space-x-px gap-5 flex-wrap">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className={`relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium ${
                  !table.getCanPreviousPage()
                    ? 'text-gray-300'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
              </button>

              {/* Page numbers */}
              {Array.from(
                { length: table.getPageCount() },
                (_, i) => i + 1
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => table.setPageIndex(pageNumber - 1)}
                  className={`relative inline-flex items-center rounded-full px-4 py-2 border ${
                    table.getState().pagination.pageIndex === pageNumber - 1
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  } text-sm font-medium`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className={`relative inline-flex items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium ${
                  !table.getCanNextPage()
                    ? 'text-gray-300'
                    : 'text-gray-500 hover:bg-gray-50'
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
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value));
              }}
              className="border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
      data?.length > 0 &&  <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
      
    </>
  );
};

export default Table;

function extractDynamicValues(data, key) {
  return Array.from(
    new Set(
      data.flatMap(item =>
        Array.isArray(item[key]) ? item[key] : [item[key]]
      )
    )
  );
}

function Filter({ column, data }) {
  const columnFilterValue = column.getFilterValue()
  const { filterVariant, searchType, dataType } = column.columnDef.meta ?? {}
  const extractedValues = extractDynamicValues(data, searchType, dataType);
  return filterVariant === 'select' ? (
    <select
      className="border text-sm rounded-md w-full max-w-[300px] react-select-container min-h-[40px] p-2 mt-2"
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">All</option>
      {extractedValues.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </select>
  ) : ""  
}
