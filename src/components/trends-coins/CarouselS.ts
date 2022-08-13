import styled from "styled-components";

export const CarouselS = styled.div`
  
  width: 77%;
  margin-top: 10px;
  
  & h2{
    margin: 30px 15px;
  }
  
  & .carousel-wrapper {
    flex: 1 1;
    width: 100%;
    height: 200px;
    justify-items: center;
    gap: 50px;
  }
  
  & .loader-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    width: 200px;
    padding: 5px;
    margin: 20px;
    border: 1px solid #E6ECF8;
    box-shadow: 0 0 5px 3px #E6ECF8;
    border-radius: 10px;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
    
    & .alice-carousel__stage-item{
      
    }
  }
`;