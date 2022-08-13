import styled from "styled-components";

type SelectedType = {
    selected: boolean;
    isDarkTheme: boolean;
}

export const SelectedButtonsS = styled.button<SelectedType>`

  width: auto;
  padding: 5px 10px;
  height: auto;
  border: 1px solid black;
  background-color: ${(props) => props.isDarkTheme ? "black" : "white"};
  background-color: ${(props) => props.selected && "white"};
  border: ${(props) => props.isDarkTheme ? "1px solid #7510F7" : "white"};
  color: ${(props) => props.theme.textColor};
  color: ${(props) => props.selected && "black"};
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;