import styled, { css } from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const Table = styled(FlexCol)`
  position: relative;
  overflow: none;
  height: 100%;
  width: 100%;
`;

export const TableBody = styled(FlexCol)`
  flex: 1 1 auto;
  overflow-x: auto;
  padding: 0 5px;
`;

export const FixedTableHead = styled(FlexRow)`
  flex: 0 0 auto;
  height: auto;
  background: white;
  color: #777;
  border-bottom: 1px solid #ddd;
  padding: 0 5px;
  font-size: 12px;
`;

export const HeadRowItem = styled.div`
  display: flex;
  padding: 10px;
  text-transform: uppercase;
`;

export const Row = styled(FlexRow)`
  flex: 0 0 auto;
  border-bottom: 1px solid #eee;
  &:hover {
    background: ${({ selectable }) => selectable && '#4286f4'};
    color: white;
  }
`;

export const RowItem = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  height: 46px;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: ${({ checked }) => (checked ? 'rgba(242,242,242,0.5)' : null)};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`;

export const CellWithMenu = styled.div`
  position: absolute;
  min-height: 120px;
  z-index: 10;
  outline: none;
  border: 1px dashed red;
  background: white;
  width: ${({ width }) => (width ? `${width}px` : '170px')};
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  top: ${({ top }) => (top ? `${top}px` : null)};
  right: ${({ right }) => (right ? `${right}px` : null)};
  left: ${({ left }) => (left ? `${left}px` : null)};

  ul {
    margin: 0;
    padding: 0 0 10px 0;
  }

  ul > li {
    text-transform: capitalize;
    list-style: none;
    display: flex;
    align-items: center;
    height: 28px;
    padding: 18px 35px;
    font-size: 14px;
    color: #222;
    font-weight: 400;
    cursor: pointer;
    white-space: nowrap;
  }

  ul > li:hover {
    background: #4286f4;
    color: white;
  }

  span {
    display: block;
    color: #444;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 11px;
    padding: 18px 35px 10px 35px;
  }
`;

export const HeadCellMenuPopup = styled.ul`
  max-height: 230px;
  overflow-x: auto;
`;

export const TableFooter = styled.div`
  display: flex;
  align-self: center;
  flex: 0 0 auto;
  height: 36px;
`;

export const Placeholder = styled(FlexRow)`
  flex: 0 0 auto;
  width: ${({ w }) => (w ? `${w}px` : '20px')};
  height: 20px;
  background: #f2f2f2;
  border-radius: 4px;
  ${({ loading }) =>
    loading &&
    css`
      @keyframes move {
        0% {
          background-position: -268px 0;
        }
        100% {
          background-position: 268px 0;
        }
      }
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: move;
      animation-timing-function: linear;
      background: linear-gradient(0.35turn, #f2f2f2 8%, #ddd 18%, #f2f2f2 33%);
      background-size: 400px 20px;
      position: relative;
    `};
`;
