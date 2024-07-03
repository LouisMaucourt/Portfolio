'use client';

import { usePathname } from 'next/navigation';
import Button from '../assets/Button';  // Assurez-vous que le chemin est correct
import React from 'react';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className='w-full'>
            <nav>
                <ul className='flex flex-row justify-between text-center border-b border-gray-200'>
                    <li className={`w-full  ${isActive('/') ? 'color-first' : ''}`}>
                        <Button href="/" isRounded={false}>
                            Louis Maucourt
                        </Button>
                    </li>
                    <li className={`w-full  ${isActive('/projets') ? 'color-second' : ''}`}>
                        <Button href="/projets" isRounded={false}>
                            Projets
                        </Button>
                    </li>
                    <li className={`w-full`}>
                        <Button href="/contact" isRounded={false}>
                            Contact
                        </Button>
                    </li>
                    <li className={`w-full  ${isActive('/contact') ? 'var(--s-color) var(--f-color)' : ''}`}>
                        <Button href="/contact" isRounded={false}>
                            Contact
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
