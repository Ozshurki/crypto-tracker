import React from "react";
import {TrendCoinS} from "./TrendCoinS";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {updateCurrency} from "../../../utils/functions/UpdateCurrency";


interface TrendCoinInt {
    id: string;
    chartID: number;
    name: string;
    price: number;
    url: string;
}

const TrendCoin: React.FC<TrendCoinInt> = ({name, price, url, id, chartID}) => {

    const currency = useSelector((state: any) => state.currency.currency);
    const symbol = useSelector((state: any) => state.currency.symbol);

    return (
        <TrendCoinS key={id}>
            <Link to={`/coins/${id}`}>
                <div className="trend-coin">
                    <div className="trend-stats">
                        <div className="trend-icon">
                            <img src={url} alt={name}/>
                        </div>
                        <div className="trend-details">
                            <div>{name}</div>
                            <div>{symbol} {updateCurrency(currency, price)}</div>
                        </div>
                    </div>
                </div>
                <div className="trend-chart">
                    <img src={`https://www.coingecko.com/coins/${chartID}/sparkline`} alt={name}/>
                </div>
            </Link>
        </TrendCoinS>
    );
};

export default TrendCoin;