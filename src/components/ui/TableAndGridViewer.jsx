import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";
import Table from "./table/Table";
import ProfileGridViewCard from "./grid/ProfileGridViewCard";
import GridViewWrapper from "./grid/GridViewWrapper";
import { useDispatch } from "react-redux";
import { setSelectedGridIds } from "@/store/common/commonSlice";
import { useSelector } from "react-redux";
import SwitchCheckBox from "./SwitchCheckBox";

const TableAndGridViewer = ({
  columns,
  data,
  dropdownFilters,
  actionButtons,
  actionButtonsLeft,
  dynamicPagination,
  gridStyle,
  gridColumns,
  showSearch = true,
}) => {
  const { selectedGridIds } = useSelector((state) => state.commonSlice);
  const dispatch = useDispatch();
  const [checkStatus, setCheckStatus] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [itemData, setItemData] = useState(data);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleSelectAll = useCallback(
    (value) => {
      setCheckStatus(!checkStatus);
      const selectedIds = itemData
        ?.map((item) => (value ? item.id : null))
        .filter(Boolean);
      setItemData(
        itemData?.map((item) => ({
          ...item,
          selected: selectedIds.includes(item.id),
        }))
      );
      dispatch(setSelectedGridIds(selectedIds));
    },
    [dispatch, itemData]
  );

  useEffect(() => {
    setItemData(
      data?.map((item) => ({
        ...item,
        selected: selectedGridIds.includes(item.id),
      }))
    );
  }, [data, selectedGridIds]);

  return (
    <>
      <div>
        <div className="md:flex items-start justify-between flex-warp gap-3">
          <div className="flex items-center justify-start flex-wrap gap-3">
            {isGridView && (
              <SwitchCheckBox
                handleChange={handleSelectAll}
                status={checkStatus}
              />
            )}
            <div className="md:flex items-center justify-start border rounded-2xl p-[2px]">
              <div className="flex items-center justify-center gap-2">
                <Button
                  onClick={toggleView}
                  className={`rounded-full ${
                    !isGridView ? "bg-blue-100" : "bg-white"
                  }  px-[5px] py-[5px] w-8 h-8`}
                >
                  <Icon icon="ph:list-bold" className="h-4 w-4" />
                </Button>
                <Button
                  onClick={toggleView}
                  className={`rounded-full ${
                    isGridView ? "bg-blue-100" : "bg-white"
                  } px-[5px] py-[5px] w-8 h-8`}
                >
                  <Icon icon="mingcute:grid-line" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>{dropdownFilters}</div>
            {showSearch && (
              <div className="flex items-center justify-between border border-gray-300 rounded-md ">
                <div className="px-2">
                  <Icon icon="mdi:search" className="h-4 w-4" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 pr-4 text-gray-700 focus:outline-none focus:border-blue-500 bg-transparent w-full md:w-[200px]"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
            )}
            {actionButtonsLeft}
          </div>
          <div className="mt-3 md:mt-0">{actionButtons}</div>
        </div>
      </div>
      {isGridView ? (
        <div className="mt-5">
          <GridViewWrapper
            data={itemData}
            dynamicPagination={dynamicPagination}
            gridStyle={gridStyle}
            gridColumns={gridColumns}
          />
        </div>
      ) : (
        <div className="mt-5">
          <Table
            columns={columns}
            data={data}
            dynamicPagination={dynamicPagination}
          />
        </div>
      )}
    </>
  );
};

export default TableAndGridViewer;
