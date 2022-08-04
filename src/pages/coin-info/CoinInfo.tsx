import React from "react";
import {CoinInfoS} from "./CoinInfo.Style";
import {useParams} from "react-router-dom";

const CoinInfo:React.FC = () =>{

    const {id} = useParams<{ id: string }>();

    return (
        <CoinInfoS>

        </CoinInfoS>
    );
}

export default CoinInfo;