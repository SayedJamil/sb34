
const audio = "internal/audio/"
const bg = "internal/bg/"
const character = "internal/character"
const icons = "internal/icons/"
const jug = "internal/jug/"
const text = "internal/text/"
const lottie = "internal/lottie/"
const button = "internal/button/"

const AssetsMap = {
    intro: {
        id: "intro",
        Bg: `${bg}SB_34_Intro-BG.svg`,
        sprites: [
            `${bg}SB_34_Intro-BG_Water-Title.svg`,
            `${bg}SB_34_Intro-BG_Water.svg`,
            `${button}Buttons-12.svg`,
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    explain: {
        id: "intro",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${bg}SB_34_Intro-BG_Water-Title.svg`,
            `${bg}SB_34_Intro-BG_Water.svg`,
            `${button}Buttons-12.svg`,
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },


}

export default AssetsMap;
