import React from "react";

import {HomePage} from "./Home.Style";
import PageTitle from "../../components/page-title/PageTitle";
import TableContainer from "../../components/table-container/TableContainer";

const Home: React.FC = () => {
    return (
        <HomePage>
            <PageTitle title="Crypto Currency"/>
            <TableContainer/>
        </HomePage>
    );
};

export default Home;