'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const colors = [
    '#F4ECE8', '#E89CA4', '#3357FF',
    '#FF33A1', '#A133FF', '#33FFF5',
    '#F5FF33', '#FF5733', '#57FF33'
];
const textColors = [
    '#141414', '#FC2602', '#33FFF5',
    '#F5FF33', '#FF5733', '#57FF33',
    '#F4ECE8', '#33FF57', '#3357FF'
];

const SwitchTheme = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);

        // Récupérer les couleurs sauvegardées
        const savedBgColor = localStorage.getItem('bgColor');
        const savedTextColor = localStorage.getItem('textColor');

        if (savedBgColor && savedTextColor) {
            document.documentElement.style.setProperty('--f-color', savedBgColor);
            document.documentElement.style.setProperty('--s-color', savedTextColor);
        }
    }, []);

    if (!mounted) return null;

    const handleClick = (color, textColor) => {
        // Sauvegarder les couleurs dans le localStorage
        localStorage.setItem('bgColor', color);
        localStorage.setItem('textColor', textColor);

        // Appliquer les couleurs
        document.documentElement.style.setProperty('--f-color', color);
        document.documentElement.style.setProperty('--s-color', textColor);
        setTheme('custom'); // Set a custom theme to trigger the change
    };

    return (
        <div className='flex justify-center align-middle'>
            <div className='grid gap-4 grid-cols-3 gap-2'>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(color, textColors[index])}
                        style={{
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '50%',
                            backgroundColor: color,
                            cursor: 'pointer'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};


export default SwitchTheme;
