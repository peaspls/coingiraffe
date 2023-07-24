import React from "react";
import { Icon } from "@iconify/react";

export default function FavoriteBtn(props) {
  const { onClick, isOn } = props;

  return (
    <button
      className="group relative flex origin-center items-center justify-center rounded-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Add to favorites"
      onClick={onClick}
      data-ison={isOn ? "true" : "false"}
    >
      <Icon
        icon="tabler:star-filled"
        width="18"
        height="18"
        className="absolute text-yellow-500 group-data-[ison=true]:animate-push group-data-[ison=false]:opacity-0"
      />
      <Icon
        icon="tabler:star"
        width="18"
        height="18"
        className="absolute text-gray-600 group-data-[ison=false]:animate-push group-data-[ison=true]:opacity-0"
      />
    </button>
  );
}
