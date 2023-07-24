import React from "react";
import { Icon } from "@iconify/react";

export default function DarkModeSwitch(props) {
  const { onChange, isOn } = props;

  const toggle = (event) => {
    if (event.code == "Space") {
      event.preventDefault();
      onChange();
    }
  };

  return (
    <label
      tabIndex="0"
      onKeyDown={toggle}
      aria-checked={isOn}
      aria-label
      role="switch"
      className="group relative flex h-[20px] w-[40px] cursor-pointer items-center justify-between rounded-[50px] border border-slate-300 bg-stone-400 p-1 hover:brightness-[110%] dark:hover:brightness-110"
    >
      <input
        type="checkbox"
        defaultChecked={isOn}
        tabIndex="-1"
        className="hidden"
        onChange={onChange}
      />
      <Icon
        icon="tabler:sun-filled"
        className="absolute left-[-4px] top-[-6px] h-[30px] w-[30px] rounded-full border border-slate-200 bg-neutral-600 p-[4px] text-stone-50 transition-all group-aria-[checked=true]:translate-x-[16px] group-aria-[checked=true]:opacity-0"
      />
      <Icon
        icon="tabler:moon-filled"
        className="absolute left-[-4px] top-[-6px] h-[30px] w-[30px] rounded-full border border-stone-400 bg-stone-50 p-[4px] text-neutral-600 opacity-0 transition-all group-aria-[checked=true]:translate-x-[16px] group-aria-[checked=true]:opacity-100"
      />
    </label>
  );
}
