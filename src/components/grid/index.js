import React from 'react';
import { getObjectPropertyByString } from 'react-data-browser';
import { GridView, GridItem } from './styles';
import fieldReducer from './fieldReducer';
import { Image } from './styles';
import { Checkbox } from '../formElements';
import { OptionsMenu } from './components/OptionsMenu';
import { IconButton } from '../buttons';

export const TableGrid = ({
  items,
  visibleColumns,
  checkboxState,
  checkboxToggle,
}) => {
  return (
    <GridView>
      {items.map((row, key) => (
        <GridItem key={key} checked={checkboxState(row.id)}>
          {checkboxState(row.id) && (
            <Checkbox
              id={row.id}
              checked={checkboxState(row.id)}
              onChange={() => checkboxToggle({ rowId: row.id })}
            />
          )}
          <OptionsMenu
            width={40}
            checked={checkboxState(row.id)}
            render={({ isOpen, ...props }) => (
              <IconButton {...props} color={isOpen ? 'blue' : '#999'}>
                more_horiz
              </IconButton>
            )}
          />
          {row && row.album && <Image src={row.album.url} alt="" />}
          {visibleColumns.map(({ label, sortField, isLocked }, index) => (
            <div key={sortField}>
              {`${label}: `}
              {fieldReducer(
                getObjectPropertyByString(row, sortField),
                sortField,
              )}
            </div>
          ))}
        </GridItem>
      ))}
    </GridView>
  );
};
