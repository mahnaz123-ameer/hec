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
import ParentsProfileWrapper from './parentsProfile/ParentsProfileWrapper';
import SwitchCheckBox from '@/components/ui/SwitchCheckBox';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { singleParentsUrl, singleStudentsUrl } from '@/constant/data';

const Parents = () => {
    const dispatch = useDispatch();
    const {customizer} = useSelector((state) => state.layout);
    const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
    useEffect(() => {
      const breadCrumb = [
        {
          label: "Parents ",
          path: "#",
        },
      ]
      dispatch(setBreadcrumbs(breadCrumb));
      dispatch(setPageTitle("Parents List"));
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
        header: "Parent Name",
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
        header: "Code",
        accessorKey: "code",
        enableSorting: false,
      },
      {
        header: "Action",
        accessorKey: "action",
        enableSorting: false,
        cell: ({ row }) => (
          <div className="flex items-center gap-5">
            <Link
              to={`${singleParentsUrl}/${row.original.id}`}
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
        email:"user133@gmail.com",
        code: "GM0ER0FSA4H",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        phone: "09876-543210",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "XJ9KT2LZV6P",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 3,
        name: "Bob Smith",
        phone: "01234-987654",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "BQ3YM7NFA5D",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 4,
        name: "Alice Johnson",
        phone: "09876-321098",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "RW8XC4JH09E",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 5,
        name: "John Doe",
        phone: "01234-567890",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "PL2VF6KYT3M",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 6,
        name: "Jane Doe",
        phone: "09876-543210",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "ZQ1NG8HXA7B",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 7,
        name: "Bob Smith",
        phone: "01234-987654",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "MD4YF9KT02L",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 8,
        name: "Alice Johnson",
        phone: "09876-321098",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "VC6XJ3NWB5R",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 9,
        name: "John Doe",
        phone: "01234-567890",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "HT7PL2YF8MK",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 10,
        name: "Jane Doe",
        phone: "09876-543210",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "KX0JD9ZV5QB",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 11,
        name: "Bob Smith",
        phone: "01234-987654",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "GQ9XJ2KTB7Y",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
      },
      {
        id: 12,
        name: "Alice Johnson",
        phone: "09876-321098",
        reg_date: "Jan 22, 2021",
        email:"user133@gmail.com",
        code: "NFA4MT6Y3LP",
        img: "/src/assets/images/all-img/tutor_image_with_rattings.png",
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
          <Button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300" icon="bi:envelope-at" iconPosition="right" onClick={() => {setCurrentDrawerTitle("Enroll Student"); dispatch(handleCustomizer(true));}} >Send Email</Button>
          <Button className='btn btn-icon border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 px-2 hidden' icon="clarity:ellipsis-vertical-line" />
        </div>
      </>
    )
    
    return (
      <>
        <div className="space-y-5 profile-page">
          <TableAndGridViewer square={true} columns={columns} data={data} dropdownFilters={dropdownFilters} actionButtons={actionButtons} gridColumns={3}/>
          
        </div>
        {customizer && 
            <GlobalDrawer title={currentDrawerTitle}>
              This is a global drawer
            </GlobalDrawer>
        }
      </>
    )
  }
  
  export default Parents
  
