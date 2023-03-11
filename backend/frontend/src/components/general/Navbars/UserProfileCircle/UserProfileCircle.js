import React, { useEffect, useState } from 'react';

import { Button, Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { backgroundColors } from "contexts/BackgroundColorContext";

import ToggleDarkModeButton from '../UserProfileDropdownMenu/ToggleDarkModeButton'

import UserProfileDropdownMenu from '../UserProfileDropdownMenu/UserProfileDropdownMenu'

function UserProfileCircle(props) {
    const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
    const handleClick = () => {
        setdropDownIsOpen(!dropDownIsOpen);
    };

    return (
        <>
            <div style={{ borderRadius: '50%', height: '40px', width: '40px', background: '#56758f', cursor: 'pointer', textAlign: 'center', lineHeight: '40px', fontSize: '22px', color: 'white' }}
                onClick={handleClick}>
                {props.fname.slice(0, 1)}
                {/* {props.lname.slice(0, 1)} */}
            </div>
            <UserProfileDropdownMenu dropDownIsOpen={dropDownIsOpen} bgcolor={props.bgcolor} />
        </>
    );
}

export default UserProfileCircle;
