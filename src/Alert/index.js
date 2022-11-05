import React from 'react';
import css from "classnames";
import style from "./Alert.css";
import './Alert.css';

function Alert({ children, type, message }) {

    const [isShow, setIsShow] = React.useState(true);

    const renderElAlert = function () {
        return React.cloneElement(children);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsShow(false);
    };

    return (
        <div className={css(style.alert, style[type], !isShow && style.hide)}>
            <span className={style.closebtn} onClick={handleClose}>
                &times;
            </span>
            {children ? renderElAlert() : message}
        </div>
    );
}

export { Alert };
