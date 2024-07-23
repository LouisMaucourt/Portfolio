
'use client'
import { usePathname } from 'next/navigation';
import Button from '../assets/Button';
import ChangeMood from '../ui-toggle/ChangeMood';

export default function Header() {
    const pathname = usePathname();

    // Modifiez la fonction isActive pour utiliser startsWith
    const isActive = (path) => pathname.startsWith(path);

    return (
        <header className='w-full color-first sticky top-0 z-50'>
            <nav>
                <ul className='flex flex-row justify-between text-center uppercase border-b border-color md:text-xs'>
                    <li className={`w-full ${isActive('/') ? 'color-first' : ''}`}>
                        <Button href="/" isRounded={false}>
                            Louis Maucourt
                        </Button>
                    </li>
                    {/* Utilisez maintenant isActive avec startsWith pour rendre le lien actif sur toutes les sous-pages de /projets */}
                    <li className={`w-full ${isActive('/projets') ? 'color-second' : ''}`}>
                        <Button href="/projets" isRounded={false}>
                            Projets
                        </Button>
                    </li>
                    <li className={`w-full lg:hidden`}>
                        <ChangeMood />
                    </li>
                    <li className={`w-full ${isActive('/#contact') ? 'var(--s-color) var(--f-color)' : ''}`}>
                        <Button href="/#contact" isRounded={false}>
                            Contact
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}