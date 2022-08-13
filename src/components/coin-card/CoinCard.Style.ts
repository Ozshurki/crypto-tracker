import styled from "styled-components";

interface coinCardInt{
    color :string;
}

export const CoinCardS = styled.div<coinCardInt>`
  
  height: 230px;
  width: 200px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.trendBackgroundColor};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: transform .2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
  
  & a{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
  
   & .icon, & .content{
    width: 100%;
  }
  
  & .content{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  & .icon{
    display: flex;
    justify-content: center;
    padding-top: 15px;
    height: 50%;
    
    & img{
      width: 50%;
      height: 100%;
    }
  }
  
  & .percentage{
    color :${props => props.color};
    font-weight: 600;
  }
`;