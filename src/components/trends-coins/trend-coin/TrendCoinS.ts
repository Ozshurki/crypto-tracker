import styled from "styled-components";

export const TrendCoinS = styled.div`

  display: flex;
  flex-direction: column;
  height: 160px;
  width: 200px;
  padding: 5px;
  margin: 20px;
  border: 1px solid #E6ECF8;
  box-shadow: 0 0 5px 3px #E6ECF8;
  border-radius: 10px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  
  :hover {
    transform: scale(1.1);
  }

  & .trend-coin{
    display: flex;
    width: 100%;
    height: 35%;

    & .trend-stats{
      display: flex;
      width: 65%;
      
      & .trend-icon{
        width: 40%;
      
        & img{
          width: 100%;
          height: 100%;
        }
      }
      
      & .trend-details{
        padding: 5px;
        width: 60%;
      }
    }
    
    & .trend-percentage{
      padding: 5px;
    }
    
    & .trend-chart{
      width: 35%;
    }
  }
  
  & .trend-chart{
    width: 100%;
    height: 65%;
  
   & img{
     padding: 3px;
     width: 100%;
     height: 100%;
   }
  }
`;