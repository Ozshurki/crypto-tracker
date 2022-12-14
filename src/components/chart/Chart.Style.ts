import styled from "styled-components";

export const ChartS = styled.div`

  width: 80%;
  margin: 0 auto;
  
  & .btns-container{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 500px){
    margin: 25px 0;
    width: 90%;
  }
`;