import React from 'react';
import Downshift from 'downshift';
import { RowItem } from '../styles';
import HeadOptionsCellMenu from './HeadOptionsCellMenu';
import { withDataBrowser } from 'react-data-browser';
import { ItemOptionsMenu } from '../../globals';

export const RowOptionsCell = withDataBrowser(
  ({ dataBrowser, id, width, render, head, checked }) => {
    const menu = props =>
      head ? (
        <HeadOptionsCellMenu
          switchViewType={dataBrowser.switchViewType}
          viewType={dataBrowser.viewType}
          {...props}
        />
      ) : (
        <ItemOptionsMenu {...props} />
      );
    return (
      <Downshift>
        {({ isOpen, toggleMenu }) => (
          <div style={{ flex: '0 0 auto', position: 'relative' }}>
            <RowItem style={{ width }} flex="0 0 auto" checked={checked}>
              {render({
                id: `row-options-cell-${id}`,
                isOpen,
                onClick: toggleMenu,
                'data-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': isOpen,
              })}
              {isOpen && menu({ onClick: toggleMenu })}
            </RowItem>
          </div>
        )}
      </Downshift>
    );
  },
);
