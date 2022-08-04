import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  & th{
    border-bottom: 1px solid #e5e7eb;
  }
  
  
  & td,& th{
    padding: 2px 40px;
    text-align: start;
    font-size: 15px;
  }

  & thead th:nth-child(2){
    text-align: start;
    padding-left: 45px;
  }
  
  & tbody tr{
    border-bottom: 1px solid #e5e7eb;
  }
  
  & tbody tr td:nth-child(2){
    cursor: pointer;
  }
  
  & tbody tr:hover{
    background-color: #f9fafb;
  }
  
  & tbody tr td:first-child {
    display: flex;
    justify-content: space-around;
    padding: 2px 25px;
    margin-top: 17px;
    margin-left: -20px;
  }

  & tbody tr td:nth-child(2){
    padding-right: 0;
  }
  
  & tbody tr td:nth-child(2) div{
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    margin: 0 3px;
    .coin-symbol{
      color: gray;
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
    }
    
    & tbody tr td{
      margin-bottom: 15px;
    }

    & td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }

    & tbody tr td:first-child {
      margin-left: 0;
    }
    
    & td:last-child:before{
      margin-top: 20px;
    }
  }
`