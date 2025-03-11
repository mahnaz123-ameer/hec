import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedGridIds } from '@/store/common/commonSlice'
import { useSelector } from 'react-redux'
import { Wallet } from "lucide-react";
import Dropdown from '../react-hook-form/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';



import image1 from "@/assets/images/all-img/job1.jpg";
import image2 from "@/assets/images/all-img/job2.jpg";
import image3 from "@/assets/images/all-img/job3.jpg";


const images = [
  image1,image2,image3
];


const JobsGridViewCardCard = ({data}) => {
  const dispatch = useDispatch();
  const {selectedGridIds} = useSelector((state) => state.commonSlice);

  const onclickSingleSelectBox = useCallback((value) => {  
    const newSelectedGridIds = [...selectedGridIds];
    if (newSelectedGridIds.includes(value)) {
      newSelectedGridIds.splice(newSelectedGridIds.indexOf(value), 1);
    } else {
      newSelectedGridIds.push(value);
    }
    dispatch(setSelectedGridIds(newSelectedGridIds));
  }, [selectedGridIds, dispatch]);

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div 
      className={`cursor-pointer bg-white ${data?.selected ? 'border-success-100' : ''} 
        rounded-lg p-5 relative shadow-lg border w-[470px] h-[580px]`}
    >
  


<div className="items-center gap-0 justify-start">


<div className="flex items-center justify-between gap-0 text-black-500">
  {data?.salary && (
    <span className="min-w-[140px] bg-green-100 border-2 border-dotted border-green-500 px-2 py-1 p4-1 rounded flex items-center gap-2 m-0">
      <Wallet className="w-5 h-5 text-green-600 m-0" />
      {/* <Icon icon="mdi:envelope-dollar" className="w-5 h-5" /> */}

      {data.salary}
    </span>
  )}

{data?.time_location && (
  <span className="min-w-[140px] bg-blue-900 text-white px-2 py-1 rounded flex items-center gap-2 m-0">
    <Icon icon="solar:calendar-linear" className='w-5 h-5' />
    <span>{data.time_location}</span>
  </span>
)}


  <img src={randomImage} alt="Related visual" className="w-auto h-auto m-0" />
</div>




    <h4 className='text-lg font-medium text-slate-900 text-left mt-3'>{data.name}</h4>
    {data?.name_text && (
  <div className='flex items-center justify-start text-black-500 border-b border-dotted'>
    <span>Job:</span>
    <span className='ml-2'>{data.name_text}</span>
  </div>
)}
      </div>
       <div className='mt-3 space-y-3'>  
              {data?.medium && 
                <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
                  <span className='flex items-center gap-2'>
                  <span className="flex flex-row">
                   <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
                  <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
                  </span> 
                  <span className='md:min-w-[140px]'>Medium</span>
                  </span>
                  <span>:</span>
                  <span>{data.medium}</span>
                </div>
                }


{data?.class && 
  <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
    <span className='flex items-center gap-2'>
      <span className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
      </span>
      <span className='md:1 min-w-[140px]'>Class</span>
    </span>
    <span> :</span>
    <span>{data.class}</span>
  </div>
}



{data?.days && 
  <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
    <span className='flex items-center gap-3'>
    <span className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
      </span>
      <span className='md:min-w-[140px]'>Days</span>
    </span>
    <span>:</span>
    <span className='md:min-w-[140px]'>{data.days}</span>
  </div>
}

{data?.time_text && 
  <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
    <span className='flex items-center gap-3'>
    <span className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
      </span>
      <span className='md:min-w-[140px]'>Location</span>
    </span>
    <span>:</span>
    <span className='md:min-w-[140px]'>{data.time_text}</span>
  </div>
}

{data?.tutor_gender && 
  <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
    <span className='flex items-center gap-3'>
    <span className="flex flex-row m-0 p-0">
  <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline m-0 p-0" />
  <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline m-0 p-0" />
</span>

      <span className='md:min-w-[140px]'>Tutor Gender</span>
    </span>
    <span>:</span>
    <span className='md:min-w-[140px]'>{data.tutor_gender}</span>
  </div>
}




{data?.tutor_gender && 
  <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
    <span className='flex items-center gap-3'>
    <span className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 inline" />
      </span>
      <span className='md:min-w-[140px]'>Tutor Gender</span>
    </span>
    <span>:</span>
    <span className='md:min-w-[140px]'>{data.tutor_gender}</span>
  </div>
}


<div className='flex items-center gap-3 text-black-500 mt-2'>
  <Icon icon="solar:calendar-linear" className='w-5 h-5' />
  <span className='font-medium text-gray-500'>
    Jan 22, 2021 
  </span>
</div>

{/* Section with Dashed Lines */}
<div className="mt-4 border-t-2 border-dashed border-gray-400">
  {/* Image and Name Section */}
  <div className="flex items-center gap-4 mt-3">
    <img src={image1} alt="Profile" className="w-10 h-10 rounded-full" /> {/* Circular Image */}
    <span className="font-medium text-gray-800">Meeraj Bhaiya</span> {/* Name */}
  </div>
</div>

<div className="mt-4 border-t-2 border-dashed border-gray-400"></div>


<div> 
          <Dropdown
                  label="Change Status"
                  wrapperClass="w-full bg-success-200 dark:bg-slate-700 p-3 rounded-md"
                  labelClass="dark:text-slate-400 text-sm leading-6 text-center text-black-700 font-semibold flex items-center justify-between"
                  items={[
                      {label: "Approved", value: "all"},
                      {label: "Pending", value: "active"},
                      {label: "Closed", value: "inactive"},
                  ]}
              />
        </div>





       
       
        
       
      </div>
    </div>
    
  )
}

export default JobsGridViewCardCard
