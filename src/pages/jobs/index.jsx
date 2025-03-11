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
import JobFilter from './jobProfile/JobFilter';

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
      header: "JOB TITLE WITH CODE ",
      accessorKey: "name",
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex flex-col items-start space-y-2">
            <div className="font-bold">{row.original.name}</div>
            <div>{row.original.name_text}</div>
        </div>
    ),
    },

    {
        header: "Posted by ",
        accessorKey: "jobtitle",
        enableSorting: false,
        cell: ({ row }) => (
          <div className="flex flex-col items-start space-y-2">
              <div className="font-bold">{row.original.jobtitle}</div>
              <div>{row.original.line_text}</div>
          </div>
      ),
      },

          {
            header: "Medium",
            accessorKey: "medium",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.medium}</div>
                </div>
            ),
        },

        {
            header: "Class",
            accessorKey: "class",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.class}</div>
                </div>
            ),
        },

        {
            header: "Days",
            accessorKey: "days",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.days}</div>
                </div>
            ),
    
        },

        {
            header: "Salary",
            accessorKey: "salary",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.salary}</div>
                </div>
            ),
        },
        {
            header: "Time & Location",
            accessorKey: "time_location",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.time_location}</div>
                    <div>{row.original.time_text}</div>
                </div>
            ),
        },

        {
            header: "Student Gender",
            accessorKey: "student_gender",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.student_gender}</div>
                </div>
            ),
        },
        {
            header: "Tutor Gender",
            accessorKey: "tutor_gender",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-bold">{row.original.tutor_gender}</div>
                </div>
            ),
            
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
    
  ];

  const data = [
    {
        id: 1,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
      },

      {
        id: 2,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
      },

      {
        id: 3,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
      },

      {
        id: 4,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
      },

      {
        id: 5,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
      },


      {
        id: 6,
        name: "Need Home Tutors For Class XI",
        name_text: "GM0ER0FSA4H",
        jobtitle: "Parent Full Name",
        line_text: "Parent",  // Some code or additional info
        medium: "Bangla Medium",
        class: "V",
        days: "3 days/ Week",
        salary: "8000 /Week",
        time_location: "9:00 AM",
        time_text: "Banasree, Dhaka",
        student_gender: "Female",
        tutor_gender: "Male",
        status: "",
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
       
      </div>
    </>
  )
  
  return (
    <>
      <div className="space-y-5 profile-page">
        <TableAndGridViewer columns={columns} data={data} dropdownFilters={dropdownFilters} actionButtons={actionButtons} gridStyle={`third`} gridColumns={3} showSearch={false} />
      </div>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
            <JobFilter/>
          </GlobalDrawer>
      }
    </>
  )
}

export default Tutors
