import React from 'react';

export default function DarkModeSwitch(props) {
  const { onChange, isOn } = props;

  return (
    <div>
      <label className="bg-white w-[48px] h-[24px] rounded-[50px] border-slate-400 border relative p-1 cursor-pointer flex justify-between items-center">
        <input type="checkbox" defaultChecked={isOn} className="peer hidden" onChange={onChange} />
        <span className="bg-slate-900 w-[18px] h-[18px] absolute left-[2px] top-[2px] rounded-full transition-transform peer-checked:translate-x-[24px]"></span>
      </label>
    </div>
  );
}