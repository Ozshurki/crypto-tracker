import React from "react";
import {SelectedButtonsS} from "./SelectedButtons.Style";
import {useSelector} from "react-redux";

interface Props {
    children?: React.ReactNode;
    onClickHandler: () => void;
    selected: boolean;
}

const SelectedButtons: React.FC<Props> = ({children, onClickHandler, selected}) => {

    const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

    return (
        <SelectedButtonsS onClick={onClickHandler} selected={selected} isDarkTheme={isDarkTheme}>
            {children}
        </SelectedButtonsS>
    );
};

export default SelectedButtons;