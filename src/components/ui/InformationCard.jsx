import React from 'react'
import Button from './Button'
import { Children } from 'react';

const InformationCard = ({children, actionButton, title}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-5 gap-5">
        <h4 className="card-title md:whitespace-nowrap">{title}</h4>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 w-full hidden md:block"></div>
        {actionButton}
      </div>
      {children}
    </>
  )
}

export default InformationCard
