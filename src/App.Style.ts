import styled from "styled-components";

export const AppS = styled.div`

  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: all .5s;
  background-size: cover;
  background-color: ${props => props.theme.backgroundColor};
`