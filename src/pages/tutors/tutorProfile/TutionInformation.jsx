import InformationCard from "@/components/ui/InformationCard";
import { Icon } from "@iconify/react";
import React from "react";
import classIcon from "@/assets/images/all-img/class.svg"
import SimpleTable from "@/components/ui/table/SimpleTable";
const TutionInformation = () => {
  const tableData = [
    {
      medium: "English",
      subject: "Mathematics",
      class: "Class 9",
      fees: "2500",
    },
    {
      medium: "Bangla",
      subject: "Bangla",
      class: "Class 10",
      fees: "3000",
    },
  ];

  const columns = React.useMemo(
    () =>
      tableData[0]
        ? Object.keys(tableData[0]).map((key) => ({
            header: key.replace(/_/g, " "),
            accessorKey: key,
          }))
        : [],
    [tableData]
  );

  return (
    <>
      <div className="mb-5 p-3 border rounded-md">  
        <InformationCard title="Tution 1">
          <div className="bg-white rounded-lg p-6 shadow-md border relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center mt-2">
                    <i className="fi fi-rr-age text-lg"></i>
                  </span>
                  <span>Name</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 11</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center mt-2">
                    <Icon icon="icons8:gender" width="24" height="24" />
                  </span>
                  <span>Gender</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> Male</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center">
                      <img src={classIcon} alt="class icon" width={24} height={24} />
                  </span>
                  <span>Amount</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 13500 / Month</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center">
                    <Icon icon="bx:calendar" width="24" height="24" />
                  </span>
                  <span>slot (days)</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 11</span>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-200 border-dashed my-5" />
          <div>
              <h4 className="capitalize font-medium lg:text-base tex-base">taught subjects</h4>
          </div>
          <div className="mt-2">
              <ul className="list-none pl-0 md:space-x-20 md:flex md:flex-wrap items-center justify-start">
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle-dot-filled" className="text-success-600" width="20" height="20" />
                      <span>Home tuition</span>
                  </li>
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle" className="text-black-600" width="20" height="20" />
                      <span>Online tuition</span>
                  </li>
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle" className="text-black-600" width="20" height="20" />
                      <span>contract</span>
                  </li>
              </ul>
              <div className="mt-3">
                  <SimpleTable columns={columns} data={tableData} />
              </div>
          </div>
        </InformationCard>
      </div>
      <div className="mb-5 p-3 border rounded-md">  
        <InformationCard title="Tution 1">
          <div className="bg-white rounded-lg p-6 shadow-md border relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center mt-2">
                    <i className="fi fi-rr-age text-lg"></i>
                  </span>
                  <span>Name</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 11</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center mt-2">
                    <Icon icon="icons8:gender" width="24" height="24" />
                  </span>
                  <span>Gender</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> Male</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center">
                      <img src={classIcon} alt="class icon" width={24} height={24} />
                  </span>
                  <span>Amount</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 13500 / Month</span>
              </div>
              <div className="flex items-center justify-start gap-10 text-black-500 flex-wrap md:flex-nowrap">
                <span className="flex items-center gap-2 min-w-[120px]">
                  <span className="flex items-center">
                    <Icon icon="bx:calendar" width="24" height="24" />
                  </span>
                  <span>slot (days)</span>
                </span>
                <span>:</span>
                <span className="text-blue-950"> 11</span>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-200 border-dashed my-5" />
          <div>
              <h4 className="capitalize font-medium lg:text-base tex-base">taught subjects</h4>
          </div>
          <div className="mt-2">
              <ul className="list-none pl-0 md:space-x-20 md:flex md:flex-wrap items-center justify-start">
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle-dot-filled" className="text-success-600" width="20" height="20" />
                      <span>Home tuition</span>
                  </li>
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle" className="text-black-600" width="20" height="20" />
                      <span>Online tuition</span>
                  </li>
                  <li className="flex items-center gap-2 ">
                      <Icon icon="ix:circle" className="text-black-600" width="20" height="20" />
                      <span>contract</span>
                  </li>
              </ul>
              <div className="mt-3">
                  <SimpleTable columns={columns} data={tableData} />
              </div>
          </div>
          <hr className="border-t border-gray-200 border-dashed my-5" />
          <div>
              <h4 className="capitalize font-medium lg:text-base tex-base">installments</h4>
              <div className="mt-3">
                  <SimpleTable columns={columns} data={tableData} />
              </div>
          </div>
        </InformationCard>
      </div>
    </>
  );
};

export default TutionInformation;
