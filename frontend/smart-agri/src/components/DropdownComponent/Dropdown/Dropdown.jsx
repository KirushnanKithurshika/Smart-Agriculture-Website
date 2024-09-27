import React from 'react'
import DropdownButton from '../DropdownButton/DropdownButton';
import DropdownContent from '../DropdownContent/DropdownContent';
import './Dropdown.css'
import { useState, useEffect, useRef } from "react";

const Dropdown = (buttonText, content) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();
    const contentRef = useRef();

    const toggleDropdown = () => {
        if(!open){
            const spaceRemaining =
            window.innerHeight -buttonRef.
            current.getBoundingClientRect().
            bottom;

            const contentHeight =contentRef.
            current.clientHeight;

            const topPosition = spaceRemaining>
            contentHeight ? null : spaceRemaining -
            contentHeight;
        }


        setOpen((open) => !open);
    }
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    useEffect(() => {
        const handler = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains
                    (event.target)
            ) {
                setOpen(false);
            }
            document.addEventListener("click", handler);

        };

    }, [dropdownRef])
    return (
        <div className='dropdown' ref={dropdownRef}>
            <div className='content'>

                <div>
                    <DropdownButton ref={buttonRef}
                    toggle={toggleDropdown} open={open}>
                        {buttonText}
                    </DropdownButton>
                    <DropdownContent ref={contentRef} 
                    open={open}>
                        {content}
                    </DropdownContent>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;