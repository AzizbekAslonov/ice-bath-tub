import {check, ice} from "../assets";
import {collabApps, collabContent} from "../constants";
import Section from "./Section";
import {LeftCurve, RightCurve} from "./design/Collaboration";

const Collaboration = () => {
    return (<Section id="advantages" crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">
                    Mahsulotdan foydalanishning afzalliklar
                </h2>
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.slice(0, collabContent.length / 2).map((item) => (
                        <li className="mb-3 py-3" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} width={24} height={24} alt="check"/>
                                <h3 className="body-2 ml-5">{item.title}</h3>
                            </div>
                            {item.text && (<p className="body-2 mt-3 text-n-4">{item.text}</p>)}
                        </li>))}
                </ul>
                {/*<Button>Try it now</Button>*/}
            </div>

            <div className="mt-4 lg:ml-auto xl:w-[38rem]">
                <div
                    className="mb-7 relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                        <div
                            className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full animate-pulse">
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                <img
                                    src={ice}
                                    alt="Brainmaster logo"
                                    width={48}
                                    height={48}
                                    className="animate-none"
                                />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app, index) => (<li
                            key={app.id}
                            className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom transition-transform hover:scale-105 rotate-${index * 90}`}
                        >
                            <div
                                className={`relative -top-[1.6rem] flex items-center justify-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 90}`}
                            >
                                <span className="text-2xl">{app.icon}</span>
                            </div>
                        </li>))}
                    </ul>
                    <LeftCurve/>
                    <RightCurve/>
                </div>
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.slice(collabContent.length / 2).map((item) => (
                        <li className="mb-3 py-3" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} width={24} height={24} alt="check"/>
                                <h3 className="body-2 ml-5">{item.title}</h3>
                            </div>
                            {item.text && (<p className="body-2 mt-3 text-n-4">{item.text}</p>)}
                        </li>))}
                </ul>
            </div>
        </div>
    </Section>);
};

export default Collaboration;
