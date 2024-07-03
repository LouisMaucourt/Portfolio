import React from 'react'
import SwitchTheme from '../ui-toggle/SwitchTheme'

const BentoPresentation = () => {
    return (
        <section className=" border-color border-b flex flex-row min-h-screen">
            <div className="w-1/6 flex flex-col justify-between h-screen border-color border-r">
                <div className="h-50vh">
                    <h1>Préférences</h1>
                </div>
                <div className='h-50vh flex items-center justify-center h-[40vh] border-color border-t'>
                    <SwitchTheme />
                </div>
            </div>
            <div className="w-2/3 flex flex-col justify-between h-screen border-color">
                <div className="h-[65vh] flex items-end justify-center">
                    <h1 className='text-6xl'>Louis Maucourt<br />Développeur Front-End</h1>
                </div>
                <div className="h-25vh flex items-center justify-center h-[30vh] border-color border-t" >
                    <p className="p-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="w-1/6 p-4 border-color border-l">
            </div>
        </section>
    )
}

export default BentoPresentation
