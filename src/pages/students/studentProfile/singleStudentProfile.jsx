import ProfileDetailsCard from "@/components/ui/ProfileDetailsCard";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setPageTitle } from "@/store/common/commonSlice";
import PageMenuBlock from "@/components/ui/PageMenuBlock";
import ProfileDetails from "@/pages/settings/ProfileDetails";
import ChangePassword from "@/pages/settings/ChangePassword";
import LogedinDevices from "@/pages/settings/LogedinDevices";
import ProfileInformationDetails from "@/pages/students/studentProfile/ProfileInformationDetails";
import AcademicInformationDetails from "./AcademicInformation";
import Card from "@/components/ui/Card";

const SingleStudentProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const breadCrumb = [
      {
        label: "Students Details",
        path: "#",
      },
    ];
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Students Details"));
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
  ];

  const profileDetailsData = [
    { title: "Name", value: "John Doe" },
  ];

  const [activeMenu, setActiveMenu] = useState("personal_information");
  return (
    <div className="space-y-5 profile-page">
      {/* Profile Card */}
      <ProfileDetailsCard profileData={profileData} profileType="basic" />

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
            {activeMenu === "academic_information" && <AcademicInformationDetails />}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentProfile;
