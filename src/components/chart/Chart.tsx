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
    Legend,
} from 'chart.js';
import {chartDays} from "../../config/selected-buttons";
import SelectedButtons from "../selected-buttons/SelectedButtons";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




interface ChartInt {
    history: any;
    days: number;
    coinName: string;
    changeDays: (days:number) => void;
}

const Chart: React.FC<ChartInt> = ({history, days, coinName, changeDays}) => {

    const options = {
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
                data: history.map((coin: any) => coin[1]),
                label: `Price ( Past ${days} Days ) in USD`,
                borderColor: "#7510F7"
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