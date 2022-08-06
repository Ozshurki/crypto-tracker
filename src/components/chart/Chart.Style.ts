import styled from "styled-components";

export const ChartS = styled.div`

  width: 65%;
  margin: 0 auto;
  
  & .btns-container{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 500px){
    margin: 25px 0;
    width: 90%;
  }
`;