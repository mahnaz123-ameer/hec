import React from 'react'

const SwitchCheckBox = ({handleChange, status}) => {
  return (
    <div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input onChange={handleChange} id="switch" type="checkbox" className="peer sr-only" />
        <label htmlFor="switch" className="hidden"></label>
        <div className={`peer h-6 w-11 rounded-full border ${status ? "bg-success-500" : "bg-slate-200"} after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-success-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300`}></div>
        </label>
    </div>
  )
}

export default SwitchCheckBox
