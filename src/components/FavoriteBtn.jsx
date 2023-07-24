import React from 'react';
import { Icon } from '@iconify/react';

export default function FavoriteBtn(props) {
  const { onClick, isOn } = props;

  return (
    <button
      className='hover:bg-gray-100 dark:hover:bg-gray-800 group flex items-center justify-center relative p-5 origin-center rounded-full'
      aria-label='Add to favorites'
      onClick={onClick}
      data-ison={isOn ? 'true' : 'false'}>
      <Icon
        icon='tabler:star-filled'
        width='18'
        height='18'
        className='text-yellow-500 absolute group-data-[ison=false]:opacity-0 group-data-[ison=true]:animate-push'
      />
      <Icon
        icon='tabler:star'
        width='18'
        height='18'
        className='text-gray-600 absolute group-data-[ison=true]:opacity-0 group-data-[ison=false]:animate-push'
      />
    </button>
  );
}
