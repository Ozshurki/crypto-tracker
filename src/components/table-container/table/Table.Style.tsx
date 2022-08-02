import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  & th{
    border-bottom: 1px solid #e5e7eb;
  }
  & td,& th{
    padding: 2px 40px;
    text-align: center;
    font-size: 15px;
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
    align-items: center;
    justify-content: space-around;
    padding: 2px 25px;
    margin-top: 17px;
    margin-left: -20px;
  }
  
  & .fav-icon svg{
    cursor: pointer;
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
    
    & td:last-child:before{
      margin-top: 20px;
    }
  }
`