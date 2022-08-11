import styled from "styled-components";

export const TrendCoinS = styled.div`

  display: flex;
  flex-direction: column;
  height: 160px;
  width: 200px;
  padding: 5px;
  margin: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 10px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
  background-color: ${props => props.theme.trendBackgroundColor};
  color: ${props => props.theme.textColor};
  font-family: 'Poppins', sans-serif;
  
  :hover {
    transform: scale(1.1);
  }
  
  & a{
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }

  & .trend-coin{
    display: flex;
    width: 100%;
    height: 35%;

    & .trend-stats{
      display: flex;
      width: 100%;
      
      & .trend-icon{
        width: 26%;
      
        & img{
          width: 80%;
          height: 80%;
          border-radius: 3px;
        }
      }
      
      & .trend-details{
        padding: 5px;
        width: 74%;
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
    height: 85%;
  
   & img{
     padding: 3px;
     width: 100%;
     height: 100%;
   }
  }
`;