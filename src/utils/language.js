export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "tn", name: "Tamil" },
    { identifier: "hi", name: "Hindi" },
];

const lang = {
    en: {
        search : "Search",
        gptSearchPlaceHolder : "What would you to watch today",
    },
    tn: {
        search : "தேடல்",
        gptSearchPlaceHolder : "இன்று நீங்கள் என்ன பார்க்க வேண்டும்",
    },
    hi: {
        search : "खोज",
        gptSearchPlaceHolder : "आज आप क्या देखना चाहेंगे",
    },
}

export default lang;