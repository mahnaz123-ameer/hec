import React, { useCallback, useEffect, useState } from 'react'
import { setBreadcrumbs, setPageTitle } from "@/store/common/commonSlice";
import { useDispatch } from 'react-redux';
import Table from '@/components/ui/table/Table';
import TableAndGridViewer from '@/components/ui/TableAndGridViewer';
import Dropdown from '@/components/ui/react-hook-form/Dropdown';
import Button from '@/components/ui/Button';
import GlobalDrawer from '@/components/partials/globalDrawer';
import { useSelector } from 'react-redux';
import { handleCustomizer } from '@/store/layout';
import StudentProfileWrapper from './studentProfile/StudentProfileWrapper';
import SwitchCheckBox from '@/components/ui/SwitchCheckBox';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { singleStudentsUrl } from '@/constant/data';

const Students = () => {
  const dispatch = useDispatch();
  const {customizer} = useSelector((state) => state.layout);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  useEffect(() => {
    const breadCrumb = [
      {
        label: "Students List",
        path: "#",
      },
    ]
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Students List"));
  }, [dispatch]);

  const handleChangeStatus = (id, status) => {
    // Handle status change here
    console.log(`Status changed for ID ${id} to ${status}`);
  };

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
          className="border-gray-300 rounded h-4 w-4"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          className="border-gray-300 rounded h-4 w-4"
        />
      ),
    },
    {
      header: "#",
      accessorKey: "number",
      enableSorting: true,
      sortingFn: (rowA, rowB) => {
        return rowA.index - rowB.index;
      },
      cell: ({ row: { index } }) => index + 1,
    },

    {
      header: "Student Name",
      accessorKey: "name",
      enableSorting: true,
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
      enableSorting: false,
    },
    {
      header: "Class",
      accessorKey: "class",
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableSorting: false,
      cell: ({ row, getValue  }) => {
        const status = getValue('status');
        return (
          <div className="flex items-center space-x-2"> 
            <SwitchCheckBox status={status === "active"} handleChange={() => handleChangeStatus(row.original.id, !status)} />
            <div className='capitalize text-base -mt-2'>{status}  </div>
          </div>
        );
      },
    },
    {
      header: "Action",
      accessorKey: "action",
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Link
            to={`${singleStudentsUrl}/${row.original.id}`}
            variant="outline"
            size="sm"
            className="text-primary btn"
          >
            <Icon icon="heroicons:eye" className="h-5 w-5 text-primary-900 fill-primary-900" />
          </Link>
        </div>
      ),
    },
  ];

  
  

  const data = [
    {
      id: 1,
      name: "John Doe",
      phone: "01234-567890",
      class: "10",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "09876-543210",
      class: "11",
      status: "inactive",
    },
    {
      id: 3,
      name: "Bob Smith",
      phone: "01234-987654",
      class: "12",
      status: "active",
    },
    {
      id: 4,
      name: "Alice Johnson",
      phone: "09876-321098",
      class: "10",
      status: "inactive",
    },
    {
      id: 5,
      name: "John Doe",
      phone: "01234-567890",
      class: "10",
      status: "active",
    },
    {
      id: 6,
      name: "Jane Doe",
      phone: "09876-543210",
      class: "11",
      status: "inactive",
    },
    {
      id: 7,
      name: "Bob Smith",
      phone: "01234-987654",
      class: "12",
      status: "active",
    },
    {
      id: 8,
      name: "Alice Johnson",
      phone: "09876-321098",
      class: "10",
      status: "inactive",
    },
    {
      id: 9,
      name: "John Doe",
      phone: "01234-567890",
      class: "10",
      status: "active",
    },
    {
      id: 10,
      name: "Jane Doe",
      phone: "09876-543210",
      class: "11",
      status: "inactive",
    },
    {
      id: 11,
      name: "Bob Smith",
      phone: "01234-987654",
      class: "12",
      status: "active",
    },
    {
      id: 12,
      name: "Alice Johnson",
      phone: "09876-321098",
      class: "10",
      status: "inactive",
    },
  ];

  const dropdownFilters = (
    <>
      <div className="flex items-center">
        <Dropdown
          label="Select option"
          wrapperClass="w-40 bg-gray-200 dark:bg-slate-700 p-2 rounded-md"
          labelClass="text-slate-500 dark:text-slate-400 text-sm leading-6 text-left"
          items={[
            {label: "All", value: "all"},
            {label: "Active", value: "active"},
            {label: "Inactive", value: "inactive"},
          ]}
        />
      </div>
      
    </>
  )

  const actionButtons = (
    <>
      <div className="flex items-center md:justify-end gap-3 flex-wrap">
        <Button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300" icon="tabler:send" iconPosition="right" >Send Notification</Button>
        <Button className="border hover:bg-white hover:border-primary-900 hover:text-primary-900 px-4 py-2 rounded-md bg-primary-900 text-white transition duration-300" icon="formkit:add" iconPosition="right" onClick={() => {setCurrentDrawerTitle("Enroll Student"); dispatch(handleCustomizer(true));}} >Enroll Student</Button>
      </div>
    </>
  )
  



  return (
    <>
      <div className="space-y-5 profile-page">
        <TableAndGridViewer St={true}square={false} columns={columns} data={data} dropdownFilters={dropdownFilters} actionButtons={actionButtons} />
      </div>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
              <StudentProfileWrapper />
          </GlobalDrawer>
      }
    </>
  )
}

export default Students
