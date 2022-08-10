import styled from "styled-components";

export const FooterS = styled.footer`
  
    padding: 5px 100px;
    margin-top: 50px;
    width: 100vw;
    min-height: 200px;
    background-color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Ubuntu', sans-serif;
  

  & > p{
    color: ${props => props.theme.backgroundColor};
    font-weight: 300;
    font-size: 1.1rem;
    opacity: 0.7;
  }

  & .social-links{
    display: flex;
    align-items: center;
    width: 100px;
    min-height: auto;

    & .social-link{
      position: relative;
      width: 30px;
      height: 30px;
      
      & a{
        position: absolute;
        height: 100%;
        width: 100%;
      }
      
      :hover{
        transform: translateY(-4px);
        transition: transform 0.3s;
      }
      
      & a svg{
        color: ${props => props.theme.backgroundColor};
      }
    }

    & p:last-child{
      font-size: 1rem;
    }
  }
`