// components/NavProject.jsx
import Button from '../assets/Button';

const NavProject = () => {
    return (
        <nav className="w-9/12 m-auto py-10">
            <ul className="flex flex-row flex-nowrap justify-between">
                <li>
                    <Button href="/projets/website">Website</Button>
                </li>
                <li>
                    <Button href="/projets/3d">3D</Button>
                </li>
                <li>
                    <Button href="/projets/ux-ui">UX / UI</Button>
                </li>
                <li>
                    <Button href="/projets/branding">Branding</Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavProject;
