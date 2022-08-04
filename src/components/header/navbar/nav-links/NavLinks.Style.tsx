import styled from "styled-components";

export const NavLinksStyle = styled.ul`

  display: flex;
  margin-right: 10px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  font-size: 1.2rem;


  & .link-container {
    width: auto;
    position: relative;
    text-align: center;
    letter-spacing: 2px;
    padding: 0 10px;
  }

  & .link-container:hover{
    transform: translateY(-208px);
    transition: .3s ease-in-out;
  }

  & .link {
    position: relative;
    text-decoration: none;
    color: var(--text-primary);
    width: auto;
  }

  & .link::after {
    content: "";
    position: absolute;
    background-color: var(--text-primary);
    height: 1px;
    width: 0;
    left: 3%;
    bottom: -10px;
    transition: 0.3s;
  }

  & .link:hover::after {
    width: 100%;
  }
  
  

  @media (max-width: 600px) {

    display: flex;
    flex-direction: column;
    width: 25%;
    margin-bottom: 20px;

    & .link {
      color: var(--border);
      font-weight: 600;
    }

    & .link::after {
      background-color: var(--border);
    }

    & .link-container {
      width: 100%;
      text-align: start;
      padding-left: 38px;
      padding-top: 10px;
    }

    & .link-container:after {
      left: 30px;
    }

    & .link-container:hover::after {
      width: 100px;
    }
  }
`;