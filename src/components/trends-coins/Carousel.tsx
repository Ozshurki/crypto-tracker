import React from "react";
import {CarouselS} from "./CarouselS";
import TrendCoin from "./trend-coin/TrendCoin";
import AliceCarousel from "react-alice-carousel";

const coins = [
    {
        "item": {
            "id": "gains-network",
            "coin_id": 19737,
            "name": "Gains Network",
            "symbol": "GNS",
            "market_cap_rank": 409,
            "thumb": "https://assets.coingecko.com/coins/images/19737/thumb/logo.png?1635909203",
            "small": "https://assets.coingecko.com/coins/images/19737/small/logo.png?1635909203",
            "large": "https://assets.coingecko.com/coins/images/19737/large/logo.png?1635909203",
            "slug": "gains-network",
            "price_btc": 0.00008946177670014883,
            "score": 0
        }
    },
    {
        "item": {
            "id": "optimism",
            "coin_id": 25244,
            "name": "Optimism",
            "symbol": "OP",
            "market_cap_rank": 107,
            "thumb": "https://assets.coingecko.com/coins/images/25244/thumb/OP.jpeg?1651026279",
            "small": "https://assets.coingecko.com/coins/images/25244/small/OP.jpeg?1651026279",
            "large": "https://assets.coingecko.com/coins/images/25244/large/OP.jpeg?1651026279",
            "slug": "optimism",
            "price_btc": 0.00008838965977333362,
            "score": 1
        }
    },
    {
        "item": {
            "id": "ix-token",
            "coin_id": 20927,
            "name": "IX",
            "symbol": "IXT",
            "market_cap_rank": 398,
            "thumb": "https://assets.coingecko.com/coins/images/20927/thumb/IXT_LOGO_PNG_RGB_200X.png?1657602069",
            "small": "https://assets.coingecko.com/coins/images/20927/small/IXT_LOGO_PNG_RGB_200X.png?1657602069",
            "large": "https://assets.coingecko.com/coins/images/20927/large/IXT_LOGO_PNG_RGB_200X.png?1657602069",
            "slug": "ix-token",
            "price_btc": 0.00004640256430720211,
            "score": 2
        }
    },
    {
        "item": {
            "id": "cellframe",
            "coin_id": 14465,
            "name": "Cellframe",
            "symbol": "CELL",
            "market_cap_rank": 934,
            "thumb": "https://assets.coingecko.com/coins/images/14465/thumb/cellframe-coingecko.png?1644483414",
            "small": "https://assets.coingecko.com/coins/images/14465/small/cellframe-coingecko.png?1644483414",
            "large": "https://assets.coingecko.com/coins/images/14465/large/cellframe-coingecko.png?1644483414",
            "slug": "cellframe",
            "price_btc": 0.000013986284317711506,
            "score": 3
        }
    },
    {
        "item": {
            "id": "metis-token",
            "coin_id": 15595,
            "name": "Metis",
            "symbol": "METIS",
            "market_cap_rank": 186,
            "thumb": "https://assets.coingecko.com/coins/images/15595/thumb/metis.PNG?1621298076",
            "small": "https://assets.coingecko.com/coins/images/15595/small/metis.PNG?1621298076",
            "large": "https://assets.coingecko.com/coins/images/15595/large/metis.PNG?1621298076",
            "slug": "metis-token",
            "price_btc": 0.0018324829144532883,
            "score": 4
        }
    },
    {
        "item": {
            "id": "dydx",
            "coin_id": 17500,
            "name": "dYdX",
            "symbol": "DYDX",
            "market_cap_rank": 151,
            "thumb": "https://assets.coingecko.com/coins/images/17500/thumb/hjnIm9bV.jpg?1628009360",
            "small": "https://assets.coingecko.com/coins/images/17500/small/hjnIm9bV.jpg?1628009360",
            "large": "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360",
            "slug": "dydx",
            "price_btc": 0.00009993201503171167,
            "score": 5
        }
    },
    {
        "item": {
            "id": "band-protocol",
            "coin_id": 9545,
            "name": "Band Protocol",
            "symbol": "BAND",
            "market_cap_rank": 344,
            "thumb": "https://assets.coingecko.com/coins/images/9545/thumb/Band_token_blue_violet_token.png?1625881431",
            "small": "https://assets.coingecko.com/coins/images/9545/small/Band_token_blue_violet_token.png?1625881431",
            "large": "https://assets.coingecko.com/coins/images/9545/large/Band_token_blue_violet_token.png?1625881431",
            "slug": "band-protocol",
            "price_btc": 0.00007469794733661906,
            "score": 6
        }
    }
];

const Carousel: React.FC = () => {

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    const items = coins.map((coin: any, index: number) => {
        return (
            <TrendCoin/>
        );
    })
    return (
        <CarouselS>
            <h2>Trending Coins</h2>
            <div className="carousel-wrapper">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={items}/>
            </div>
        </CarouselS>
    );
};

export default Carousel;