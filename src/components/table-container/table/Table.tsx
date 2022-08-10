import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {TableStyle, TdS} from "./Table.Style";
import {updateCurrency} from "../../../utils/functions/UpdateCurrency";


const cols = ["", "Coin", "Price", "24h", "24h Vol", "Market Cap", "Last 7 days"];

interface TableInt {
    coins: any;
}

const Table: React.FC<TableInt> = ({coins}) => {

    const [isCoinSaved, setIsCoinSaved] = useState<boolean>(false);
    const currency = useSelector((state: any) => state.currency.currency);
    const symbol = useSelector((state: any) => state.currency.symbol);

    const isNegative = (num: number) => num < 0 ? "red" : "green";

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
                            <span className={classNames("fav-icon", isCoinSaved && "saved")}>
                                <AiFillStar size="1.2rem"
                                            color="#ffcc66"/></span>

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
                             color="black">{symbol} {updateCurrency(currency, coin.current_price.toLocaleString('en-US'))}</TdS>
                        <TdS label="24h"
                             color={isNegative(coin.price_change_24h)}>
                            {updateCurrency(currency, coin.price_change_percentage_24h)}%
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