import styled from 'styled-components';

export const ControlledInput = styled.input`
  font-size: 1em;
  font-weight: 200;
  border: 1px solid #eee;
  padding: 3px;
  font-style: italic;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: ${({ position }) => (position ? position : 'absolute')};
  cursor: pointer;
`;
