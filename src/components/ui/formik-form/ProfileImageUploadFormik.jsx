import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Icon } from '@iconify/react';
import { useField } from 'formik';

const ProfileImageUploadFormik = ({ name, required = false }) => {
  const [field, meta, helpers] = useField(name);
  const isError = !field.value && meta.touched && meta.error;

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      const file = acceptedFiles[0];
      helpers.setValue(file);
      helpers.setTouched(true);
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleDelete = () => {
    helpers.setValue(null);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1 hidden">
        PROFILE PHOTO {required && <span className="text-red-500">*</span>}
      </label>
      {field.value ? (
        <div className={`border border-dashed ${isError ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-lg p-4`}>
          <div className="flex items-end gap-4 justify-between">
            <div className="flex items-center flex-col gap-4">
              <div className="h-[100px] w-[100px] rounded-full overflow-hidden border-4 border-slate-100">
                <img 
                  src={URL.createObjectURL(field.value)} 
                  alt="Profile" 
                  className='h-[100px] w-[100px] object-cover'
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-600">{field.value.name} (40X40px)</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-between items-baseline">
                <button 
                  type="button"
                  className="px-4 py-2 text-sm text-blue-600 rounded-lg flex items-center gap-2 border border-blue-600 hover:border-blue-200"
                  onClick={() => getInputProps().ref.click()}
                >
                  <Icon icon="heroicons:arrow-path" className="w-4 h-4" />
                  Change
                </button>
                <button 
                  type="button"
                  onClick={handleDelete}
                  className="px-4 py-2 text-sm text-red-600 rounded-lg flex items-center gap-2 border border-red-600 hover:border-red-200"
                >
                  <Icon icon="heroicons:trash" className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-slate-200 dark:border-slate-700'} rounded-md p-5 transition-all duration-300 ease-in-out cursor-pointer hover:border-primary-500 ${isError ? 'border-red-500' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col gap-5 justify-center items-center">
              <div>
                <Icon icon="icons8:upload-2" width="32" height="32" className={isDragActive ? 'text-primary-500' : ''} />
              </div>
              <div>
                <span className="text-sm text-blue-400">Click to upload</span>
                <span className="text-sm text-black dark:text-white ml-1">or</span>
                <span className="text-sm text-black dark:text-white ml-1">drag and drop</span>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-secondary-300 text-xs">Accepted formats: JPEG, JPG, PNG, GIF (max 5MB)</span>
          </div>
        </div>
      )}
      {isError && (
        <div className="text-red-500 text-base mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default ProfileImageUploadFormik;
