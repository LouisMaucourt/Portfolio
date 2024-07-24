import React from 'react'
import Cube from '../sections/Cube'
import SwitchTheme from '../ui-toggle/SwitchTheme'
import SwitchTypography from '../ui-toggle/SwitchTypography'

const BentoPresentationMobile = () => {
    return (
        <section className='h-svh border-color border  flex flex-col gap-8'>
            <div className='flex flex-col justify-between h-[75vh]'>
                <Cube></Cube>
                <div className='p-4'>
                    <h1 className='text-4xl font-bold'>Louis Maucourt<br />Développeur Front-End</h1>
                    <p>Après trois ans dans le digital, je suis en mastère de développement web. Passionné par le "creative code", je trouve dans le code le point de convergence de tout mon travail, où l'art et la technologie se rencontrent. Autodidacte, j'explore des animations interactives et des expériences utilisateur innovantes. Cette approche m'a inculqué discipline et curiosité, me permettant d'aborder chaque projet avec l'envie d'apprendre et de créer des solutions uniques.
                    </p>
                </div>
            </div>
            <div className='flex w-full justify-between items-center h-[25vh] border-t border-color'>
                <div className="w-1/2 border-r border-color h-full flex items-center justify-center"><SwitchTheme /></div>
                <div className="w-1/2"><SwitchTypography /></div>
            </div>

        </section>
    )
}

export default BentoPresentationMobile
