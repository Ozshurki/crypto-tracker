import React from "react";
import {ChartS} from "./Chart.Style";
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
import {Line} from 'react-chartjs-2';

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
}

const Chart: React.FC<ChartInt> = ({history, days}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const data = {
        labels: history.map((coin: any) => {
            let date = new Date(coin[0]);
            let time = date.getHours() > 12
                ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;

            return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
            {
                data: history.map((coin: any) => coin[1]),
                label: `Price ( Past ${days} Days ) in USD`,
                borderColor: "#EEBC1D"
            },

        ],
    };

    return (
        <ChartS>
            <Line options={options}
                data={data}/>
        </ChartS>
    );
};

export default Chart;