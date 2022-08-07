import styled from "styled-components";

type headerType = {
    isScroll:boolean;
}

type hamburgerType = {
    isOpen: boolean;
}

export const HeaderStyle = styled.header<headerType>`

  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  border-bottom: ${props => props.isScroll && "1px solid #E6ECF8;"};
  box-shadow: ${props => props.isScroll && "0 0 3px 2px #E6ECF8"};
  background-color: white;

  & .logo {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  & .theme-toggle-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 30px 0 10px;
    height: 100%;
    width: auto;
    font-size: 1.2rem;
    cursor: pointer;
  }

  & .navbar {
    width: 60%;
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }

  & .cart {
    position: relative;
    width: auto;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--background);
    border: none;
    margin: 15px 15px 0 0;
  }

  & .cart-badge {
    position: absolute;
    background-color: var(--border);
    color: black;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 100%;
    width: 15px;
    top: -10px;
    right: -13px;
    padding-left: 3px;
    text-align: center;
  }

  & .cart-icon {
    cursor: pointer;
  }

  & .menu-icon {
    display: none;
  }
  
  & .header-options{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
  
  & .css-b62m3t-container{
    width: 100px;
  }

  @media (max-width: 600px) {
    height: 69px;
    border-bottom: none;
    display: flex;
    justify-content: space-around;
    
    & .logo{
      display: none;
    }

    & .navbar {
      width: 100%;
      justify-content: space-around;
    
    }
  }

  @media (max-width: 600px) {
    & .menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 20px;
    }

    & .cart {
      margin-right: 0;
    }
  }
`;
export const Hamburger = styled.div<hamburgerType>`
  position: relative;
  top: 0;
  left: 5px;
  width: 30px;
  height: 40px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;

  & span {
    position: absolute;
    width: 80%;
    height: 2px;
    border: 1px solid black;
    background-color: black;
    border-radius: 50px;
    transition: 0.3s ease;
  }

  & .top-line {
    top: ${props => props.isOpen ? "50%" : "30%"};
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.isOpen && 'rotate(45deg)'};
  }

  & .mid-line {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.isOpen && 'translateX(-20px)'};
    opacity: ${props => props.isOpen ? "0" : "1"};
  }

  & .bottom-line {
    top: ${props => props.isOpen ? "50%" : "70%"};;
    left: 50%;
    transform: translate(-50%, -50%) ${props => props.isOpen && 'rotate(-45deg)'};
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

