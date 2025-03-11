import React from 'react';
import { Icon } from '@iconify/react';

const StudentInfoAddressCard = ({ data, onEdit }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-xl border relative">
      <div className="flex justify-end items-end mb-3 md:absolute right-6 top-6">
        <button 
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
        >
          <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">Division</h3>
          <p className="text-black-700">{data.division}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">District</h3>
          <p className="text-black-700">{data.district}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">Area</h3>
          <p className="text-black-700">{data.area}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">Address</h3>
          <p className="text-black-700">{data.address}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoAddressCard;
