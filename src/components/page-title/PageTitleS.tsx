import styled from "styled-components";


export const PageTitleS = styled.div`
  display: flex;
  align-items: center;
  padding-left: 45px;
  width: 100%;
  height: 80px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.textColor};
`;