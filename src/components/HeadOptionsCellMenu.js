import React from "react";
import { CellWithMenu } from "../styles";

const HeadOptionsCellMenu = ({ switchViewType, viewType, onClick }) => (
  <CellWithMenu top={34} right={1}>
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <span>Menu Name</span>
      <ul onClick={onClick}>
        <li onClick={() => switchViewType({ viewType: "LIST_VIEW" })}>
          {viewType === "LIST_VIEW" && "🦄"}
          show list
        </li>
        <li onClick={() => switchViewType({ viewType: "GRID_VIEW" })}>
          {viewType === "GRID_VIEW" && "🦄"}
          show grid
        </li>
      </ul>
    </div>
  </CellWithMenu>
);

export default HeadOptionsCellMenu;
