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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 4
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
