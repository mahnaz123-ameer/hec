import ProfileDetailsCard from "@/components/ui/ProfileDetailsCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateJobs from "./forms/CreateJobs";
import Button from "@/components/ui/Button";
import GlobalDrawer from "@/components/partials/globalDrawer";
import { useDispatch } from "react-redux";
import { handleCustomizer } from "@/store/layout";
import AddressInformation from "./AddressInformation";

const ProfileInformationWrapper = ({ profileData }) => {
  const { customizer } = useSelector((state) => state.layout);
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
    const dispatch = useDispatch();
    const toggleDrawer = (val) => { 
      switch(val){
          case "job":
              dispatch(handleCustomizer(true));
              setCurrentDrawer(<AddressInformation />);
              // setCurrentDrawer(<CreateJobs />);
              setCurrentDrawerTitle("Create Job");
              break;
          case "tutor_hire":
              dispatch(handleCustomizer(true));
              setCurrentDrawerTitle("Hire Tutor");
              break;
      }
    };
console.log(customizer, 'customizer')
  const thirdColumnData = (
        <div className="flex items-center justify-center w-full h-full gap-5">
        <Button type="button" text="Hire Tutor" onClick={() => toggleDrawer('tutor_hire')} iconPosition="right" icon="ri:user-3-line"  />
        <Button type="button" text="Create Job" onClick={() => toggleDrawer('job')} iconPosition="right" icon="solar:suitcase-line-duotone"  />
      </div>
   )
   
   return (
    <>
      <ProfileDetailsCard
        profileData={profileData}
        profileType="details"
        thirdColumn={thirdColumnData}
      />
      {/* {customizer && (
        
      )} */}
      <GlobalDrawer title='title working'>
        <>this is demo</>
      </GlobalDrawer>
    </>
  );
};

export default ProfileInformationWrapper;
