import React, { useCallback } from 'react'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { setSelectedGridIds } from '@/store/common/commonSlice'
import { useSelector } from 'react-redux'

const ProfileGridViewCard = ({data,square=false}) => {
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

    <div className={`cursor-pointer bg-white ${data?.selected ? ' border-success-500' : ''} rounded-lg p-6 relative shadow-lg border`} onClick={(e) => onclickSingleSelectBox(data?.id)}>
      {data?.status && (
        <div className='absolute top-[7px] right-[0px]'>
          <span className={` ${data?.status === 'active' ? 'bg-success-100 text-success-500' : 'bg-danger-100 text-danger-500'} text-base px-5 py-2 rounded rounded-tr-lg capitalize`}>
            {data.status}
          </span>
        </div>
      )}
      <div className="items-center gap-3 justify-start">
      <div className={`w-16 h-16 bg-blue-100 ${square ? 'rounded-sm' : 'rounded-md'} flex items-center justify-center`}>
                  {data.img ? (
                    <img src={data.img} alt={data.name} className={` ${square ? 'rounded-sm' : ''}`} />
          ) : (
            <Icon icon="mingcute:user-4-fill" className="w-10 h-10" />
          )}
        </div>
        <h4 className='text-lg font-medium text-slate-900 text-left mt-3'>{data.name}</h4>

        

      </div>

      
      <div className='mt-3 space-y-3'> 

        {data?.phone && 
          <div className='flex items-center justify-between gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-3'>
              <Icon icon="solar:phone-linear" className='w-5 h-5' /> 
              <span className='md:min-w-[140px]'>Primary Number</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.phone}</span>
          </div>
        }
        {/* Job data */}
        {data?.jobtittle && 
          <div className='flex items-center justify-between gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-3'>
              <Icon icon="solar:notebook-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>Job Tittle</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.jobtittle}</span>
          </div>
        }
        {data?.salary && 
          <div className='flex items-center justify-between gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-3'>
              <Icon icon="solar:notebook-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>Salary</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.salary}</span>
          </div>
        }
        {data?.class && 
          <div className='flex items-center justify-between gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-3'>
              <Icon icon="solar:notebook-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>Class</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.class}</span>
          </div>
        }

        
        {data?.email && 
          <div className='flex items-center justify-between gap-3 text-black-500 flex-wrap md:flex-nowrap'>
            <span className='flex items-center gap-3'>
              <Icon icon="solar:letter-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>Email</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.email}</span>
          </div>
        }
        {data?.status &&
        <div className='flex items-center justify-between gap-3 text-black-500'>
          <span className='flex items-center gap-3'>
            <Icon icon="solar:letter-linear" className='w-5 h-5' />
            <span className='min-w-[140px]'>Status</span>
          </span>
          <span>:</span>
          <span className='min-w-[140px]'>{data.status}</span>
        </div>
        }
        {data?.code &&
          <div className='flex items-center justify-between gap-3 text-black-500'>
            <span className='flex items-center gap-3'>
            <Icon icon="fa6-solid:code" className="w-5 h-5" />
            <span className='min-w-[140px]'>Code</span>
            </span>
            <span>:</span>
            <span className='min-w-[140px]'>{data.code}</span>
          </div>
        }
        {data?.date && 
          <div className='flex items-center justify-between gap-3 text-black-500'>
            <span className='flex items-center gap-3 '>
              <Icon icon="solar:calendar-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>Date</span>
            </span>
            <span>:</span>
            <span className='md:min-w-[140px]'>{data.date}</span>
          </div>
        }
        {data?.reg_date && 
          <div className='flex items-center justify-between gap-3 text-black-500'>
            <span className='flex items-center gap-3 '>
              <Icon icon="solar:calendar-linear" className='w-5 h-5' />
              <span className='md:min-w-[140px]'>REG. Date</span>
            </span>
            <span>:</span>
            <span className='min-w-[140px]'>{data.reg_date}</span>
          </div>
        }
      </div>
    </div>
    
  )
}

export default ProfileGridViewCard
