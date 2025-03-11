import React, { useEffect, useReducer, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "../ui/Pagination"; // Assuming you have a Pagination component

const VerticalHeaderTable = ({
  columns,
  data,
  searchColumn,
  dynamicPagination = false,
  totalPages = 1,
  currentPage = 1,
  handlePageChange,
  globalFilter = false,
  onChangeGlobalFilter,
  handleItemChanges,
  handleYearChange,
  selecteRow,
  runningFiscalYear,
  ...props
}) => {
  const [columnFilters, setColumnFilters] = useState([]); // For individual column filters
  const [globalFilterValue, setGlobalFilterValue] = useState(""); // For global search
  const [rowSelection, setRowSelection] = useState({}); // For row selection state
  const rerender = useReducer(() => ({}), {})[1];

  // Initialize the table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters, // Track column filters
      globalFilter: globalFilterValue, // Track global filter value
      rowSelection, // Track selected rows
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // For column filtering
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection, // Updates row selection state
    getRowId: (row) => row.id, // Ensure each row has a unique id
    enableRowSelection: true, // Enable row selection feature
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
      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
        <div>
          {props?.yearList && (
            <>
              <label className="mr-2 block mb-2" htmlFor="year">Select Fiscal Year:</label>
              <select
                className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  handleYearChange(e.target.value);
                }}
              >
                {props?.yearList?.map((y, i) => (
                  <option selected={runningFiscalYear === y} key={i} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
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
      </div>
      {data?.length > 0 ? (
        <div className="relative w-full overflow-x-auto rounded-lg sm:rounded-lg bg-white">
          <div className="inline-block w-full">
            <div className="relative">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left text-gray-500 border-collapse">
                    <thead className="text-xs text-blue-950 uppercase bg-white">
                        {props?.title && (
                          <tr>
                              <th className="px-3 py-3 text-[14px] whitespace-nowrap border-gray-100 text-black-900 border text-lg"
                                style={{ width: `max-content` }}
                              >
                                {props?.title}
                              </th>
                            {table.getRowModel().rows.map((row, rowIndex) => (
                              <th
                              key={`header_${row.id}_${rowIndex}`}
                              className="px-3 py-3 text-[14px] whitespace-nowrap border-gray-100 text-black-900 border"
                              style={{ width: `max-content` }}
                              >
                                {/* {`Row ${rowIndex + 1}`}  */}
                              </th>
                            ))}
                          </tr>
                        )}
                    </thead>
                  <tbody>
                    {table.getAllColumns().map((column, colIndex) => {
                      return (
                        <tr key={`column_${colIndex}`} className="odd:bg-white even:bg-gray-50">
                          <th
                            className="px-3 py-3 text-base text-[14px] border-gray-100 text-black-900 border vertical-header whitespace-nowrap"
                            style={{ width: `max-content` }}
                          >
                            {flexRender(column?.columnDef?.header, {})}
                          </th>
                          {table.getRowModel().rows.map((row, rowIndex) => (
                            <td
                              key={`cell_${row.id}_${colIndex}`}
                              className="px-3 py-3 text-base text-[14px] border-gray-100 border whitespace-nowrap"
                            >
                              {flexRender(
                                row.getVisibleCells()[colIndex]?.column.columnDef.cell,
                                row.getVisibleCells()[colIndex]?.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      )
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
        <div className="md:flex justify-between items-center">
          <div className="mt-3 text-base text-black-700">
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </div>
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1 mr-2">
                Go to page:
                <input
                  type="number"
                  min="1"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    table.setPageIndex(page);
                  }}
                  className="border p-1 rounded-md text-center w-16"
                />
              </span>
              <div className="border p-1 rounded-md mr-2">
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="inline-flex rounded-md shadow-sm mr-2"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700"
                  onClick={() => table.firstPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<<"}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {">"}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700"
                  onClick={() => table.lastPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {">>"}
                </button>
              </div>
            </div>
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
    </>
  );
};

export default VerticalHeaderTable;
