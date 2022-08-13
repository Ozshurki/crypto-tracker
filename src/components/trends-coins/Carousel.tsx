import React, {useEffect, useState} from "react";
import {CarouselS} from "./CarouselS";
import TrendCoin from "./trend-coin/TrendCoin";
import AliceCarousel from "react-alice-carousel";
import {getTrendsCoins} from "../../apis/ApiServices";
import {PuffLoader} from "react-spinners";

// const coins = [
//     {
//         "item": {
//             "id": "gains-network",
//             "coin_id": 19737,
//             "name": "Gains Network",
//             "symbol": "GNS",
//             "market_cap_rank": 426,
//             "thumb": "https://assets.coingecko.com/coins/images/19737/thumb/logo.png?1635909203",
//             "small": "https://assets.coingecko.com/coins/images/19737/small/logo.png?1635909203",
//             "large": "https://assets.coingecko.com/coins/images/19737/large/logo.png?1635909203",
//             "slug": "gains-network",
//             "price_btc": 8.467253298487584e-05,
//             "score": 0
//         }
//     },
//     {
//         "item": {
//             "id": "optimism",
//             "coin_id": 25244,
//             "name": "Optimism",
//             "symbol": "OP",
//             "market_cap_rank": 111,
//             "thumb": "https://assets.coingecko.com/coins/images/25244/thumb/OP.jpeg?1651026279",
//             "small": "https://assets.coingecko.com/coins/images/25244/small/OP.jpeg?1651026279",
//             "large": "https://assets.coingecko.com/coins/images/25244/large/OP.jpeg?1651026279",
//             "slug": "optimism",
//             "price_btc": 8.220944749306634e-05,
//             "score": 1
//         }
//     },
//     {
//         "item": {
//             "id": "metis-token",
//             "coin_id": 15595,
//             "name": "Metis",
//             "symbol": "METIS",
//             "market_cap_rank": 174,
//             "thumb": "https://assets.coingecko.com/coins/images/15595/thumb/metis.PNG?1621298076",
//             "small": "https://assets.coingecko.com/coins/images/15595/small/metis.PNG?1621298076",
//             "large": "https://assets.coingecko.com/coins/images/15595/large/metis.PNG?1621298076",
//             "slug": "metis-token",
//             "price_btc": 0.002003045042148238,
//             "score": 2
//         }
//     },
//     {
//         "item": {
//             "id": "evmos",
//             "coin_id": 24023,
//             "name": "Evmos",
//             "symbol": "EVMOS",
//             "market_cap_rank": 130,
//             "thumb": "https://assets.coingecko.com/coins/images/24023/thumb/evmos.png?1653958927",
//             "small": "https://assets.coingecko.com/coins/images/24023/small/evmos.png?1653958927",
//             "large": "https://assets.coingecko.com/coins/images/24023/large/evmos.png?1653958927",
//             "slug": "evmos",
//             "price_btc": 7.182548524914396e-05,
//             "score": 3
//         }
//     },
//     {
//         "item": {
//             "id": "solana",
//             "coin_id": 4128,
//             "name": "Solana",
//             "symbol": "SOL",
//             "market_cap_rank": 9,
//             "thumb": "https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422",
//             "small": "https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422",
//             "large": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
//             "slug": "solana",
//             "price_btc": 0.0016880346363156097,
//             "score": 4
//         }
//     },
//     {
//         "item": {
//             "id": "dydx",
//             "coin_id": 17500,
//             "name": "dYdX",
//             "symbol": "DYDX",
//             "market_cap_rank": 154,
//             "thumb": "https://assets.coingecko.com/coins/images/17500/thumb/hjnIm9bV.jpg?1628009360",
//             "small": "https://assets.coingecko.com/coins/images/17500/small/hjnIm9bV.jpg?1628009360",
//             "large": "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360",
//             "slug": "dydx",
//             "price_btc": 9.742302943102913e-05,
//             "score": 5
//         }
//     },
//     {
//         "item": {
//             "id": "flow",
//             "coin_id": 13446,
//             "name": "Flow",
//             "symbol": "FLOW",
//             "market_cap_rank": 37,
//             "thumb": "https://assets.coingecko.com/coins/images/13446/thumb/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776",
//             "small": "https://assets.coingecko.com/coins/images/13446/small/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776",
//             "large": "https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776",
//             "slug": "flow",
//             "price_btc": 9.975500947654707e-05,
//             "score": 6
//         }
//     }
// ];


const Carousel: React.FC = () => {

    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getCoins = async () => {
        try {
            setIsLoading(true);
            const data = await getTrendsCoins();
            setIsLoading(false);
            setCoins(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCoins();
    },[]);

    const responsive = {
        0: {
            items: 2,
        },
        1100: {
            items: 4,
        },
    };

    const items = coins.map((coin: any) => {
        return (
            <>
                {isLoading ? <div className="loader-container"><PuffLoader
                        color="#a749ff"/></div> :
                    <TrendCoin
                        id={coin.item?.id}
                        chartID={coin.item?.coin_id}
                        name={coin.item?.name}
                        price={coin.item?.price_btc}
                        url={coin.item?.small}
                    />
                }
            </>
        );
    });

    return (
        <CarouselS>
            <div className="carousel-wrapper">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    autoPlay
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    items={items}/>
            </div>
        </CarouselS>
    );
};

export default Carousel;