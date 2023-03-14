import React from "react";
import { Input, Space } from "antd";
import { SpaceCompactItemContext } from "antd/es/space/Compact";

const Search = Input.Search;

export const TitleSearch = ({ onSearch, ...props }) => (
  <div {...props}  >
    <Search
      placeholder="Search"
      onSearch={onSearch}
     style={{ paddingBlock:20 ,align:'top'}}
    
    />
  </div>
);
