import React from "react";
import {ChartS} from "./Chart.Style";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {chartDays} from "../../config/selected-buttons";
import SelectedButtons from "../selected-buttons/SelectedButtons";
import {useSelector} from "react-redux";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

interface ChartInt {
    history: any;
    days: number;
    coinName: string;
    changeDays: (days:number) => void;
}

const Chart: React.FC<ChartInt> = ({history, days, coinName, changeDays}) => {

    const currency = useSelector((state: any) => state.currency.currency);

    const options = {
        elements:{
          point:{
              radius:1
          }
        },
        scales: {
            x: {
                grid: {
                    color: '#E6ECF8',
                    borderColor: '#E6ECF8'
                }
            },
            y: {
                grid: {
                    color: '#E6ECF8',
                    borderColor: '#E6ECF8'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: coinName,
            },
        },
    };

    const data = {
        labels: history.map((coin: any) => {
            let date = new Date(coin[0]);
            let time = date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()}0 PM`
                : `${date.getHours()}:${date.getMinutes()}0 AM`;

            return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
            {
                fill:true,
                data: history.map((coin: any) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency.toUpperCase()}`,
                borderColor: "#7510F7",
                backgroundColor: 'rgba(117, 16, 247, 0.3)',
            },
        ],
    };

    return (
        <ChartS>
            <Line options={options}
                data={data}/>
            <div className="btns-container">{chartDays.map((day: any) => {
                return (
                    <SelectedButtons
                        key={day.label}
                        onClickHandler={() => changeDays(day.value)}
                        selected={days === day.value}>{day.label}</SelectedButtons>
                );
            })}</div>
        </ChartS>
    );
};

export default Chart;