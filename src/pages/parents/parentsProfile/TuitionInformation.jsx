import Card from '@/components/ui/Card'
import { Icon } from '@iconify/react'
import React from 'react'
import InformationCard from '@/components/ui/InformationCard'
import medalImage from '../../../assets/images/all-img/gold-medal-1.png';
import profileImage from '../../../assets/images/all-img/tutor_image_with_rattings.png';
import ProgressBarCustom from '@/components/ui/ProgressBarCustom';

const TuitionInformation = () => {
  const data = {
    id: 1,
    name: "John Doe",
    phone: "01234-567890",
    reg_date: "Jan 22, 2021",
    email: "user133@gmail.com",
    code: "GM0ER0FSA4H",
  };

  return (
    <InformationCard title="Tutor 1">
      
      <div className="flex flex-col md:flex-row items-stretch gap-4 relative">
  {/* Tutor Profile Card */}
  <div className="p-4 shadow-md bg-white rounded-md border border-gray-200 w-full md:flex-1 relative flex flex-col">
    <div className="flex items-start gap-3">
      <div>
        <img src={profileImage} alt="Tutor Profile" width={110} />
      </div>
      <div className="w-full">
        <div className="flex items-center gap-1 mb-2">
          <img src={medalImage} alt="medal" className="w-8 h-8" />
          <h4 className="text-lg font-medium text-gray-900">{data.name}</h4>
        </div>
        <div className="w-[68px] mb-2">
          <span className="flex items-center gap-1 py-2 px-2 text-white text-xs bg-primary-500 rounded-md justify-center">
            <Icon icon="heroicons:star-solid" />
            <span>3.45</span>
          </span>
        </div>
        <ProgressBarCustom title="Profile Setup" value={60} showValue={true} />
      </div>
    </div>

    <div className="mt-3 space-y-3 flex-grow">
      {data.phone && (
        <div className="flex items-center gap-3 text-gray-500 flex-wrap md:flex-nowrap">
          <span className="flex items-center gap-2">
            <Icon icon="solar:phone-linear" className="w-5 h-5" />
            <span>Primary Number</span>
          </span>
          <span>:</span>
          <span>{data.phone}</span>
        </div>
      )}
      {data.code && (
        <div className="flex items-center gap-3 text-gray-500 flex-wrap md:flex-nowrap">
          <span className="flex items-center gap-2">
            <Icon icon="material-symbols-light:code" className="w-5 h-5" />
            <span>Code</span>
          </span>
          <span>:</span>
          <span>{data.code}</span>
        </div>
      )}
    </div>
  </div>
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 bg-[length:2px_6px] bg-[linear-gradient(to_bottom,_transparent_50%,_gray-200_50%)]"></div>
  <div className="p-4 shadow-md bg-white rounded-md border border-gray-200 w-full md:flex-1 relative flex flex-col">
    <h3 className="font-bold text-lg mb-2">Ameerah Arnaz</h3>
    <div className="space-y-2 flex-grow">
      <p className="flex items-center">
        <Icon icon="mdi:human-male-female" className="mr-2" />
        <span>Age :</span> 11
      </p>
      <p className="flex items-center">
        <Icon icon="mdi:gender-female" className="mr-2" />
        <span>Gender :</span> Female
      </p>
      <p className="flex items-center">
        <Icon icon="mdi:currency-bdt" className="mr-2" />
        <span>Amount :</span> 13,500 / Month
      </p>
      <p className="flex items-center">
        <Icon icon="mdi:calendar-clock" className="mr-2" />
        <span>Slot (Days) :</span> 10
      </p>
      <p className="flex items-center">
        <Icon icon="mdi:calendar-start" className="mr-2" />
        <span>From :</span> Mar 17, 2020
      </p>
    </div>
  </div>
</div>

<div className="mt-4 border-t-2 border-dashed border-gray-150"></div>


      <h3 className="text-lg font-semibold mt-6">Taught Subjects</h3>
      <div className="flex gap-4 my-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="tuition" defaultChecked /> Home Tuition
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="tuition" /> Online Tuition
        </label>
      </div>

      {/* Subject Fees Table */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">MEDIUM</th>
              <th className="p-2 border">SUBJECT</th>
              <th className="p-2 border">CLASS</th>
              <th className="p-2 border">FEES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border text-center">English Version</td>
              <td className="p-2 border text-center">Chemistry 1st</td>
              <td className="p-2 border text-center">IX - X</td>
              <td className="p-2 border text-center">7,000 / Month</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">English Version</td>
              <td className="p-2 border text-center">Higher Math</td>
              <td className="p-2 border text-center">IX - X</td>
              <td className="p-2 border text-center">6,500 / Month</td>
            </tr>
          </tbody>
        </table>
      </div>
    </InformationCard>
  );
};

export default TuitionInformation;
