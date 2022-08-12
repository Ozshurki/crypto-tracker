import React from "react";
import {CoinCardS} from "./CoinCard.Style";

interface CoinCardInt{
    id:string;
}

const CoinCard:React.FC<CoinCardInt> = ({id}) => {

    return(
        <CoinCardS>

        </CoinCardS>
    )
}

export default CoinCard;