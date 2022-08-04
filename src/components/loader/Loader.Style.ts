import styled from "styled-components";

export const LoaderS = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
  
  & .loader-dot {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #a749ff;
    border-radius: 50%;
  }
`