import styled from "styled-components";

type FiltersType = {
    filterIsOpen: boolean
}


export const FilterContainerStyle = styled.div<FiltersType>`

  width: 250px;
  display: flex;
  position: relative;
  height: 75px;
  margin: 0 20px 40px 0;

  & input {
    width: 60%;
    height: 100%;
    padding-top: 50px;
    border: none;
    background-color: white;
  }

  & label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
  }

  & label::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 60%;
    height: 100%;
    border-bottom: 3px solid #42c9b2;
    transition: all 0.3s ease;
  }

  & .content-name {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-bottom: 5px;
    transition: all 0.3s ease;
    font-size: 17px;
    color: #8b8b8b;
  }

  & input:focus {
    outline: none;
  }

  & input:focus + .label-name .content-name,
  & input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 15px;
    left: 0px;
    color: #31b65e;
  }

  & input:focus + .label-name::after,
  & input:valid + .label-name::after {
    transform: translateX(0%);
  }

  & input[type=text] {
    font-size: 1rem;
    font-family: 'Mukta', sans-serif;
  }

  & .sort-icon {
    position: absolute;
    bottom: -6px;
    right: 10px;
    z-index: 2;
  }

  & .sort-icon svg {
    cursor: pointer;
  }

  & .filters {
    position: absolute;
    transform: translateY(100%);
    background-color: white;
    box-shadow: 0 0 6px .6px black;
    border-radius: 10px 0 10px 10px;
    bottom: -5px;
    right: 30px;
    height: ${props => props.filterIsOpen ? "200px" : "0px"};
    width: ${props => props.filterIsOpen ? "400px" : "0px"};
    transition: height .3s, width .3s;
  }
`;

