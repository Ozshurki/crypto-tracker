import {useCallback, useEffect, useState} from "react";

const usePagination = () => {

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [displayCoins, setDisplayCoins] = useState<any[]>([]);
    const [coins, setCoins] = useState<any[]>([]);

    const coinsPerPage = 11;
    const pagesVisited = pageNumber * coinsPerPage;

    useEffect(() =>{
        setDisplayCoins(coins.slice(pagesVisited, pagesVisited + coinsPerPage));
    },[coins, pageNumber])

    const pageCount = Math.ceil(coins.length / coinsPerPage);
    const changePage = ({selected}: any) => setPageNumber(selected);

    return {displayCoins, pageCount, changePage, setCoins};
};

export default usePagination;