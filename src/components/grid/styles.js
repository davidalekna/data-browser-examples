import styled from 'styled-components';

export const GridView = styled.section`
  display: grid;
  overflow-x: auto;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GridItem = styled.div`
  height: 240px;
  background: #ddd;
  padding: 10px;
`;
