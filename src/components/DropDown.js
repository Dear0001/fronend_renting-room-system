"use client"
import React, {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <span
                tabIndex={0}
                role="button"
                className="btn m-1 border-0 bg-white hover:bg-white active:bg-white shadow-none"
                onClick={toggleDropdown}
            >
                <IoIosArrowDown />
            </span>
            <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 mt-2 ${isOpen ? '' : 'hidden'}`}>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
}

export default DropDown;