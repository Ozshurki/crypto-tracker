import {FavoritesS} from "./Favorites.Style";
import React from "react";
import PageTitle from "../../components/page-title/PageTitle";

const Favorites:React.FC = () =>{
    return(
        <FavoritesS>
            <PageTitle title="Favorites"/>
        </FavoritesS>
    )
}

export default Favorites;