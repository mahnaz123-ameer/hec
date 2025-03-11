import Button from '@/components/ui/Button'
import InformationCard from '@/components/ui/InformationCard'
import SimpleTable from '@/components/ui/table/SimpleTable'
import { Icon } from '@iconify/react'
import React from 'react'
import { Cell } from 'recharts'

const Availability = () => {

const columns = [
  {
    header: "Day",
    accessorKey: "day",
  },
  {
    header: "Morning (Before 12:00 PM)",
    accessorKey: "morning",
    cell: ({ row }) => {
      return (
          <div className='flex justify-center w-full'>
            <Icon icon="lsicon:disable-outline" width="32" height="32" className='text-dark-900' />
          </div>
        )
    }
  },
  {
    header: "Afternoon (12:00 PM - 5:00 PM)",
    accessorKey: "afternoon",
    cell: ({ row }) => {
      return (
          <div className='flex justify-center w-full'>
            <Icon icon="la:check-circle-solid" width="32" height="32" className='text-green-600' />
          </div>
        )
    }
  },
  {
    header: "Evening (After 5:00 PM)",
    accessorKey: "evening",
    cell: ({ row }) => {
      return (
          <div className='flex justify-center w-full'>
            <Icon icon="la:check-circle-solid" width="32" height="32" className='text-green-600' />
          </div>
        )
    }
  },
];

  const data = [
    { day: "Sunday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Monday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Tuesday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Wednesday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Thursday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Friday", morning: "Available", afternoon: "Available", evening: "Available" },
    { day: "Saturday", morning: "Available", afternoon: "Available", evening: "Available" },
  ];

  return (
    <>
        <InformationCard
        title="Schedule"
        // actionButton={
        //   <Button
        //     text="Edit"
        //     icon={`heroicons:pencil-square`}
        //     onClick={() => {}}
        //   ></Button>
        // }
      >
          <SimpleTable className="min-w-full" columns={columns} data={data} />
      </InformationCard>
    </>
  )
}

export default Availability