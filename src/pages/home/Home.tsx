import React from "react";

import {HomePage} from "./Home.Style";
import PageTitle from "../../components/page-title/PageTitle";
import TableContainer from "../../components/table-container/TableContainer";
import Carousel from "../../components/trends-coins/Carousel";

const Home: React.FC = () => {
    return (
        <HomePage>
            <PageTitle title="Crypto Currency"/>
            <Carousel/>
            <TableContainer/>
        </HomePage>
    );
};

export default Home;