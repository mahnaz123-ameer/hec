import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setPageTitle } from "@/store/common/commonSlice";
import PageMenuBlock from "@/components/ui/PageMenuBlock";
import Card from "@/components/ui/Card";
import ProfileDetailsCard from "@/components/ui/ProfileDetailsCard";
import ProfileInformationDetails from "./ProfileInformationDetails";
import TuitionInformation from "./TuitionInformation";
import CognitiveAnswer from "./CognitiveAnswer";
import Documents from "./Documents";
import KidInformation from "./KidInformation";
import Select from "@/components/ui/react-hook-form/Select";
import Button from "@/components/ui/Button";
import GlobalDrawer from "@/components/partials/globalDrawer";
import { useSelector } from "react-redux";
import { handleCustomizer } from "@/store/layout";
import CreateJobs from "./forms/CreateJobs";
import ProfileInformationWrapper from "./ProfileInformationWrapper";



const SingleParentsProfile = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    const breadCrumb = [
      {
        label: "Parents ",
        path: "#",
      },
    ];
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Parents Details"));
  }, [dispatch]);

  const profileData = {
    name: "John Doe",
    image: "https://shorturl.at/FCngH",
  };

  const onclickChangeMenu = (id) => {
    setActiveMenu(id);
  };

  const menuList = [
    { title: "Personal Information", id: "personal_information" },
    { title: "Tuition Information", id: "tuition_information" },
    { title: "Documents", id: "documents" },
    { title: "Kid Information", id: "kid_information" },
    { title: "Cognitive Answer", id: "cognitive_answer" },


  ];

  const profileDetailsData = [
    { title: "Name", value: "John Doe" },
  ];

  

  

  const [activeMenu, setActiveMenu] = useState("personal_information");
  return (
    <>
      <div className="space-y-5 profile-page">
        {/* Profile Card */}
        {profileData && 
          <ProfileInformationWrapper profileData={profileData} />
        }
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
              {activeMenu === "personal_information" && <ProfileInformationDetails />}
              {activeMenu === "tuition_information" && <TuitionInformation />}
              {activeMenu === "cognitive_answer" && <CognitiveAnswer />}
              {activeMenu === "documents" && <Documents />}
              {activeMenu === "kid_information" && <KidInformation />}
            </Card>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SingleParentsProfile;
