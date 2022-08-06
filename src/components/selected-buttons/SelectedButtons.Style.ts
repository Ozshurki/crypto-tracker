import styled from "styled-components";

type SelectedType ={
    selected: boolean;
}

export const SelectedButtonsS = styled.button<SelectedType>`
  width: auto;
  padding: 5px 10px;
  height: auto;
  border: 1px solid black;
  background-color: ${(props) => props.selected ? "#EEBC1D" : "white"};
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: #d9d9d9;
  }
`;