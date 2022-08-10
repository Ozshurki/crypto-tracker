import styled from "styled-components";

export const TableContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 700px;
  
  & .filter-container {
    display: flex;
    justify-content: space-evenly;
    width: 250px;
    margin-bottom: 30px;
  }
  
  & .pagination{
    list-style: none;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    color: ${props => props.theme.textColor};
    
    & .page-num{
      padding: 8px 15px;
      cursor: pointer;
      border-radius: 3px;
      font-weight: 400;
      transition: background-color .2s ease-in-out;
      
      :hover{
        background-color: #5AB1BB;
        color: white;
      }
    }
    
    & .pagination-active{
      background-color: #5AB1BB;
      border-radius: 3px;
      padding: 2px 0;
      
    }
  }
`













