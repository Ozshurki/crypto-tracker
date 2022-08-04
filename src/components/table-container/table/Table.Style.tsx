import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  & th{
    border-bottom: 1px solid #e5e7eb;
  }
  
  & td,& th{
    padding: 5px 40px;
    text-align: start;
    font-size: 15px;
  }

  & thead th:nth-child(2){
    text-align: start;
    padding-left: 45px;
  }
  
  & tbody tr{
    border-bottom: 1px solid #e5e7eb;
    
    :hover{
      background-color: #f9fafb;
    }

    & tbody tr td:first-child {
      display: flex;
      justify-content: space-around;
      padding: 2px 25px;
      margin-top: 17px;
      margin-left: -20px;
    }
    
    & td:nth-child(2){
      padding-right: 0;
      cursor: pointer;
      text-decoration: none;
      color: black;

      & a{
        text-decoration: none;
        color: black;
      }
      
      & div{
        width: 100%;
        display: flex;
        gap: 5px;
        justify-content: flex-start;
        align-items: center;
        margin: 0 3px;
        & .coin-symbol{
          color: gray;
        }
      }
    }
  }
  

  & .fav-icon svg{
    cursor: pointer;
  }

  & .coin-img{
    width: auto;
    height: 100%;
    
    & img{
      width: 25px;
      height: 25px;
      margin-bottom: -5px;
    }
  }

  @media (max-width: 500px) {
    & thead {
      display: none;
    }

    &, tbody, & tr, & td {
      display: block;
      width: 100%;
    }

    & tr {
      margin-bottom: 15px;
      width: 270px;
    }

    & td {
      text-align: right;
      padding-left: 50%;
      position: relative;
      
      ::before{
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      }
      
      &:last-child:before{
        margin-top: 20px;
      }
    }
    
    & tbody tr td{
      margin-bottom: 15px;
      
      :first-child{
        margin-left: 0;
      }
    }
  }
`