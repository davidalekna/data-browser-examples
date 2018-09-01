import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: white;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Title = styled(FlexRow)`
  justify-content: center;
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
`;
