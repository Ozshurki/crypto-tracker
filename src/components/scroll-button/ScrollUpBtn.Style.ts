import styled from "styled-components";

export const ScrollUpBtnS = () => styled.div`
  
  position: fixed;
  width: 35px;
  height: 35px;
  right: 20px;
  bottom: 40px;
  z-index: 1;
  cursor: pointer;
  border-radius: 55%;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
