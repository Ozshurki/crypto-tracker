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
    
    & > :nth-child(2){
      margin: 0 auto;
      align-self: center;
    }

    & .coin-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-right: 10px;
      width: 25%;
      min-height: 550px;
      border-right: 1px solid #E6ECF8;
      font-family: 'Poppins', sans-serif;

      & .coin-img {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 250px;
        max-width: 300px;

        & img {
          width: 40%;
          height: 50%;
        }
      }

      & div {
        width: 100%;
        height: auto;
      }

      & .coin-details {
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 1.1rem;

        & p {
          margin: 20px 0;
        }

        & div {
          margin-top: 5px;
        }
      }
    }
  }
  
  @media (max-width: 500px){
    & .content{
      flex-direction: column;
      align-items: center;

      & .coin-info{
        width: 80%;
        border-right: 0;
        border-bottom: 1px solid #E6ECF8;
        padding-bottom: 30px;
      }
    }
  }
`;