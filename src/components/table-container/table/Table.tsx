import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import classNames from "classnames";

import {TableStyle} from "./Table.Style";
import {Link} from "react-router-dom";

const cols = ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol", "Market Cap", "Last 7 days"];

const rows = [
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },
    {
        "coin": "Bitcoin",
        "price": "$23,210.09",
        "hour": "-0.7%",
        "day": "-3.2%",
        "week": "2.6%",
        "vol": "$39,851,520,989",
        "mktCap": "$443,527,748,181",
        "lastDays": "https://www.coingecko.com/coins/1/sparkline"
    },

];

interface TableInt {
    coins: any;
}


const Table: React.FC<TableInt> = ({coins}) => {

    const [isCoinSaved, setIsCoinSaved] = useState<boolean>(false);

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
                        <td data-label="S.No">
                            <span className={classNames("fav-icon", isCoinSaved && "saved")}>
                                <AiFillStar size="1.2rem"
                                            color="#ffcc66"/></span>
                            {index}
                        </td>
                        <td data-label="Coin">
                            <Link to={`/coins/${coin.id}`}>
                                <div>
                                <span className="coin-img">
                                <img src={coin.image} alt="coin"/>
                            </span>
                                    <span><strong>{coin.name}</strong></span>
                                    <span className="coin-symbol">{coin.symbol}</span>
                                </div>
                            </Link>
                        </td>
                        <td data-label="Price">{coin.current_price}</td>
                        <td data-label="1h">{coin.hour}</td>
                        <td data-label="24h">{coin.price_change_24h}</td>
                        <td data-label="7d">{coin.week}</td>
                        <td data-label="24h Vol">{coin.total_volume}</td>
                        <td data-label="Mkt Cap">{coin.market_cap}</td>
                        <td data-label="Last 7 days">
                            <img src="https://www.coingecko.com/coins/9956/sparkline" alt="chart"/>
                        </td>
                    </tr>
                );
            })}

            </tbody>
        </TableStyle>
    );
};

export default Table;