import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    chromecast,
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo7,
    disc02,
    file02,
    homeSmile,
    notification2,
    notification3,
    notification4,
    plusSquare,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slide1,
    slide2,
    slide3,
    sliders04,
    telegram,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Xususiyatlari",
        url: "#features",
    },
    {
        id: "1",
        title: "Afzalliklari",
        url: "#advantages",
    },
    {
        id: "2",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "3",
        title: "Brend farqlari",
        url: "#roadmap",
    },
    // {
    //     id: "4",
    //     title: "New account",
    //     url: "#signup",
    //     onlyMobile: true,
    // },
    // {
    //     id: "5",
    //     title: "Sign in",
    //     url: "#login",
    //     onlyMobile: true,
    // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo1,
    companyLogo7,
];

export const brainmastertServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainmasterServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];
// imageUrl: roadmap1,
//     colorful: true,
export const roadmap = [
    {
        id: "0",
        title: "Premium sifat",
        text: "Mustahkam material va uzoq muddatli foydalanish.",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Innovatsion dizayn",
        text: "Qulay, ko'chma va zamonaviy ko'rinish.",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Xavfsizlik va ekologik tozaligi",
        text: "Tanaga zararli bo'lmagan materiallardan ishlab chiqarilgan.",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Sportchilar uchun maxsus ishlab chiqilgan",
        text: "Fitnes va professional atletlar ehtiyojlarini qondirishga yo'naltirilgan.",
        imageUrl: roadmap4,
        colorful: true,
    },
];

export const collabContent = [
    {
        id: "0",
        title: "Mushaklarni tiklash",
        text: "Jismoniy mashg'ulotlardan so'ng mushaklarning shishishini kamaytiradi.",
    },
    {
        id: "1",
        title: "Yallig'lanishga qarshi ta'sir",
        text: "Yallig'lanish va shikastlanish xavfini pasaytiradi.",
    },
    {
        id: "2",
        title: "Qon aylanishini yaxshilaydi",
        text: "Qonni kislorod bilan to'ldirish jarayonini tezlashtiradi.",
    },
    {
        id: "3",
        title: "Stress va depressiyani kamaytiradi",
        text: "Sovuq suv adrenalin va endorfin gormonlarini faollashtiradi.",
    },
    {
        id: "4",
        title: "Sport natijalarini yaxshilash",
        text: "Tiklanish jarayoni tezlashgani uchun mashg'ulot samaradorligini oshiradi.",
    },
    {
        id: "5",
        title: "Metabolizmni tezlashtirish",
        text: "Sovuq vanna yog'larni yoqishga va vazn nazoratiga yordam beradi.",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: "💪",
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: "🔥",
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: "⚡",
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: "💧",
        width: 34,
        height: 35,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Narxi",
        // description: "AI chatbot, personalized recommendations",
        price: "300",
        features: [
            "Professional va havaskor sportchilar",
            "Jismoniy ish bilan shug‘ullanuvchilar ",
            "Biohakerlar va salomatlik ixlosmandlari ",
            "Stress va depressiyani kamaytirmoqchi bo‘lganlar",
            `Qadoqlash: Maxsus brendlangan quti, ichida qo‘llanma, drenaj shlangi va aksessuarlar`,
            `Yetkazib berish: Mahsulot hajmiga qarab mahalliy yoki xalqaro yetkazib berish opsiyalari mavjud`,
        ],
    },
    // {
    //     id: "1",
    //     title: "Premium",
    //     description: "Advanced AI chatbot, priority support, analytics dashboard",
    //     price: "9.99",
    //     features: [
    //         "An advanced AI chatbot that can understand complex queries",
    //         "An analytics dashboard to track your conversations",
    //         "Priority support to solve issues quickly",
    //     ],
    // },
    // {
    //     id: "2",
    //     title: "Enterprise",
    //     description: "Custom AI chatbot, advanced analytics, dedicated account",
    //     price: "199",
    //     features: [
    //         "An AI chatbot that can understand your queries",
    //         "Personalized recommendations based on your preferences",
    //         "Ability to explore the app and its features without any cost",
    //     ],
    // },
];

export const benefits = [
    {
        id: "0",
        title: "Yuqori sifatli material",
        text: `Qalin va chidamli PVC yoki premium darajadagi plastikdan tayyorlangan`,
        backgroundUrl: "./assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: slide1,
    },
    {
        id: "1",
        title: "Hajmi",
        text: `Sportchilarga mos keladigan kattalik va chuqurlik (misol: 80–100 sm diametr, 70–80 sm chuqurlik)`,
        backgroundUrl: "./assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: slide2,
        light: true,
    },
    {
        id: "2",
        title: "Ko‘chma va yengil dizayn",
        text: `Harakatlanish va tashish uchun qulay bo‘lishi uchun buklanadigan yoki oson yig‘iladigan variantlar`,
        backgroundUrl: "./assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: slide3,
    },
    {
        id: "3",
        title: "Tez sovutish",
        text: `Ichiga muz yoki sovuq suv solish orqali oson sovutish imkoniyati`,
        backgroundUrl: "./assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: slide3,
        light: true,
    },
    {
        id: "4",
        title: "Haroratni ushlab turish",
        text: `Ichki issiqlik izolyatsiya qatlami sovuqni uzoq saqlashga yordam beradi`,
        backgroundUrl: "./assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: slide2,
    },
    {
        id: "5",
        title: `Qo‘shimcha aksessuarlar`,
        text: `Qopqoq, drenaj tizimi, havo nasosi va termometr kabi qo‘shimcha qulayliklar`,
        backgroundUrl: "./assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: slide1,
        light: true,
    },
];

export const socials = [
    // {
    //     id: "0",
    //     title: "Discord",
    //     iconUrl: discordBlack,
    //     url: "#",
    // },
    // {
    //     id: "1",
    //     title: "Twitter",
    //     iconUrl: twitter,
    //     url: "#",
    // },
    // {
    //     id: "2",
    //     title: "Instagram",
    //     iconUrl: instagram,
    //     url: "#",
    // },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "https://t.me/AzizbekAslonov",
    },
    // {
    //     id: "4",
    //     title: "Facebook",
    //     iconUrl: facebook,
    //     url: "#",
    // },
];
