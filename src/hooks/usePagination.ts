import {useState} from "react";

const usePagination = () => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [coins, setCoins] = useState([]);

    const coinsPerPage = 11;
    const pagesVisited = pageNumber * coinsPerPage;

    const displayCoins = coins.slice(pagesVisited, pagesVisited + coinsPerPage);
    const pageCount = Math.ceil(coins.length / coinsPerPage);
    const changePage = ({selected}: any) => setPageNumber(selected);

    return {displayCoins, pageCount, changePage, setCoins};
};

export default usePagination;