import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import Pagination from "../ui/Pagination";


export default function NestedColumnTable(
  {
    columns, 
    data,
    dynamicPagination, 
    totalPages,
    currentPage,
    handlePageChange,
    isReactTable,
    handleItemChanges,
    ...props
  }
) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div className="relative w-full overflow-x-auto rounded-lg sm:rounded-lg  p-4 bg-white">
      <div>
        <div className="inline-block w-full">
          <div className="relative">
            <div className="overflow-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
                <thead className="text-xs text-blue-950 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {columns.map((column, index) =>
                      index <= 4 ? (
                        <th
                          key={column.accessorKey}
                          rowSpan={3}
                          className="px-3 py-3 text-[14px] whitespace-nowrap border border-gray-200 text-center"
                        >
                          {column.header}
                        </th>
                      ) : (
                        <th
                          key={column.accessorKey}
                          colSpan={column.columns.length * 2 || 2}
                          className="px-3 py-3 text-[14px] whitespace-nowrap border border-gray-200 text-center"
                        >
                          {column.header}
                        </th>
                      )
                    )}
                  </tr>
                  <tr>
                    {columns.map((column) =>
                      column.columns
                        ? column.columns.map((subColumn) => (
                            <th
                              key={subColumn.accessorKey}
                              colSpan={2}
                              className="px-3 py-3 text-[14px] whitespace-nowrap border border-gray-200 text-center"
                            >
                              {subColumn.header}
                            </th>
                          ))
                        : null
                    )}
                  </tr>
                  <tr>
                    {columns.map((column) =>
                      column.columns
                        ? column.columns.map((subColumn) => (
                            <>
                              <th
                                key={`${subColumn.accessorKey}-score`}
                                className="px-3 py-3 text-[14px] whitespace-nowrap border border-gray-200 text-center"
                              >
                                Score
                              </th>
                              <th
                                key={`${subColumn.accessorKey}-attempts`}
                                className="px-3 py-3 text-[14px] whitespace-nowrap border border-gray-200 text-center"
                              >
                                Attempts
                              </th>
                            </>
                          ))
                        : null
                    )}
                  </tr>
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-3 py-3 text-[14px] text-center border border-gray-200"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!dynamicPagination ? (
              <div className="md:flex justify-between items-center">
                <div className="mt-3 text-base text-black-700">
                  Page{" "}
                  <strong>
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
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
                          const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
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
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                      >
                        {"<<"}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                      >
                        {"<"}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                      >
                        {">"}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                isReactTable={isReactTable}
                handleItemChanges={handleItemChanges}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
