import Link from "next/link";
import Image from "next/image";
import CustomSvgIcon from "../assets/CustomSvgIcon"
const Contact = () => {
    return (
        <section className=' border-y border-color flex flex-1 flex-row lg:flex-col items-center p-4 py-28'>
            {/* Title Section */}
            <div className='flex items-center lg:w-full w-1/2 p-4'>
                <h2>Pour me rencontrer ?</h2>
            </div>
            <ul className='flex flex-col gap-4 ml-8 p-4 lg:w-full w-1/2 md:border-l border-color pl-8'>
                <li className='flex-1 border-color border-b'>
                    <Link
                        href="mailto:louis.maucourt@outlook.fr"
                        className="flex gap-4 items-center p-4 mb-4 hover:bg-gray-100 hover:bg-opacity-5 transition-colors duration-150 "
                    >
                        <div className="flex items-center">
                            <CustomSvgIcon
                                src="/images/svg/email.svg"
                                fill="var(--s-color)"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex flex-col ">
                            <h4 className="uppercase font-bold">Mail</h4>
                            <p>louis.maucourt@outlook.fr</p>
                        </div>
                    </Link>
                </li>
                <li className='flex-1 border-b border-color'>
                    <Link
                        href="https://www.linkedin.com/in/louis-maucourt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 items-center p-4 mb-4 hover:bg-gray-100 hover:bg-opacity-5 transition-colors duration-150 "
                    >
                        <div className="flex items-center">
                            <CustomSvgIcon
                                src="/images/svg/linkedin.svg"
                                fill="var(--s-color)"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex flex-col  ">
                            <h4 className="uppercase font-bold">Linkedin</h4>
                            <p>https://www.linkedin.com/in/louis-maucourt</p>
                        </div>
                    </Link>
                </li>
                <li className='flex-1 border-b border-color'>
                    <Link
                        href="https://github.com/LouisMaucourt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 items-center p-4 mb-4 hover:bg-gray-100 hover:bg-opacity-5 transition-colors duration-150 "
                    >
                        <div className="flex items-center">
                            <CustomSvgIcon
                                src="/images/svg/github.svg"
                                fill="var(--s-color)"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex flex-col ">
                            <h4 className="uppercase font-bold">GitHub</h4>
                            <p>https://github.com/LouisMaucourt</p>
                        </div>
                    </Link>
                </li>
                <li className='flex-1 border-b border-color'>
                    <Link
                        href="tel:+33784423153"
                        className="flex gap-4 items-center p-4 mb-4 hover:bg-gray-100 hover:bg-opacity-5 transition-colors duration-150"
                    >
                        <div className="flex items-center">
                            <CustomSvgIcon
                                src="/images/svg/phone.svg"
                                fill="var(--s-color)"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div id="contact" className="flex flex-col">
                            <h4 className="uppercase font-bold">Mon numéro de Téléphone</h4>
                            <p>(+33) 07 84 42 31 53</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
