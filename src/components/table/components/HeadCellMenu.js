import React from "react";
import { withDataBrowser } from "react-data-browser";
import { CellWithMenu, HeadCellMenuPopup } from "../styles";
import pipe from "ramda/src/pipe";

const HeadCellMenu = ({ dataBrowser, selected, toggleMenu, activeLabel }) => {
  const sortField = `${selected.sortField}`;
  return (
    <CellWithMenu left={0} top={32}>
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <span>order</span>
        <ul>
          <li
            onClick={pipe(
              toggleMenu,
              () =>
                dataBrowser.sortData({
                  sortField,
                  sortDirection: "asc"
                })
            )}
          >
            {dataBrowser.activeSort(sortField, "asc")
              ? "🌂 ascending"
              : "ascending"}
          </li>
          <li
            onClick={pipe(
              toggleMenu,
              () =>
                dataBrowser.sortData({
                  sortField,
                  sortDirection: "dsc"
                })
            )}
          >
            {dataBrowser.activeSort(sortField, "dsc")
              ? "🌂 descending"
              : "descending"}
          </li>
        </ul>
      </div>
      {!selected.isLocked &&
        dataBrowser.offsetColumns().length > 0 && (
          <HeadCellMenuPopup>
            <span>show</span>
            <ul>
              {dataBrowser.offsetColumns().map((column, i) => (
                <li
                  key={i}
                  style={{ color: column.offset && "#ccc" }}
                  onClick={
                    !column.offset
                      ? pipe(
                          toggleMenu,
                          () =>
                            dataBrowser.switchColumns({
                              from: selected.sortField,
                              to: column.sortField
                            })
                        )
                      : undefined
                  }
                >
                  {selected.label === column.label && `🦄`}
                  {column.label}
                </li>
              ))}
            </ul>
          </HeadCellMenuPopup>
        )}
    </CellWithMenu>
  );
};

export default withDataBrowser(HeadCellMenu);
