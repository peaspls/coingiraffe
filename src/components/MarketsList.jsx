import React from "react";
import MediaQuery from "react-responsive";
import MarketsListSm from "./MarketListSm";
import MarketsListMd from "./MarketListMd";

export default function MarketsList(props) {
  return (
    <>
      <MediaQuery maxWidth={810}>
        <MarketsListSm {...props} />
      </MediaQuery>

      <MediaQuery minWidth={810}>
        <MarketsListMd {...props} />
      </MediaQuery>
    </>
  );
}
