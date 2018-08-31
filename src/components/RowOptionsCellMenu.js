import React from "react";
import { CellWithMenu } from "../styles";

const RowOptionsCellMenu = ({ onClick }) => (
  <CellWithMenu top={34} right={1}>
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <span>Menu Name</span>
      <ul onClick={onClick}>
        <li>option 1</li>
        <li>option 1</li>
        <li>option 1</li>
        <li>option 1</li>
        <li>option 1</li>
        <li>option 1</li>
        <li>option 1</li>
      </ul>
    </div>
  </CellWithMenu>
);

export default RowOptionsCellMenu;
