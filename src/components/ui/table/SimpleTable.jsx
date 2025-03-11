import React, { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const SimpleTable = ({columns, data,  ...props}) => {
  
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });

  return (
    <>
      {data?.length > 0 ?
      <>
      <div className="relative w-full overflow-x-auto rounded-lg sm:rounded-lg border bg-white">
        <div>
          <div className="inline-block w-full">
            <div className="relative">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
                  <thead className="text-xs text-blue-950 capitalize bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr>
                        {headerGroup.headers.map((header, index) => (
                          <th
                            key={`h_${header.id + 1}`}
                            scope="col"
                            className={`px-3 font-normal py-3 text-[14px] ${
                              index === headerGroup.headers.length - 1
                                ? "border-r-0 bg-blue-100"
                                : "border-r"
                            } border-gray-100 text-black-900 text-left`}
                          >
                            {header.column.columnDef.header}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                      <tr
                        key={`r_${row.id + 2}`}
                        className=" border-gray-100 dark:border-slate-600"
                      >
                        {row.getVisibleCells().map((cell, index) => (
                          <td key={`c_${cell.id + 3}`} className={`px-2 py-3 text-base text-left ${
                              index === row.getVisibleCells().length - 1
                                ? "border-r-0"
                                : "border-r"
                            } border-gray-100 text-[14px]`}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </> : "" }
    </>
  );
};

export default SimpleTable;
