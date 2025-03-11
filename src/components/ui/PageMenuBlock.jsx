import React, { useState } from 'react'
import Card from './Card'
import { Icon } from '@iconify/react';

const PageMenuBlock = ({menuList, onclickChangeMenu}) => {
  const [activeMenu, setActiveMenu] = useState("personal_information");

  const onclickChanges = (id) => {
    onclickChangeMenu(id);
    setActiveMenu(id);
  };
  return (
    <>
      <Card className="bg-[#F8FCFF]">
              <div className="space-y-2">
                {menuList && menuList.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between space-x-3 p-4 rounded-lg ${item.id === activeMenu ? "text-white bg-primary-900 " : "text-black-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700" } cursor-pointer`}
                      onClick={() => onclickChanges(item.id)}
                    >
                      <span className="text-sm">{item.title}</span>
                      <Icon icon="material-symbols:arrow-forward" />
                    </div>
                  )
                })}
              </div> 
            </Card>
    </>
  )
}

export default PageMenuBlock
