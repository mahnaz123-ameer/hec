import GlobalDrawer from "@/components/partials/globalDrawer";
import Button from "@/components/ui/Button";
import InformationCard from "@/components/ui/InformationCard";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Experience from "./forms/Experience";
import { useSelector } from "react-redux";
import { handleCustomizer } from "@/store/layout";

const WorkingInformation = () => {
  const dispatch = useDispatch();
  const {customizer} = useSelector((state) => state.layout);
  const [drawerTitle, setDrawerTitle] = useState('Add experience');

  const experienceList = [
    {
      year: "2016 - 2017",
      designation: "Designation",
      companyName: "Company Name (Full time)",
      officeLocation: "Office Location",
    },
    {
      year: "2016 - 2017",
      designation: "Designation",
      companyName: "Company Name (Full time)",
      officeLocation: "Office Location",
    },
    {
      year: "2016 - 2017",
      designation: "Designation",
      companyName: "Company Name (Full time)",
      officeLocation: "Office Location",
    },
    {
      year: "2016 - 2017",
      designation: "Designation",
      companyName: "Company Name (Full time)",
      officeLocation: "Office Location",
    },
  ];

  const handleEdit = (id) => {    
    if (id) {
      setDrawerTitle('Edit Experience');
    }
    dispatch(handleCustomizer(true));
  }

  return (
    <>
      <InformationCard title="Work Experience">
        <div className="bg-white rounded-lg p-6 shadow-xl border relative mb-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {experienceList.map((experience, index) => (
                <div
                className={`px-3 ${index % 3 === 0 ? 'md:pl-0' : ''} py-5 relative ${
                  (index + 1) % 3 === 0 ? 'md:border-b border-blue-200 dark:border-slate-800' : ''
                } ${Math.floor(index / 3) === Math.floor((experienceList.length - 1) / 3) ? '' : 'md:border-b border-blue-200 dark:border-slate-800'}`}
                key={index}
              >
                {Math.floor(index / 3) === Math.floor((experienceList.length - 1) / 3) ? 
                '' 
                : 
                (<span className="hidden md:block bg-white border border-blue-200 h-4 w-4 rounded-full absolute left-0 bottom-[-8px]"></span>)}
                
                <div className="flex items-start justify-statrt gap-2 mb-3">
                  <span>{experience.year}</span>
                  <Button
                    icon="heroicons:pencil-square"
                    className="bg-white border-0 p-0 text-blue-500"
                    onClick={() => handleEdit(index+1)}
                  />
                </div>
                <div>
                  <p className="font-semibold text-black-900">
                    {experience.designation}
                  </p>
                  <p className="font-semibold text-black-900 text-sm">
                    {experience.companyName}
                  </p>
                </div>
                <div>
                  <span className="text-sm">{experience.officeLocation}</span>
                </div>
              </div>
            ))}
          </div>
        <div className='flex items-center justify-start mt-5'>
            <Button
                type="button"
                className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                icon="material-symbols:add"
                onClick={() => handleEdit()}
            >
                Add Experience
            </Button>
        </div>
        </div>
      </InformationCard>
      {customizer && 
          <GlobalDrawer title={drawerTitle}>
              <Experience />
          </GlobalDrawer>
      }
    </>
  );
};

export default WorkingInformation;
