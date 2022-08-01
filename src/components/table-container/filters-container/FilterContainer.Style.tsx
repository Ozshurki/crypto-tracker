import styled from "styled-components";

export const FilterContainerStyle = styled.div`
  
    width: 200px;
    display: flex;
    position: relative;
    height: 75px;
    overflow: hidden;
    margin-bottom: 40px;
  
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

  & input[type=text]{
    font-size: 1rem;
    font-family: 'Mukta', sans-serif;
  }
  
  & .sort-icon{
    position: absolute;
    bottom: 0;
    right: 3px;
  }
`