
const soundUrl = "ee01_ow_thss_pl1/audio/"
const lottieUrl = "ee01_ow_thss_pl1/lottie/"
const bg = "ee01_ow_thss_pl1/bg/BG/"
const introBg = "ee01_ow_thss_pl1/bg/Intro_BG/"
const character = "ee01_ow_thss_pl1/character/"
const hilight = "ee01_ow_thss_pl1/icons/ICON_CI01_HILIGHT/"
const icons = "ee01_ow_thss_pl1/icons/ICON_CI_01/"
const button = "ee01_ow_thss_pl1/button/"
const equipement = "ee01_ow_thss_pl1/icons/ICON_PI_02/"
const eqhilight = "ee01_ow_thss_pl1/icons/ICON_PI_02_HILIGHT/"
const progressBar = "ee01_ow_thss_pl1/icons/PROGRESS_BAR/"
const handIcon = "ee01_ow_thss_pl1/icons/HAND/"
//public\internal\icons\ICON_PI_02_HILIGHT\SB_26_GREEN.svg
const AssetsMap = {
    chooseCharacter: {
        id: "choosecharacter",
        Bg: `${bg}SB_26_BG_01.svg`,
        sprites: [
            `${button}Buttons-16.svg`,//0
            `${button}Buttons-22.svg`,//1
            `${button}Buttons-20.svg`,//2
            `${button}Buttons-26.svg`,//3
            `${hilight}SB_26_GREEN.svg`,//4
            `${hilight}SB_26_RED.svg`,//5
            `${icons}SB_26_icon_armyman.svg`,//6
            `${icons}SB_26_icon_dentist.svg`,//7
            `${icons}SB_26_icon_docter.svg`,//8
            `${icons}SB_26_icon_firefighter.svg`,//9
            `${icons}SB_26_icon_floorcleaner.svg`,//10
            `${icons}SB_26_icon_garbege collector.svg`,//11
            `${icons}SB_26_icon_gardener.svg`,//12
            `${icons}SB_26_icon_guard.svg`,//13
            `${icons}SB_26_icon_police.svg`,//14
            `${icons}SB_26_icon_teacher.svg`,//15
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
        ]
    },
   

}

export default AssetsMap;
