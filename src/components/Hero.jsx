import {useRef} from "react";
import {curve} from "../assets";
import Button from "./Button";
import Section from "./Section";
import {BackgroundCircles, BottomLine, Gradient} from "./design/Hero";
import ProductSlider from "./design/ProductSlider.jsx";

const Hero = () => {
    const parallaxRef = useRef();

    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
        >
            <div className="container realtive" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Get Big! Powered by <span className="text-purple-500">RRR</span> {` `}
                        <span className="inline-block relative">
                          Ice Bath Tub{" "}
                                        <img
                                            src={curve}
                                            className="absolute top-full left-0 w-full xl:-mt-2"
                                            width={624}
                                            height={28}
                                            alt="Curve"
                                        />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Ice Bath Tub – bu sportchilar va jismoniy faollik bilan shug‘ullanuvchilar
                        uchun maxsus ishlab chiqilgan sovuq vannalar idishi.
                    </p>
                    <Button href="#pricing" white>
                        Tezda buyurtma berish
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-6 rounded-t-[0.9rem]"></div>
                            <div
                                className="max-w-[320px] max-h-[320px] md:max-w-[426px] md:max-h-[426px] lg:max-w-[640px] lg:max-h-[640px] rounded-b-[0.9rem] overflow-hidden mx-auto">
                                <ProductSlider/>
                                {/*<ScrollParallax isAbsolutelyPositioned>*/}
                                {/*  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">*/}
                                {/*    {heroIcons.map((icon, index) => (*/}
                                {/*      <li className="p-5" key={index}>*/}
                                {/*        <img src={icon} width={24} height={25} alt={icon} />*/}
                                {/*      </li>*/}
                                {/*    ))}*/}
                                {/*  </ul>*/}
                                {/*</ScrollParallax>*/}
                                {/*<ScrollParallax isAbsolutelyPositioned>*/}
                                {/*  <Notification*/}
                                {/*    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"*/}
                                {/*    title="Code generation"*/}
                                {/*  />*/}
                                {/*</ScrollParallax>*/}
                            </div>
                        </div>
                        <Gradient/>
                    </div>
                    <BackgroundCircles/>
                </div>
            </div>
            <BottomLine/>
        </Section>
    );
};

export default Hero;
