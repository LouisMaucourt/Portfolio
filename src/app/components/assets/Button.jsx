import Link from 'next/link';
import { useRef } from 'react';

const Button = ({ href, children, className = '', isRounded = true }) => { // Ajout de la propriété isRounded avec valeur par défaut true
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
        <Link href={href} passHref
            ref={btnRef}
            onMouseMove={handleMouseMove}
            className={`btn ${className} ${borderRadiusClass}`}>

            <span>{children}</span>
        </Link>
    );
};

export default Button;
