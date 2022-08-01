import React from "react";
import {TableStyle} from "./Table.Style";


const cols = ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol", "Mkt Cap", "Last 7 days"]

const Table:React.FC = () => {
    return(
        <TableStyle as="table">
            <thead>
            <tr>
                {cols.map((col:string, index:number) =>{
                    return(
                        <th key={index}>{col}</th>
                    )
                })}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$23,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$39,851,520,989</td>
                <td data-label="Mkt Cap">$443,527,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$3,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$851,520,989</td>
                <td data-label="Mkt Cap">$43,527,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$23,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$39,851,520,989</td>
                <td data-label="Mkt Cap">$443,527,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$23,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$39,851,520,989</td>
                <td data-label="Mkt Cap">$443,527,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$23,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$39,851,520,989</td>
                <td data-label="Mkt Cap">$443,527,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            <tr>
                <td data-label="S.No">1</td>
                <td data-label="Coin">Bitcoin</td>
                <td data-label="Price">$2,210.09</td>
                <td data-label="1h">-0.7%</td>
                <td data-label="24h">-3.2%</td>
                <td data-label="7d">2.6%%</td>
                <td data-label="24h Vol">$39,851,989</td>
                <td data-label="Mkt Cap">$443,748,181</td>
                <td data-label="Last 7 days">
                    <img src="https://www.coingecko.com/coins/1/sparkline" alt="chart"/>
                </td>
            </tr>
            </tbody>
        </TableStyle>
    )
}

export default Table;