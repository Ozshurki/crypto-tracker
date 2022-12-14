import styled from "styled-components";

type tdType = {
    color: string;
    label: string;
}

export const TdS = styled.td<tdType>`


  :nth-child(4){
    color: ${props => props.color};
  }
  

  @media (max-width: 500px) {

    & td{
      padding: 5px 0;
    }
    &::before {
      content: "${props => props.label}";
      color: ${props => props.theme.textColor};
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }

`


export const TableStyle = styled.table`
  width: 1300px;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;
  
  & th{
    border-bottom: 1px solid #e5e7eb;
    color: ${props => props.theme.textColor};
  }
  
  & td,& th{
    padding: 5px 20px;
    text-align: start;
    font-size: 15px;
    
  }

  & thead th:nth-child(2){
    text-align: start;
    padding-left: 50px;
  }
  
  & tbody tr{
    border-bottom: 1px solid #e5e7eb;
    
    :hover{
      background-color: ${props => props.theme.rowHover};
    }
    
    & td{
      width: 250px;
      color: ${props => props.theme.textColor};
      
      :first-child{
        width: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2px 25px 2px 35px;
        margin-top: 17px;
        margin-left: -20px;
      }
      
      :nth-child(2){
        padding-right: 0;
        cursor: pointer;
        text-decoration: none;
        color: ${props => props.theme.textColor};

        & a{
          text-decoration: none;
          color: ${props => props.theme.textColor};
        }

        & div{
          width: 100%;
          display: flex;
          gap: 5px;
          justify-content: flex-start;
          padding-right: 18px;
          align-items: center;
          margin: 0 3px;

          & .coin-symbol{
            color: gray;
          }
        }
      }
    }
    
    & td:nth-child(3), 
    & td:nth-child(4), 
    & td:nth-child(5), 
    & td:nth-child(6), 
    & td:nth-child(7), 
    & td:nth-child(8){
      letter-spacing: .2px;
    }
  }
  
  & .fav-icon svg{
    cursor: pointer;
  }

  & .coin-img{
    width: auto;
    height: 100%;
    
    & img{
      width: 20px;
      height: 20px;
      margin-bottom: -5px;
    }
  }

  @media (max-width: 500px) {

    & td,& th{
      padding: 5px 15px;
      text-align: start;
      font-size: 15px;
    }
    
    & thead {
      display: none;
    }

    &, tbody, & tr, & td {
      display: block;
      width: 100%;
    }

    & tr {
      margin: 25px auto;
      padding: 10px;
      width: 270px;
    }

    & td {
      text-align: right;
      padding-left: 80px;
      position: relative;
      
      
      & img{
        width: 100px;
      }
    }
    
    & tbody tr td{
      margin-bottom: 10px;
      
      
      :first-child{
        margin-left: 0;
      }
      
      :nth-child(2) div{
        justify-content: space-evenly;
      }
    }
  }
`
