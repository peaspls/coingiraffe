import React from 'react';
import { Icon } from '@iconify/react';

export default function DarkModeSwitch(props) {
  const { onChange, isOn } = props;

  const toggle = (event) => {
    if (event.code == 'Space') {
      event.preventDefault();
      onChange();
    }
  };

  return (
    <label
      tabIndex='0'
      onKeyDown={toggle}
      aria-checked={isOn}
      aria-label
      role='switch'
      className='group hover:brightness-[110%] dark:hover:brightness-110 bg-stone-400 w-[40px] h-[20px] rounded-[50px] border-slate-300 border relative p-1 cursor-pointer flex justify-between items-center'>
      <input
        type='checkbox'
        defaultChecked={isOn}
        tabIndex='-1'
        className='hidden'
        onChange={onChange}
      />
      <Icon
        icon='tabler:sun-filled'
        className='bg-neutral-600 text-stone-50 p-[4px] w-[30px] h-[30px] left-[-4px] top-[-6px] transition-all group-aria-[checked=true]:translate-x-[16px] border-slate-200 group-aria-[checked=true]:opacity-0 absolute border rounded-full'
      />
      <Icon
        icon='tabler:moon-filled'
        className='bg-stone-50 text-neutral-600 p-[4px] w-[30px] h-[30px] left-[-4px] top-[-6px] transition-all group-aria-[checked=true]:translate-x-[16px] border-stone-400 opacity-0 group-aria-[checked=true]:opacity-100 absolute border rounded-full'
      />
    </label>
  );
}
