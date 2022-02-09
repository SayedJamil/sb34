
const audio = "internal/audio/"
const bg = "internal/bg/"
const character = "internal/character/"
const icons = "internal/icons/"
const heaxagonIconUsed = "internal/icons/heaxagon_water_used"
const heaxagonIconUsed = "internal/icons/heaxagon_water_notused"
const icons = "internal/icons/"
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
    // public\internal\character\SB_34_CI_Lady_1.svg
    explain: {
        id: "explain",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${character}SB_34_CI_Lady_1.svg`,
            `${character}SB_34_CI_Lady_Eye_1.svg`,
            `${button}Buttons-12.svg`,
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    activity01: {
        id: "activitytype01",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${character}SB_34_CI_Lady_1.svg`,
            `${character}SB_34_CI_Lady_Eye_1.svg`,
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