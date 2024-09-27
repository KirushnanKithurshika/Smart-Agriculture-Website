import React, { forwardRef } from 'react';
import './DropdownContent.css';

const DropdownContent = forwardRef((props, ref) => {
    const { children, open } = props;
    
    return (
        <div ref={ref} className={`dropdown-content ${open ? 'content-open' : ''}`}>
            {children}
        </div>
    );
});

export default DropdownContent;
