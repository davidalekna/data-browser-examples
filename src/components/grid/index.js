import React from 'react';
import { getObjectPropertyByString } from 'react-data-browser';
import { GridView, GridItem } from './styles';

export const TableGrid = ({ items, visibleColumns }) => {
  return (
    <GridView>
      {items.map((row, key) => (
        <GridItem key={key}>
          {visibleColumns.map(({ label, sortField, isLocked }, index) => (
            <div key={sortField}>{`${label} ${getObjectPropertyByString(
              row,
              sortField,
            )}`}</div>
          ))}
        </GridItem>
      ))}
    </GridView>
  );
};
