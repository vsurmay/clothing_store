import styled from "styled-components";

const GrayButton = styled.button`
  padding: 10px 30px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #828282;
  background: #f0f2f2;
  border: 2px solid #c4c4c4;
  transition: all 0.4s ease;

  &:hover {
    background: rgb(227 227 227);
    border: 2px solid rgb(114 114 114);
  }
`;

export default GrayButton;
