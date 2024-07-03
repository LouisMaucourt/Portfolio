import Link from 'next/link';


const ProjectTitle = () => {
    return (
        <section>
            <div className='preview'>
                <div className='preview-img'></div>
            </div>
            <div className="flex flex-col">
                <div className="uxui" id="uxUi">
                    <Link href="/uiux" className="text-8xl text-link hover:opacity-75 transition-all">
                        UX / UI
                    </Link>
                </div>
                <div className="3d" id="3d">
                    <Link href="/3d" className="text-8xl text-link hover:opacity-75 transition-all">
                        3D
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectTitle;
