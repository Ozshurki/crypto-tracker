import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
//import {RootStateOrAny, useSelector} from "react-redux";

import {NavLinksStyle} from "./NavLinks.Style";

interface Props {
    isMobile: boolean;
    closeMobileMenu: () => void;
}

const NavLinks: React.FC<Props> = ({isMobile, closeMobileMenu}) => {

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    //const savedCityQty:number = useSelector((state:RootStateOrAny )=> state.favorites.citiesQuantity);

    const onClickHandler = () => {
        isMobile && closeMobileMenu();
    };

    return (
        <NavLinksStyle>
            <motion.li className="link-container"
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay: 0.05}}>
                <motion.div whileHover={{scale: 1.2, type: "spring"}}>
                    <Link className="link"
                          to="/"
                          onClick={onClickHandler}>Coins</Link>
                </motion.div>

            </motion.li>
            <motion.li className="link-container"
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay: 0.10}}>
                <motion.div whileHover={{scale: 1.2, type: "spring"}}>
                    <Link className="link"
                          to="/favorites"
                          onClick={onClickHandler}>Favorites
                        <span className="cart-badge">{2}</span>
                    </Link>
                </motion.div>

            </motion.li>
        </NavLinksStyle>
    );
};

export default NavLinks;