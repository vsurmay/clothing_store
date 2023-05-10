import styled from "styled-components";

type FillButtonProps = {
  formButton?: boolean;
};

const FillButton = styled.button<FillButtonProps>`
  padding: ${(props) => (props.formButton ? "7px 15px" : "10px 30px")};
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000000;
  transition: all 0.5s ease;
  border-radius: ${(props) => (props.formButton ? "5px" : "unset")};

  &:hover {
    background-color: #eb5757;
  }
`;

export default FillButton;
