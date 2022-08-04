import styled from "styled-components";

interface MobileNavBar {
    isOpen: boolean;
}

const MobileNavBarStyle = styled.nav<MobileNavBar>`

  position: relative;
  display: none;
  top: 69px;
  right: 0;
  width: 100%;
  background: white;
  opacity: 0.9;
  border-bottom: 1px solid #E6ECF8;


  &::after {
    content: '';
    position: absolute;
    width: ${props => props.isOpen ? '100%' : '0'};
    height: 1px;
    left: 0;
    top: 0;
    background: black;
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;

  }

`;

export default MobileNavBarStyle;