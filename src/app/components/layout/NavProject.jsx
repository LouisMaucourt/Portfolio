"use client"
import { usePathname } from 'next/navigation';
import Button from '../assets/Button';

const NavProject = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname.startsWith(path);

    return (
        <nav className="w-9/12 lg:w-full m-auto h-[19vh] flex items-center justify-center gap-9">
            <ul className="flex flex-row flex-nowrap justify-between w-full">
                <li>
                    <Button className={`min-w-44 lg:min-w-20 lg:px-4 ${isActive('/projets/website') ? 'color-second' : ''}`} href="/projets/website">Website</Button>
                </li>
                <li>
                    <Button className={`min-w-44 lg:min-w-20 lg:px-4 ${isActive('/projets/3d') ? 'color-second' : ''}`} href="/projets/3d">3D</Button>
                </li>
                <li>
                    <Button className={`min-w-44 lg:min-w-20 lg:px-4 ${isActive('/projets/ux-ui') ? 'color-second' : ''}`} href="/projets/ux-ui">UX / UI</Button>
                </li>
                <li>
                    <Button className={`min-w-44 lg:min-w-20 lg:px-4 ${isActive('/projets/branding') ? 'color-second' : ''}`} href="/projets/branding">Branding</Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavProject;
