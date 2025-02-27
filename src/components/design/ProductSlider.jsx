import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {slide1, slide2, slide3} from "../../assets";

// Custom progress bar component
const ProgressBar = ({activeIndex, totalSlides}) => {
    return (
        <div className="flex gap-2 mt-4">
            {[...Array(totalSlides)].map((_, index) => (
                <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-12 bg-white" : "w-6 bg-white/30"
                    }`}
                />
            ))}
        </div>
    );
};

const slides = [{
    image: slide1,
    description: `Uzoq muddatli foydalanish va maksimal samaradorlik uchun moslashtirilgan`,
}, {
    image: slide2,
    description: `Mushaklarni tiklash, qon aylanishini yaxshilash va umumiy salomatlikni mustahkamlash`,
}, {
    image: slide3,
    description: `Uyda, sport zallarida yoki ochiq havoda ishlatish mumkin`,
}];

const ProductSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative product-slider-container">
            <Swiper
                className="w-full h-full rounded-lg overflow-hidden"
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    type: "bullets",
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={`Slide ${index + 1}`} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"/>
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            src={slide.image}
                            alt={`Product ${index + 1}`}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white transform transition-all duration-500">
                            <p className="text-sm max-w-md opacity-0 translate-y-8 animate-fadeIn animation-delay-200">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            {/*<div className="absolute top-1/2 left-4 z-20 -translate-y-1/2">*/}
            {/*    <button className="swiper-button-prev bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all">*/}
            {/*        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div className="absolute top-1/2 right-4 z-20 -translate-y-1/2">*/}
            {/*    <button className="swiper-button-next bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all">*/}
            {/*        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}

            {/* Custom pagination */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                <ProgressBar activeIndex={activeIndex} totalSlides={slides.length}/>
            </div>

            {/* Add a pulsing highlight effect on the active slide */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s forwards;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .swiper-slide-active h3,
                .swiper-slide-active p {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.3s;
                }
            `}</style>
        </div>
    );
};

export default ProductSlider;