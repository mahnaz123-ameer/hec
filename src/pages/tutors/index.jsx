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
import SwitchCheckBox from '@/components/ui/SwitchCheckBox';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { singleStudentsUrl, tutorssinglrUrl } from '@/constant/data';
import TutorFilter from './tutorProfile/TutorFilter';

const Tutors = () => {
  const dispatch = useDispatch();
  const {customizer} = useSelector((state) => state.layout);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  useEffect(() => {
    const breadCrumb = [
      {
        label: "Tutors List",
        path: "#",
      },
    ]
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Tutors List"));
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
      header: "Tutor Name",
      accessorKey: "name",
      enableSorting: true,
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <img
            src={row.original.img}
            alt={row.original.name}
            className="h-8 w-8 rounded-full"
          />
          <div>{row.original.name}</div>
        </div>
      ),
    },
    {
      header: "Rating",
      accessorKey: "name",
      enableSorting: false,
      cell: ({ row }) => {
        return (
            <>
                <div className='w-[68px]'>    
                    <span className="flex items-center gap-1 py-2 px-2 text-white text-xs bg-primary-500 rounded-md justify-center">
                        <Icon icon="heroicons:star-solid" />
                        <span>3.45</span>
                    </span>
                </div>
            </>
          )
      }
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
      enableSorting: false,
    },
    {
      header: "Reg. Date",
      accessorKey: "reg_date",
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableSorting: false,
      cell: ({ row, getValue  }) => {
        const status = getValue('status');
        return (
            <Dropdown
                label="Select option"
                wrapperClass="w-40 bg-success-200 dark:bg-slate-700 p-2 rounded-md"
                labelClass="dark:text-slate-400 text-sm leading-6 text-center text-black-700 font-semibold flex items-center justify-center"
                items={[
                    {label: "All", value: "all"},
                    {label: "Active", value: "active"},
                    {label: "Inactive", value: "inactive"},
                ]}
            />
        );
      },
    },
    {
      header: "Action",
      accessorKey: "action",
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex items-center gap-5">
          <Link
            to={`${tutorssinglrUrl}/${row.original.id}`}
            variant="outline"
            size="sm"
            className="text-primary btn p-0 !important"
          >
            <Icon icon="heroicons:eye" className="h-5 w-5 text-primary-900 fill-primary-900" />
          </Link>
          <div>
            <Button className="text-danger btn p-0 !important">
              <Icon icon="zondicons:minus-solid" className="h-5 w-5 text-danger-500 fill-danger-500" />
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      phone: "01234-567890",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "09876-543210",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 3,
      name: "Bob Smith",
      phone: "01234-987654",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 4,
      name: "Alice Johnson",
      phone: "09876-321098",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 5,
      name: "John Doe",
      phone: "01234-567890",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 6,
      name: "Jane Doe",
      phone: "09876-543210",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 7,
      name: "Bob Smith",
      phone: "01234-987654",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 8,
      name: "Alice Johnson",
      phone: "09876-321098",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 9,
      name: "John Doe",
      phone: "01234-567890",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 10,
      name: "Jane Doe",
      phone: "09876-543210",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 11,
      name: "Bob Smith",
      phone: "01234-987654",
      reg_date: "Jan 22, 2021",
      status: "active",
      img: "https://shorturl.at/FCngH",
    },
    {
      id: 12,
      name: "Alice Johnson",
      phone: "09876-321098",
      reg_date: "Jan 22, 2021",
      status: "inactive",
      img: "https://shorturl.at/FCngH",
    },
  ];

  const dropdownFilters = (
    <>
      <div className="flex items-center gap-3">
        <Dropdown
          label="Select option"
          wrapperClass="w-40 bg-gray-200 dark:bg-slate-700 p-2 rounded-md"
          labelClass="text-slate-500 dark:text-slate-400 text-sm leading-6 text-left flex items-center justify-between"
          items={[
            {label: "All", value: "all"},
            {label: "Active", value: "active"},
            {label: "Inactive", value: "inactive"},
          ]}
        />
        <Button className="border weight-none border-secondary-950 text-slate-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300" icon="mage:filter-fill" onClick={() => {setCurrentDrawerTitle("Filter"); dispatch(handleCustomizer(true));}} >Filters</Button>
      </div>
      
    </>
  )

  const actionButtons = (
    <>
      <div className="flex items-center md:justify-end gap-3 flex-wrap">
        <Button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" >Send Notification</Button>
        <Button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" icon="bi:envelope-at" iconPosition="right" onClick={() => {setCurrentDrawerTitle("Enroll Student"); dispatch(handleCustomizer(true));}} >Send Email</Button>
        <Button className='btn btn-icon border border-secondary-950 text-secondary-950 hover:bg-secondary-950 hover:text-white transition duration-300 px-2 hidden' icon="clarity:ellipsis-vertical-line" />
      </div>
    </>
  )
  
  return (
    <>
      <div className="space-y-5 profile-page">
        <TableAndGridViewer columns={columns} data={data} dropdownFilters={dropdownFilters} actionButtons={actionButtons} gridStyle={`second`} gridColumns={3} showSearch={false} />
      </div>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
            <TutorFilter />
          </GlobalDrawer>
      }
    </>
  )
}

export default Tutors
