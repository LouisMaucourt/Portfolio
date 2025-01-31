import React from 'react';
import SwitchTheme from '../ui-toggle/SwitchTheme';
import SwitchTypography from '../ui-toggle/SwitchTypography';
import Cube from '../sections/Cube';

const BentoPresentation = () => {
    return (
        <section className="border-color border-b flex flex-row min-h-[95vh]">
            <div className="w-1/6 flex items-center flex-col justify-between min-h-[95vh] border-color border-r">
                <div className='flex items-center h-[60vh] border-color border-b w-full'>
                    <Cube />
                </div>
                <div className='flex items-center justify-center h-[40vh]'>
                    <SwitchTheme />
                </div>
            </div>
            <div className="w-2/3 flex flex-col justify-between min-h-[95vh] border-color">
                <div className="h-[50vh] flex items-end justify-center">
                    <h1 className='text-6xl font-bold uppercase'>
                        Louis Maucourt<br />
                        Développeur Front-End
                    </h1>
                </div>
                <div className="h-[30vh] flex items-center justify-center border-color border-t">
                    <p className="p-9">
                        Après trois ans dans le digital, je suis en mastère de développement web. Passionné par le &quot;creative code&quot;, je trouve dans le code le point de convergence de tout mon travail, où l&apos;art et la technologie se rencontrent. Autodidacte, j&apos;explore des animations interactives et des expériences utilisateur innovantes. Cette approche m&apos;a inculqué discipline et curiosité, me permettant d&apos;aborder chaque projet avec l&apos;envie d&apos;apprendre et de créer des solutions uniques.
                    </p>
                </div>
            </div>
            <div className="w-1/6 border-color border-l">
                <div className="h-[98vh] flex items-center justify-center">
                    <SwitchTypography />
                </div>
            </div>
        </section>
    );
};

export default BentoPresentation;
