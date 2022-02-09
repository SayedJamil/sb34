
const audio = "internal/audio/"
const bg = "internal/bg/"
const character = "internal/character/"
const icons = "internal/icons/"
const heaxagonIconUsed = "internal/icons/hexagon_water_used/"
const heaxagonIconNotUsed = "internal/icons/hexagon_water_notused/"
const hilighters = "internal/icons/hilighters/"
const squareIconsWastage = "internal/icons/square_icons_wastage/"
const squareIconsNoWastage = "internal/icons/square_icons_nowaste/"
const bubbleIcons = "internal/icons/bubble_icons_active/"
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
    // 
    activity01: {
        id: "activitytype01",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_02.svg`,//00
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_01.svg`,//01
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_03.svg`,//02
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_04.svg`,//03
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_05.svg`,//04
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_06.svg`,//05
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_07.svg`,//06
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_08.svg`,//07
            `${heaxagonIconUsed}SB_34_Hexagon-Icon_Water_09.svg`,//08
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_01.svg`,//09
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_02.svg`,//10
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_03.svg`,//12
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_04.svg`,//13
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_05.svg`,//14
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_06.svg`,//15
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_07.svg`,//16
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_08.svg`,//17
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_09.svg`,//18
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_10.svg`,//19
            `${jug}SB_34_Jug_01.svg`,
            `${hilighters}SB_34_Hexagon-Icon_Green-Highlight.svg`,
            `${hilighters}SB_34_Hexagon-Icon_Red-Highlight.svg`,
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
