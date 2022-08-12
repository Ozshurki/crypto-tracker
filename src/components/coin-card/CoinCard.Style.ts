import styled from "styled-components";

export const CoinCardS = styled.div`

  display: flex;
  height: 270px;
  width: 200px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.trendBackgroundColor};
`;