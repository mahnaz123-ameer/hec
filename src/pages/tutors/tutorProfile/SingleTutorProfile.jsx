import ProfileDetailsCard from "@/components/ui/ProfileDetailsCard";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setPageTitle } from "@/store/common/commonSlice";
import PageMenuBlock from "@/components/ui/PageMenuBlock";
import Card from "@/components/ui/Card";
import Dropdown from "@/components/ui/react-hook-form/Dropdown";
import { tr } from "@faker-js/faker";
import Select from "@/components/ui/react-hook-form/Select";
import BasicInformation from "./BasicInformation";
import AcademicInformation from "./AcademicInformation";
import WorkingInformation from "./WorkingInformation";
import Availability from "./Availability";
import Documents from "./Documents";
import CognitiveAnswer from "./CognitiveAnswer";
import References from "./References";
import TutionInformation from "./TutionInformation";

const SingleTutorProfile = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [activeMenu, setActiveMenu] = useState("personal_information");

  useEffect(() => {
    const breadCrumb = [
      {
        label: "Tutor Details",
        path: "#",
      },
    ];
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Tutor Details"));
  }, [dispatch]);

  const profileData = {
    name: "John Doe",
    role: "Software Engineer",
    address: "123 Main Street, Anytown, USA",
    image: "https://shorturl.at/FCngH",
  };

  const onclickChangeMenu = (id) => {
    setActiveMenu(id);
  };

  const menuList = [
    { title: "Personal Information", id: "personal_information" },
    { title: "Academic Information", id: "academic_information" },
    { title: "Work Information", id: "work_information" },
    { title: "Tuition Information", id: "tutor_information" },
    { title: "Availability", id: "availability_information" },
    { title: "Documents", id: "documents" },
    { title: "Cognitive Answer", id: "cognitive_answer" },
    { title: "References", id: "references" },
  ];

  const profileDetailsData = [
    { title: "Name", value: "John Doe" },
  ];

  const secondColumnData = (
    <>
      <div className="flex items-center justify-center w-full h-full pr-4">
        <Select 
          label="Status" 
          options={["Option 1", "Option 2", "Option 3"]} 
        />
      </div>
    </>
  );
  
  const thirdColumnData = (
    <>
      <div className="flex items-center justify-center w-full h-full pr-4">
        <Select 
          label="Bacbon Rank" 
          options={["Option 1", "Option 2", "Option 3"]} 
        />
      </div>
    </>
  );

  
  return (
    <div className="space-y-5 profile-page">
      {/* Profile Card */}
      <ProfileDetailsCard profileData={profileData} profileType="details" secondColumn={secondColumnData} thirdColumn={thirdColumnData} />

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 col-span-12">
          <PageMenuBlock
            menuList={menuList}
            onclickChangeMenu={(id) => onclickChangeMenu(id)}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 col-span-12">
          <Card>
            {activeMenu === "personal_information" && <BasicInformation />}
            {activeMenu === "academic_information" && <AcademicInformation />}
            {activeMenu === "work_information" && <WorkingInformation />}
            {activeMenu === "tutor_information" && <TutionInformation />}
            {activeMenu === "availability_information" && <Availability />}
            {activeMenu === "documents" && <Documents />}
            {activeMenu === "cognitive_answer" && <CognitiveAnswer />}
            {activeMenu === "references" && <References />}
          </Card>
        </div>  
      </div>
    </div>
  );
};

export default SingleTutorProfile;
