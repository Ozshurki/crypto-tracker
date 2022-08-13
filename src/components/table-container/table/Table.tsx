import React, {useEffect, useState} from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {TableStyle, TdS} from "./Table.Style";
import {favoritesActions} from "../../../store/slices/favorites";


const cols = ["", "Coin", "Price", "24h", "24h Vol", "Market Cap", "Last 7 days"];

interface TableInt {
    coins: any;
}

const Table: React.FC<TableInt> = ({coins}) => {

    const symbol = useSelector((state: any) => state.currency.symbol);
    const favorites = useSelector((state: any) => state.favorites.coins);
    const dispatch = useDispatch();

    const isNegative = (num: number) => num < 0 ? "red" : "green";
    const saveCoin = (id:string) => dispatch(favoritesActions.toggleCoinInFavorites({id}));

    return (
        <TableStyle as="table">
            <thead>
            <tr>
                {cols.map((col: string, index: number) => {
                    return (
                        <th key={index}>{col}</th>
                    );
                })}
            </tr>
            </thead>
            <tbody>
            {coins.map((coin: any, index: number) => {
                return (
                    <tr key={index}>
                        <TdS label=""
                             color="black">
                            <span className="fav-icon">
                                {!!favorites.find((id:any) => id === coin.id)
                                    ? <AiFillStar size="1.5rem"
                                                  color="#ffcc66"
                                                  onClick={() => saveCoin(coin.id)}/>
                                    : <AiOutlineStar size="1.5rem"
                                                     color="#ffcc66"
                                                     onClick={() => saveCoin(coin.id)}/>
                                }
                            </span>
                        </TdS>
                        <TdS label="Coin"
                             color="black">
                            <Link to={`/coins/${coin.id}`}>
                                <div>
                                <span className="coin-img">
                                <img src={coin.image} alt="coin"/>
                            </span>
                                    <span><strong>{coin.name}</strong></span>
                                    <span className="coin-symbol">{coin.symbol}</span>
                                </div>
                            </Link>
                        </TdS>
                        <TdS label="Price"
                             color="black">{symbol} {coin.current_price.toLocaleString('en-US')}</TdS>
                        <TdS label="24h"
                             color={isNegative(coin.price_change_24h)}>
                            <span><strong>{coin.price_change_percentage_24h > 0 && "+"}</strong></span>
                            <strong>{coin.price_change_percentage_24h}%</strong>
                        </TdS>
                        <TdS label="24h Vol"
                             color="black">{symbol} {coin.total_volume.toLocaleString('en-US')}</TdS>
                        <TdS label="Mkt Cap"
                             color="black">{symbol} {coin.market_cap.toLocaleString('en-US')}</TdS>
                        <TdS label="Last 7 days"
                             color="black">
                            <img src="https://www.coingecko.com/coins/9956/sparkline" alt="chart"/>
                        </TdS>
                    </tr>
                );
            })}

            </tbody>
        </TableStyle>
    );
};

export default Table;