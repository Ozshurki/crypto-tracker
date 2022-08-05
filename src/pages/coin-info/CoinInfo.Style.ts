import styled from "styled-components";

export const CoinInfoS = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  
  & .content {
    padding: 0 10px;
    width: 100%;
    height: 100%;
    display: flex;
      
    & .coin-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 35%;
      min-height: 640px;
      border-right: 1px solid #E6ECF8;
        
      & .coin-img{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 350px;
        max-width: 500px;
        
        & img{
          width: 50%;
          height: 50%;
        }
      }
      
      & div{
        width: 100%;
        height: auto;
      }
      
      & .coin-details{
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 1.2rem;
      }
    }
  }


`;