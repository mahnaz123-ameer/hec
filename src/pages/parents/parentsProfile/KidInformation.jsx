import Card from "@/components/ui/Card";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import InformationCard from "@/components/ui/InformationCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCustomizer } from "@/store/layout";
import GlobalDrawer from "@/components/partials/globalDrawer";
import AddKids from "./forms/AddKids";

const KidInformation = () => {
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  const {customizer} = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const kids = [
    {
      name: "Tarek Aziz",
      age: 16,
      gender: "Male",
      class: "IX",
      institute: "Gulshan Model School",
    },
    {
      name: "Ameerah Arnaz",
      age: 11,
      gender: "Female",
      class: "IV",
      institute: "Kid’s Tutorial School",
    },
  ];

  const drawerAction = () => {
    dispatch(handleCustomizer(true));
    // setCurrentDrawer(<BasicInformationForm updateForm={true} />);
    setCurrentDrawerTitle("Edit Basic Information");
  }  

  return (
    <>
      <InformationCard title="Kids Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative">
          {kids?.map((kid, index) => (
            <div
              key={index}
              className="p-4 shadow-md relative bg-white rounded-md border border-gray-200 w-full"
            >
              <h3 className="font-bold text-lg mb-2">{kid.name}</h3>
              <button onClick={() => drawerAction()} className="absolute top-2 right-2 text-blue-500">
                <Icon icon="akar-icons:edit" width="20" height="20" />
              </button>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Icon icon="mdi:account-clock" className="mr-2" />{" "}
                  <span>Age :</span> {kid.age}
                </p>
                <p className="flex items-center">
                  <Icon icon="mdi:gender-male-female" className="mr-2" />{" "}
                  <span>Gender :</span> {kid.gender}
                </p>
                <p className="flex items-center">
                  <Icon icon="mdi:school" className="mr-2" />{" "}
                  <span>Class :</span> {kid.class}
                </p>
                <p className="flex items-center">
                  <Icon icon="mdi:home-city" className="mr-2" />{" "}
                  <span>Institute :</span> {kid.institute}
                </p>
              </div>
            </div>
          ))}

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300"></div>
        </div>
        <button onClick={() => drawerAction()} className="mt-4 p-3 text-blue-500 border border-blue-500 rounded-md flex items-center gap-2 shadow-md hover:bg-blue-100 transition">
          <Icon icon="mdi:plus" /> Add Child
        </button>
      </InformationCard>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
            <AddKids />
          </GlobalDrawer>
      }
    </>
  );
};

export default KidInformation;
