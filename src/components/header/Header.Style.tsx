

import styled from "styled-components";


type hamburgerType = {
    isOpen: boolean;
}

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 0 7px var(--border);
  background: rgba(255, 255, 255, .2);

  & .logo {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  & .logo a {
    color: black;
  }

  & .theme-toggle-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    font-size: 1.2rem;
    width: 150px;
  }

  & .navbar {
    width: 30%;
    display: flex;
    font-family: 'Poppins', sans-serif;
  }

  & .toggle-theme {
    margin: 0 auto;
    cursor: pointer;
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
    color: white;
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

  @media (max-width: 600px) {
    height: 69px;
    border-bottom: none;
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
  top: 5px;
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

