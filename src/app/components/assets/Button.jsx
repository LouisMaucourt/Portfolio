import React, { useRef } from 'react';
import TransitionLink from '../layout/TransitionLink'; // Adjust the import path as needed

const Button = ({ href, children, className = '', isRounded = true }) => {
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
        const btn = btnRef.current;
        if (btn) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        }
    };

    const borderRadiusClass = isRounded ? 'rounded-full' : 'rounded-none';

    return (
        <TransitionLink
            href={href}
            passHref
            ref={btnRef}
            onMouseMove={handleMouseMove}
            className={`btn ${className} ${borderRadiusClass}`}
        >
            <span>{children}</span>
        </TransitionLink>
    );
};

export default Button;
