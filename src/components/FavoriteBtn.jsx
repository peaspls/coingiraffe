import React from 'react';
import { Icon } from '@iconify/react';

export default function FavoriteBtn(props) {
  const { onClick, isOn } = props;

  return (
    <button
      className="group flex items-center justify-center relative p-4 origin-center hover:bg-gray-700 hover:bg-opacity-5 rounded-full"
      aria-label="Add to favorites"
      onClick={onClick}
      data-ison={isOn ? "true" : "false"}
    >
      <Icon
        icon="tabler:star-filled"
        width="16"
        height="16"
        className="text-yellow-500 absolute group-data-[ison=false]:opacity-0 group-data-[ison=true]:animate-pop"
      />
      <Icon
        icon="tabler:star"
        width="16"
        height="16"
        className="text-gray-500 absolute group-data-[ison=true]:opacity-0 group-data-[ison=false]:animate-push"
      />
    </button>
  );
}