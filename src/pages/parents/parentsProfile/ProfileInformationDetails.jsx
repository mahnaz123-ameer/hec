import React, { useState } from "react";
import Button from "@/components/ui/Button";
import InformationCard from "@/components/ui/InformationCard";
import AddressInformation from "./AddressInformation";
import BasicInformation from "./BasicInformation";
import { useSelector, useDispatch } from "react-redux";
import { handleCustomizer } from '@/store/layout';
import GlobalDrawer from '@/components/partials/globalDrawer';

const ProfileInformationDetails = ({ profileData, columnSpan }) => {
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  const {customizer} = useSelector((state) => state.layout);
  const dispatch = useDispatch();



  const toggleDrawer = (val) => { 
    switch(val){
        case "basicInformation":
            dispatch(handleCustomizer(true));
            setCurrentDrawer(<BasicInformation updateForm={true} />);
            setCurrentDrawerTitle("Edit Basic Information");
            break;
        case "address":
            dispatch(handleCustomizer(true));
            setCurrentDrawer(<AddressInformation />);
            setCurrentDrawerTitle("Edit Address");
            break;
    }
  };

  return (
    <>
      <InformationCard title="Basic Information" actionButton={<Button text="Edit" icon={`heroicons:pencil-square`} onClick={() => toggleDrawer('basicInformation')}></Button>}>
        <div>
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 p-5 shadow-lg border border-bottom-0 rounded-md">
            <div className="lg:col-span-8 col-span-12 md:border-r border-slate-200 dark:border-slate-800 border-dashed ">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            
                <div>
                  <div className="space-y-4">
                  <div>
                  <h5 className="text-base font-bold text-slate-600 dark:text-slate-300 mb-4">
               Contact Details
                  </h5>
                </div>
                    <div>
                      <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                     PHONE NUMBER
                      </span>
                      <span className="block text-base text-slate-900 dark:text-slate-200">
                      (+880) 19XXXXXXXX
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      ALTERNATE PHONE
                      </span>
                      <span className="block text-base text-slate-900 dark:text-slate-200">
                      (+880) 19XXXXXXXX
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                       EMAIL
                      </span>
                      <span className="block text-base text-slate-900 dark:text-slate-200">
                        tutor123@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 space-y-5">
              <div>
                <h5 className="text-base font-bold text-slate-600 dark:text-slate-300 mb-4">
                 Other Informations
                </h5>
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                     REG. DATE
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      July 04,1999
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                     GENDER
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Female
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      CODE
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      GM0ER9FFJD3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InformationCard>
      <div className="mt-6 pt-6 ">
        <InformationCard title="Address" actionButton={<Button text="Edit" icon={`heroicons:pencil-square`} onClick={() => toggleDrawer('address')}></Button>}>
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 p-5 shadow-lg border border-bottom-0 rounded-md">
            <div className="lg:col-span-6 col-span-12 space-y-5">
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    Division
                  </span>
                  <span className="block text-base font-bold text-slate-900 dark:text-slate-200">
                    Dhaka
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    Area
                  </span>
                  <span className="block text-base font-bold text-slate-900 dark:text-slate-200">
                   Moghbazar
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 space-y-5">
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    District
                  </span>
                  <span className="block text-base font-bold text-slate-900 dark:text-slate-200">
                    Dhaka
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    Address
                  </span>
                  <span className="block text-base font-bold text-slate-900 dark:text-slate-200">
                   Banasree Block C, Rampura,Dhaka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </InformationCard>
      </div>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
              {currentDrawer}
          </GlobalDrawer>
      }
    </>
  );
};

export default ProfileInformationDetails;
