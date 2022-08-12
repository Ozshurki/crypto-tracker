import styled from "styled-components";

export const FavoritesS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  
  & h2{
    font-family: 'Poppins', sans-serif;
  }
`

export const FavoritesContainerS = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
`
