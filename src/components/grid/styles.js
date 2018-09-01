import styled from 'styled-components';

export const GridView = styled.section`
  display: grid;
  overflow-x: auto;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GridItem = styled.div`
  position: relative;
  height: 260px;
  background: ${({ checked }) => (checked ? 'rgba(66,134,244,0.3)' : ' #ddd')};
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
`;
