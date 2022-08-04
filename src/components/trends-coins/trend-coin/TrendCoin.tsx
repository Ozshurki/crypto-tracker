import React from "react";
import {TrendCoinS} from "./TrendCoinS";

const TrendCoin:React.FC = () => {
    return(
        <TrendCoinS>
            <div className="trend-coin">
                <div className="trend-stats">
                    <div className="trend-icon">
                        <img src="https://assets.coingecko.com/coins/images/19737/large/logo.png?1635909203" alt=""/>
                    </div>
                    <div className="trend-details">
                        <div>Evmos</div>
                        <div>$1.65</div>
                    </div>
                </div>
                <div className="trend-percentage">12.3</div>
            </div>
            <div className="trend-chart">
                <img src="https://www.coingecko.com/coins/9956/sparkline" alt=""/>
            </div>
        </TrendCoinS>
    )
}

export default TrendCoin;