import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import classNames from "classnames";

import {TableStyle} from "./Table.Style";

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

];

const Table: React.FC = () => {

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
            {rows.map((row: any, index: number) => {
                return (
                    <tr key={index}>
                        <td data-label="S.No">
                            <span className={classNames("fav-icon", isCoinSaved && "saved")}>
                                <AiFillStar size="1.2rem"
                                            color="#ffcc66"/></span>
                            {index}
                        </td>
                        <td data-label="Coin">{row.coin}</td>
                        <td data-label="Price">{row.price}</td>
                        <td data-label="1h">{row.hour}</td>
                        <td data-label="24h">{row.day}</td>
                        <td data-label="7d">{row.week}</td>
                        <td data-label="24h Vol">{row.vol}</td>
                        <td data-label="Mkt Cap">{row.mktCap}</td>
                        <td data-label="Last 7 days">
                            <img src={row.lastDays} alt="chart"/>
                        </td>
                    </tr>
                );
            })}

            </tbody>
        </TableStyle>
    );
};

export default Table;