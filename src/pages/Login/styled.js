import styled from 'styled-components';

export const Title = styled.h1`
  color: brown;
  background: ${(props) => (props.isRed ? 'red' : 'beige')};
  small {
    font-size: 10pt;
    margin-left: 15px;
    color: green;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: brown;
  margin-top: 15px;
`;
