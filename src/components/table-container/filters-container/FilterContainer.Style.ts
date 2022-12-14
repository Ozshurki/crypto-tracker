import styled from "styled-components";

type FiltersType = {
    filterIsOpen: boolean
}


export const FilterContainerS = styled.div<FiltersType>`

  width: 150px;
  display: flex;
  position: relative;
  height: 75px;
  margin: 0 120px 40px 0;
  

  & input {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    border: none;
    background-color: ${props => props.theme.backgroundColor};
    
    :focus{
      outline: none;
    }
  }

  & label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
    
    ::after{
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid #42c9b2;
      transition: all 0.3s ease;
    }
  }

  & .content-name {
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 5px;
    transition: all 0.3s ease;
    font-size: 17px;
    color: ${props => props.theme.textColor};
  }

  & input:focus + .label-name .content-name,
  & input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 15px;
    left: 0;
    color: #31b65e;
  }

  & input:focus + .label-name::after,
  & input:valid + .label-name::after {
    transform: translateX(0%);
  }

  & input[type=text] {
    font-size: 1rem;
    font-family: 'Mukta', sans-serif;
    color: ${props => props.theme.textColor};
  }
  
  & .clear-input{
    position: absolute;
    bottom: 5px;
    right: 3px;
    cursor: pointer;
  }
  
  & .search-results{
    position: absolute;
    right: -30px;
    top: 80px;
    width: 200px;
    height: 150px;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 5px;
    background-color: ${props => props.theme.backgroundColor};
    overflow-y: hidden;
    border: 1px solid white;
    z-index: 3;
    
    & ul{
      width: 100%;
      
      & a{
        text-decoration: none;
      }
      & li{
        height: 30px;
        width: 100%;
        padding: 5px 0;
        list-style: none;
        border-bottom: 1px solid #e5e7eb;
        cursor: pointer;
        text-align:center;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.textColor};
        
        & span{
          color: gray;
          font-size: .8rem;
        }
        
        :hover{
          background-color: ${props => props.theme.rowHover};
          color: gray;
        }
      }
    }
  }

  & .sort-icon {
    position: absolute;
    bottom: -6px;
    right: -50px;
    z-index: 2;
    
    & svg{
      cursor: pointer;
    }
  }

  & .filters {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    transform: translateY(100%);
    background-color: ${props => props.theme.trendBackgroundColor};
    color: ${props => props.theme.textColor};
    box-shadow: 0 0 6px .6px ${props => props.theme.textColor};
    border-radius: 10px 0 10px 10px;
    bottom: -5px;
    right: -30px;
    height: ${props => props.filterIsOpen ? "200px" : "0px"};
    width: ${props => props.filterIsOpen ? "200px" : "0px"};
    transition: height .3s, width .3s;
    z-index: 1;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    font-size: .9rem;
  
    & div{
      padding: 5px;
      cursor:pointer;
      
      :hover{
        background-color: #ebebeb;
        color:black;
      }
    }
  }
  
  @media(max-width: 500px){
    margin: 20px auto;
  }
`;

