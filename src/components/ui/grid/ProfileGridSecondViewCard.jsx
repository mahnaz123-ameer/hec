import React, { useCallback } from 'react'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { setSelectedGridIds } from '@/store/common/commonSlice'
import { useSelector } from 'react-redux'
import medalImage from '../../../assets/images/all-img/gold-medal-1.png';
import profileImage from '../../../assets/images/all-img/tutor_image_with_rattings.png';
import ProgressBarCustom from '@/components/ui/ProgressBarCustom';
import Dropdown from '../react-hook-form/Dropdown'

const ProfileGridSecondViewCard = ({data}) => {
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

  return (
    <>
      <div className={`cursor-pointer bg-white ${data?.selected ? ' border-success-500' : ''} rounded-lg p-6 relative shadow-lg border`}>
        <div className='flex items-start gap-3'>
          <div className=''>  
              <img src={profileImage} alt="medal" width={110} />
          </div>
          <div className='w-full'>
            <div className='flex items-center justify-start gap-1 mb-2'>
                <img src={medalImage} alt="medal" className='w-8 h-8' />
                <h4 className='text-lg font-medium text-900 text-left'>{data.name}</h4>
            </div>
            <div className='w-[68px] mb-2'>    
                <span className="flex items-center gap-1 py-2 px-2 text-white text-xs bg-primary-500 rounded-md justify-center">
                    <Icon icon="heroicons:star-solid" />
                    <span>3.45</span>
                </span>
            </div>
            <ProgressBarCustom title="Profile Setup" value={60} showValue={true} />
          </div>
        </div>
        <div className='mt-3 space-y-3'>  
        {data?.phone && 
          <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-2'>
              <Icon icon="solar:phone-linear" className='w-5 h-5' /> 
              <span>Primary Number</span>
            </span>
            <span>:</span>
            <span>{data.phone}</span>
          </div>
          } 
          {data?.code && 
            <div className='flex items-center justify-start gap-3 text-black-500 flex-wrap md:flex-nowrap'>
              <span className='flex items-center gap-2'>
                <Icon icon="material-symbols-light:code" className='w-5 h-5' /> 
                <span>Code</span>
              </span>
              <span>:</span>
              <span>{data.code}</span>
            </div>
          }
        </div>
        <div className='w-full my-3'>
          <hr className='border-dashed' />
        </div>
        <div> 
          <Dropdown
                  label="Select option"
                  wrapperClass="w-full bg-success-200 dark:bg-slate-700 p-2 rounded-md"
                  labelClass="dark:text-slate-400 text-sm leading-6 text-center text-black-700 font-semibold flex items-center justify-between"
                  items={[
                      {label: "All", value: "all"},
                      {label: "Active", value: "active"},
                      {label: "Inactive", value: "inactive"},
                  ]}
              />
        </div>
      </div>
    </>
  )
}

export default ProfileGridSecondViewCard
