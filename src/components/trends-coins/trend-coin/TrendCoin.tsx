import React, {useEffect, useState} from "react";
import {TrendCoinS} from "./TrendCoinS";
import {Link} from "react-router-dom";


interface TrendCoinInt {
    id: string;
    chartID: number;
    name: string;
    price: number;
    url: string;
}

const TrendCoin: React.FC<TrendCoinInt> = ({name, price, url, id, chartID}) => {

    const [chart, setChart] = useState("");

    const getChart = async () => {
        try {
            //const data = await getChartById(id);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getChart();
    });

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
                            <div>${Number(price.toFixed(6))}</div>
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