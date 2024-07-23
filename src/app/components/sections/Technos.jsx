import Image from "next/image";
import CustomSvgIcon from "../assets/CustomSvgIcon";

const Technos = () => {
    return (
        <section className="flex flex-row lg:flex-col py-24">
            <div className="w-1/2 lg:w-full p-8 flex flex-col justify-end">
                <h2>Mes technos</h2>
                <p> j’ai la chance de travailler avec une variété de technologies qui me permettent de donner vie à mes idées. Voici les outils avec lesquels je travaille et que j’apprécie particulièrement</p>
            </div>
            <div className="w-1/2  lg:w-full p-8">
                <div className=" min-h-[60vh] border-color border-l border-r lg:border-0 m-8 lg:m-0  grid grid-cols-4 gap-4  place-content-center">
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/html.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Html5</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/css.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Css3</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/javascript.svg"
                            width={75}
                            height={75}
                        />
                        <h4>JavaScript</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/tailwind.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Tailwind</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/mysql.svg"
                            width={75}
                            height={75}
                        />
                        <h4>MySql</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/php.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Php</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/wordpress.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Wordpress</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            className={'ml-11 scale-120'}
                            src="/images/svg/gsap.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Gsap</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/nextJs.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Next.Js</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/react.svg"
                            width={75}
                            height={75}
                        />
                        <h4>React</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/svelte.svg"
                            width={75}
                            height={75}
                        />
                        <h4>Svelte</h4>
                    </span>
                    <span className="flex flex-col items-center">
                        <CustomSvgIcon
                            src="/images/svg/threeJs.svg"
                            width={75}
                            height={75}
                            className
                        />
                        <h4>Three.js</h4>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Technos;
