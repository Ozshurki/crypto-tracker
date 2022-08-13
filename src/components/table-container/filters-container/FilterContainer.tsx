import React, {useState} from "react";
import {MdOutlineSort} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {FilterContainerS} from "./FilterContainer.Style";
import {useSelector} from "react-redux";
import useDebounce from "../../../hooks/useDebounce";
import {getSearchResults} from "../../../apis/ApiServices";
import {Link} from "react-router-dom";

// const results1 = [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "market_cap_rank": 1,
//         "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
//         "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
//     },
//     {
//         "id": "binancecoin",
//         "name": "BNB",
//         "symbol": "BNB",
//         "market_cap_rank": 5,
//         "thumb": "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png",
//         "large": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png"
//     },
//     {
//         "id": "binance-usd",
//         "name": "Binance USD",
//         "symbol": "BUSD",
//         "market_cap_rank": 8,
//         "thumb": "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png",
//         "large": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png"
//     },
//     {
//         "id": "shiba-inu",
//         "name": "Shiba Inu",
//         "symbol": "SHIB",
//         "market_cap_rank": 15,
//         "thumb": "https://assets.coingecko.com/coins/images/11939/thumb/shiba.png",
//         "large": "https://assets.coingecko.com/coins/images/11939/large/shiba.png"
//     },
//     {
//         "id": "wrapped-bitcoin",
//         "name": "Wrapped Bitcoin",
//         "symbol": "WBTC",
//         "market_cap_rank": 19,
//         "thumb": "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
//         "large": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
//     },
//     {
//         "id": "okb",
//         "name": "OKB",
//         "symbol": "OKB",
//         "market_cap_rank": 20,
//         "thumb": "https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png",
//         "large": "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png"
//     },
//     {
//         "id": "cosmos",
//         "name": "Cosmos Hub",
//         "symbol": "ATOM",
//         "market_cap_rank": 28,
//         "thumb": "https://assets.coingecko.com/coins/images/1481/thumb/cosmos_hub.png",
//         "large": "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png"
//     },
//     {
//         "id": "bitcoin-cash",
//         "name": "Bitcoin Cash",
//         "symbol": "BCH",
//         "market_cap_rank": 32,
//         "thumb": "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png",
//         "large": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png"
//     },
//     {
//         "id": "hedera-hashgraph",
//         "name": "Hedera",
//         "symbol": "HBAR",
//         "market_cap_rank": 40,
//         "thumb": "https://assets.coingecko.com/coins/images/3688/thumb/hbar.png",
//         "large": "https://assets.coingecko.com/coins/images/3688/large/hbar.png"
//     },
//     {
//         "id": "the-sandbox",
//         "name": "The Sandbox",
//         "symbol": "SAND",
//         "market_cap_rank": 42,
//         "thumb": "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg",
//         "large": "https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg"
//     },
//     {
//         "id": "bitcoin-cash-sv",
//         "name": "Bitcoin SV",
//         "symbol": "BSV",
//         "market_cap_rank": 53,
//         "thumb": "https://assets.coingecko.com/coins/images/6799/thumb/BSV.png",
//         "large": "https://assets.coingecko.com/coins/images/6799/large/BSV.png"
//     }
// ];

interface FilterContainerInt {
    coin: string;
    setCoin: (coin: string) => void;
    setSortKind: (sortKind: number) => void;
}

const FilterContainer: React.FC<FilterContainerInt> = ({coin, setCoin, setSortKind}) => {

    const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
    const [results, setResults] = useState<any[]>([]);
    const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
    const debounce = useDebounce();

    const choseSortKind = (sortKind: number) => {
        setSortKind(sortKind);
        setFilterIsOpen(!filterIsOpen);
    };

    const getInputResults = async (e: React.ChangeEvent<HTMLInputElement>) => {

        setCoin(e.target.value);

        // Hide results if user delete the input
        if (e.target.value === '') {
            setResults([]);
            return;
        }

        try {
            debounce(async () => {
                const data = await getSearchResults(e.target.value);
                setResults(data);
            }, 600);
        } catch (err) {
            console.log(err);
        }
    };

    const clearInput = () => {
        setCoin('');
        setResults([]);
    };

    return (
        <FilterContainerS filterIsOpen={filterIsOpen}>
            <input type="text"
                   name="text"
                   autoComplete="off"
                   value={coin}
                   required
                   onChange={getInputResults}/>
            <label htmlFor="text" className="label-name">
                <span className="content-name">Search</span>
            </label>
            <AiOutlineClose
                className="clear-input"
                color={isDarkTheme ? "white" : "black"}
                size="1.1rem"
                onClick={clearInput}/>
            {results.length > 0 &&
            <div className="search-results">
                <ul>
                    {results.map((res: any) => {
                        return (
                            <Link to={`/coins/${res.id}`} key={res?.id}>
                                <li>{res?.name} <span>({res?.symbol})</span></li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
            }
            <div className="sort-icon" onClick={() => setFilterIsOpen(!filterIsOpen)}>
                {filterIsOpen ? <AiOutlineClose size="1.4rem" color={isDarkTheme ? "white" : "black"}/>
                    : <MdOutlineSort size="1.4rem" color={isDarkTheme ? "white" : "black"}/>
                }
            </div>
            <div className="filters">
                <div onClick={() => choseSortKind(1)}>Price: High to Low</div>
                <div onClick={() => choseSortKind(2)}>Price: Low to High</div>
                <div onClick={() => choseSortKind(3)}>Market Cap: High to Low</div>
                <div onClick={() => choseSortKind(4)}>Market Cap: Low to High</div>
            </div>
        </FilterContainerS>
    );
};

export default FilterContainer;