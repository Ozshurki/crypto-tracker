import React, {createContext, useContext, useEffect, useState} from "react";


export interface Crypto {
    currency: string | null;
    symbol: string | null;
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

interface CryptoInt {
    children?: React.ReactNode;
}

export const CryptoContext = createContext<Crypto | null>(null);

const Crypto: React.FC<CryptoInt> = ({children}) => {

    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("$");

    useEffect(() => {
        if (currency === "USD") setSymbol("$");
        else if (currency === "ILS") setSymbol("₪");
    }, [currency]);

    return (
        <CryptoContext.Provider
            value={{
                currency,
                symbol,
                setCurrency
            }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default Crypto;