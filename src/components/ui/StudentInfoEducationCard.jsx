import React from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";

const StudentInfoEducationCard = ({ indexNumber, key, data, onEdit }) => {
  return (
    <div className="border-b border-dashed mb-5 pb-5 relative">
      <div className="flex justify-between items-center mb-5 gap-5">
        <h4 className="card-title md:whitespace-nowrap">
          Education {indexNumber + 1}
        </h4>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 w-full hidden md:block"></div>
        <Button
          onClick={() => onEdit(key)}
          className=" bg-primary-500 text-white"
        >
          <div className="flex items-center gap-2">
            <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
            <span>Edit</span>
          </div>
        </Button>
      </div>
      <div className="flex justify-start items-center gap-5">
        <div>
          <img
            src="https://shorturl.at/86hTM"
            alt="education"
            className="w-10 h-10"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-2 leading-none">
            EXAM TITLE
          </h3>
          <p className="text-sm text-black-950">EXAM DESCRIPTION</p>
        </div>
      </div>
      <div className="flex justify-end items-end mb-3 md:absolute right-6 top-6">
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-3">
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            EXAM TITLE
          </h3>
          <p className="text-black-700">{data.examTitle}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            INSTITUTE
          </h3>
          <p className="text-black-700">{data.institute}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            DEPARTMENT
          </h3>
          <p className="text-black-700">{data.department}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            COMPLETION STATUS
          </h3>
          <p className="text-black-700">{data.completionStatus}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            GRADE
          </h3>
          <p className="text-black-700">{data.grade}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1 leading-none">
            PASSING YEAR
          </h3>
          <p className="text-black-700">{data.passingYear}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoEducationCard;
