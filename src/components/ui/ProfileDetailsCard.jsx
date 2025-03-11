import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import ImageModal from './ImageModal'
import medalImage from '../../assets/images/all-img/gold-medal-1.png';
import Button from './Button';
import { use } from 'react';
const ProfileDetailsCard = ({profileData, profileType, secondColumn="", thirdColumn=""}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [type, setType] = useState('basic');
  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  useEffect(() => {
    setType(profileType);
  }, [profileData]);

  return (
    <>
    
      {type === "basic" && (
        <div className="profiel-wrap p-[35px] rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1] w-full shadow-base">
            <div className="flex-none">
              <div className="flex-1">
                <div className="flex space-x-5 rtl:space-x-reverse">
                  <div className="flex-none">
                    <div 
                      className="md:h-[100px] md:w-[100px] h-[100px] w-[100px] relative cursor-pointer"
                    >
                      <img
                        src={profileData?.image}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                      <span className="absolute right-2 bottom-2" onClick={handleImageClick}>
                        <div className="h-8 w-8 bg-slate-50 rounded-full flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 dark:bg-slate-900">
                          <Icon icon="heroicons:camera" className="w-5 h-5" />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                      {profileData?.name}
                    </div>
                    <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                      {profileData?.role}
                    </div>
                    <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                      Address: {profileData?.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
      {type === "details" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 profile-wrap p-[35px] rounded-lg bg-white dark:bg-slate-800 lg:space-y-0 space-y-6 relative z-[1] shadow-base">
            <div className={`border-0 ${secondColumn && 'md:border-r'} border-dashed border-gray-300 dark:border-slate-600`}>
              <div className="flex-1">
                <div className="flex space-x-5 rtl:space-x-reverse">
                  <div className="flex-none">
                    <div 
                      className="md:h-[100px] md:w-[100px] h-[100px] w-[100px] relative cursor-pointer"
                    >
                      <img
                        src={profileData?.image}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                      <span className="absolute right-2 bottom-2" onClick={handleImageClick}>
                        <div className="h-8 w-8 bg-slate-50 rounded-full flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 dark:bg-slate-900">
                          <Icon icon="heroicons:camera" className="w-5 h-5" />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px] mb-3">
                      <div className='flex items-center justify-start gap-1 mb-2'>
                          <img src={medalImage} alt="medal" className='w-8 h-8' />
                          <h4 className='text-lg font-medium text-900 text-left'>{profileData.name}</h4>
                      </div>
                    </div>
                    <div className="text-base font-light text-black-900 dark:text-slate-400 mb-3">
                      <span>Tutor ID:</span> <span>123456789</span>
                    </div>
                    <div className="text-sm font-light text-slate-600 dark:text-slate-400 mb-3">
                      <div className='w-[68px]'>    
                          <span className="flex items-center gap-1 py-2 px-2 text-white text-xs bg-primary-500 rounded-md justify-center">
                              <Icon icon="heroicons:star-solid" />
                              <span>3.45</span>
                          </span>
                      </div>
                    </div>
                    <div>
                      <Button text="Edit" iconPosition='right' icon={`heroicons:eye`} className='btn btn inline-flex justify-center items-center false border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 p-2 text-base'>Into Video</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`border-0 ${thirdColumn && 'md:border-r'} border-dashed border-gray-300 dark:border-slate-600`}>
              {secondColumn}
            </div>
            <div>
              {thirdColumn}
            </div>
          </div>
        </>
      )}

        <ImageModal 
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={profileData?.image}
        />
    </>
  )
}

export default ProfileDetailsCard
