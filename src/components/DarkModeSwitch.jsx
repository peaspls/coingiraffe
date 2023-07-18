import React from 'react';
import { Icon } from '@iconify/react';

export default function DarkModeSwitch(props) {
  const { onChange, isOn } = props;

  return (
    <label className="bg-slate-200 w-[44px] h-[20px] rounded-[50px] border-slate-300 border relative p-1 cursor-pointer flex justify-between items-center">
      <input type="checkbox" defaultChecked={isOn} className="peer hidden" onChange={onChange} />
      <Icon
        icon="tabler:sun-filled"
        className="bg-sky-900 text-yellow-200 p-[4px] w-[30px] h-[30px] left-[-4px] top-[-6px] transition-all peer-checked:translate-x-[20px] border-slate-200 peer-checked:opacity-0 absolute border rounded-full"
      />
      <Icon
        icon="tabler:moon-filled"
        className="bg-sky-900 text-yellow-200 p-[4px] w-[30px] h-[30px] left-[-4px] top-[-6px] transition-all peer-checked:translate-x-[20px] border-slate-200 opacity-0 peer-checked:opacity-100 absolute border rounded-full"
      />
    </label>
  );
}