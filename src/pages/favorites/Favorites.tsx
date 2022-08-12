import {FavoritesContainerS, FavoritesS} from "./Favorites.Style";
import React from "react";
import PageTitle from "../../components/page-title/PageTitle";
import {useSelector} from "react-redux";
import CoinCard from "../../components/coin-card/CoinCard";

const Favorites: React.FC = () => {

    const favorites = useSelector((state: any) => state.favorites.coins);

    return (
        <FavoritesS>
            <PageTitle title="Favorites"/>
            <FavoritesContainerS>
                <>
                    {favorites.length === 0 && <h2>Favorites is empty</h2>}
                    {favorites.map((id: string) => {
                        return (
                            <CoinCard id={id}/>
                        );
                    })}
                </>
            </FavoritesContainerS>
        </FavoritesS>
    );
};

export default Favorites;