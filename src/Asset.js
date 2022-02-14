
const audio = "internal/audio/"
const bg = "internal/bg/"
const character = "internal/character/"
const icons = "internal/icons/"
const heaxagonIconUsed = "internal/icons/hexagon_water_used/"
const heaxagonIconNotUsed = "internal/icons/hexagon_water_notused/"
const hilighters = "internal/icons/hilighters/"
const squareIconsWastage = "internal/icons/square_icons_wastage/"
const squareIconsNoWastage = "internal/icons/square_icons_nowaste/"
const bubbleIconsActive = "internal/icons/bubble_icons_active/"
const bubbleIconsInActive = "internal/icons/bubble_icons_inactive/"
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
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_03.svg`,//11
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_04.svg`,//12
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_05.svg`,//13
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_06.svg`,//14
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_07.svg`,//15
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_08.svg`,//16
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_09.svg`,//17
            `${heaxagonIconNotUsed}SB_34_Hexagon-Icon_Nowater_10.svg`,//18
            `${hilighters}SB_34_Hexagon-Icon_Green-Highlight.svg`,//19
            `${hilighters}SB_34_Hexagon-Icon_Red-Highlight.svg`,//20
            `${jug}SB_34_Jug_01.svg`,
            `${jug}SB_34_Jug_02.svg`,
            `${jug}SB_34_Jug_03.svg`,
            `${jug}SB_34_Jug_04.svg`,
            `${jug}SB_34_Jug_05.svg`,
            `${jug}SB_34_Jug_06.svg`,
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },

    activity01end: {
        id: "activitytype01end",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${character}SB_34_CI_Lady_2.svg`,
            `${character}SB_34_CI_Lady_Eye_1.svg`,
            `${jug}SB_34_Jug_06.svg`,
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },

    waterUses: {
        id: "waterusescene",
        Bg: `${bg}SB_34_BG_1.svg`,
        sprites: [
            `${text}SB_34_TI_10.svg`,//0
            `${text}SB_34_TI_11.svg`,//1
            `${text}SB_34_TI_12.svg`,//2
            `${text}SB_34_TI_13.svg`,//3
            `${text}SB_34_TI_14.svg`,//4
            `${text}SB_34_TI_15.svg`,//5
            `${text}SB_34_TI_19.svg`,//6
            `${text}SB_34_TI_26.svg`,//7
            `${text}SB_34_TI_27.svg`,//8
            `${text}SB_34_TI_28.svg`,//9
            `${text}SB_34_TI_29.svg`,//10
            `${text}SB_34_TI_30.svg`,//11
            `${bubbleIconsActive}SB_34_Bubble-Icon_10.svg`,//12
            `${bubbleIconsActive}SB_34_Bubble-Icon_11.svg`,//13
            `${bubbleIconsActive}SB_34_Bubble-Icon_12.svg`,//14
            `${bubbleIconsActive}SB_34_Bubble-Icon_13.svg`,//15
            `${bubbleIconsActive}SB_34_Bubble-Icon_14.svg`,//16
            `${bubbleIconsActive}SB_34_Bubble-Icon_15.svg`,//17
            `${bubbleIconsActive}SB_34_Bubble-Icon_19.svg`,//18
            `${bubbleIconsActive}SB_34_Bubble-Icon_26.svg`,//19
            `${bubbleIconsActive}SB_34_Bubble-Icon_27.svg`,//20
            `${bubbleIconsActive}SB_34_Bubble-Icon_28.svg`,//21
            `${bubbleIconsActive}SB_34_Bubble-Icon_29.svg`,//22
            `${bubbleIconsActive}SB_34_Bubble-Icon_30.svg`,//23
            `${bubbleIconsInActive}SB_34_Bubble-Icon_10.svg`,//24
            `${bubbleIconsInActive}SB_34_Bubble-Icon_11.svg`,//25
            `${bubbleIconsInActive}SB_34_Bubble-Icon_12.svg`,//26
            `${bubbleIconsInActive}SB_34_Bubble-Icon_13.svg`,//27
            `${bubbleIconsInActive}SB_34_Bubble-Icon_14.svg`,//28
            `${bubbleIconsInActive}SB_34_Bubble-Icon_15.svg`,//29
            `${bubbleIconsInActive}SB_34_Bubble-Icon_19.svg`,//30
            `${bubbleIconsInActive}SB_34_Bubble-Icon_26.svg`,//31
            `${bubbleIconsInActive}SB_34_Bubble-Icon_27.svg`,//32
            `${bubbleIconsInActive}SB_34_Bubble-Icon_28.svg`,//34
            `${bubbleIconsInActive}SB_34_Bubble-Icon_29.svg`,//35
            `${bubbleIconsInActive}SB_34_Bubble-Icon_30.svg`,//36
        ],
        sounds: [
            `${audio}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottie}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    activity02: {
        id: "activitytype02",
        Bg: `${bg}SB_34_BG_2.svg`,
        sprites: [
            `${squareIconsNoWastage}Left/SB_34_Square-Icon-nowastage-left-01.svg`,//00//correct
            `${squareIconsWastage}Right/SB_34_Square-Icon-wastage-right-01.svg`,//01
            `${squareIconsNoWastage}Left/SB_34_Square-Icon-nowastage-left-02.svg`,//02//correct
            `${squareIconsWastage}Right/SB_34_Square-Icon-wastage-right-03.svg`,//03
            `${squareIconsNoWastage}Left/SB_34_Square-Icon-nowastage-left-03.svg`,//04//correct
            `${squareIconsWastage}Right/SB_34_Square-Icon-wastage-right-02.svg`,//05
            `${squareIconsWastage}Left/SB_34_Square-Icon-wastage-left-01.svg`,//06
            `${squareIconsNoWastage}Right/SB_34_Square-Icon-nowastage-right-01.svg`,//07//correct
            `${squareIconsWastage}Left/SB_34_Square-Icon-wastage-left-02.svg`,//08
            `${squareIconsNoWastage}Right/SB_34_Square-Icon-nowastage-right-02.svg`,//09//correct
            `${squareIconsWastage}Left/SB_34_Square-Icon-wastage-left-03.svg`,//10
            `${squareIconsNoWastage}Right/SB_34_Square-Icon-nowastage-right-03.svg`,//11//correct
            `${squareIconsWastage}Left/SB_34_Square-Icon-wastage-left-04.svg`,//12
            `${squareIconsNoWastage}Right/SB_34_Square-Icon-nowastage-right-04.svg`,//13//correct
            `${hilighters}SB_34_Square-Icon_Left_Green-Highlight.svg`,//14
            `${hilighters}SB_34_Square-Icon_Left_Red-Highlight.svg`,//15
            `${hilighters}SB_34_Square-Icon_Right_Green-Highlight.svg`,//16
            `${hilighters}SB_34_Square-Icon_Right_Red-Highlight.svg`,//17
            `${jug}SB_34_Jug_07.svg`,//18
            `${jug}SB_34_Jug_08.svg`,
            `${jug}SB_34_Jug_09.svg`,
            `${jug}SB_34_Jug_10.svg`,
            `${jug}SB_34_Jug_11.svg`,
            `${jug}SB_34_Jug_12.svg`,
            `${jug}SB_34_Jug_13.svg`,
            `${jug}SB_34_Jug_14.svg`,
            `${icons}SB_34_Circle-Icon.svg`,
            // public\internal\icons\SB_34_Circle-Icon.svg
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
