import React from 'react';
import { Icon } from '@iconify/react';

const StudentInfoCard = ({ data, onEdit }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-xl border">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            {data.profileImage && (
              <img 
                src={URL.createObjectURL(data.profileImage)} 
                alt={data.name} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-xl font-medium text-black-700">{data.name}</h2>
            <p className="text-gray-600">Student</p>
          </div>
        </div>
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
          <h3 className="text-sm font-medium text-black-950 mb-1">PHONE NUMBER</h3>
          <p className="text-black-700">{data.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">EMAIL ADDRESS</h3>
          <p className="text-black-700">{data.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">DATE OF BIRTH</h3>
          <p className="text-black-700">{data.dateOfBirth}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">GENDER</h3>
          <p className="text-black-700">{data.gender}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">FATHER's NAME</h3>
          <p className="text-black-700">{data.fatherName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">FATHER PHONE</h3>
          <p className="text-black-700">{data.fatherPhone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">MOTHER's NAME</h3>
          <p className="text-black-700">{data.motherName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">MOTHER PHONE</h3>
          <p className="text-black-700">{data.motherPhone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">CLASS</h3>
          <p className="text-black-700">{data.class}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-black-950 mb-1">REGISTER DATE</h3>
          <p className="text-black-700">{data.registrationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
