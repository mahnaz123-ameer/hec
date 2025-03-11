import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from "react";

const ActionButtonCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);


  const actionViewButton = (value) => {
  }

  return (
    <button onClick={(e) => actionViewButton(row)} className="flex justify-center items-center border bg-zinc-200 h-8 w-8 rounded-md">
      <Icon icon="heroicons:eye" className="h-6 w-6 text-fuchsia-900"/>
    </button>
  );
};
export default ActionButtonCell;
