import React from "react";

import "./Navigation.css"
import {NavigationStyle} from "./Navigation.Style"
import NavLinks from "../nav-links/NavLinks";


const Navigation: React.FC = () => {
    return (
        <NavigationStyle>
            <NavLinks isMobile={false} closeMobileMenu={() => {}}/>
        </NavigationStyle>
    );
};

export default Navigation;