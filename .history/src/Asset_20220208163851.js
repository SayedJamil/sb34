
const audio = "internal/audio/"
const bg = "internal/bg/"
const character = "internal/character"
const icons = "internal/icons/"
const jug = "internal/jug/"
const text = "internal/text/"
const lottie = "internal/character/"
const button = "internal/character/"

const AssetsMap = {
    chooseCharacter: {
        id: "choosecharacter",
        Bg: `${bg}SB_26_BG_01.svg`,
        sprites: [
            `${button}Buttons-16.svg`,//0
            `${button}Buttons-22.svg`,//1
            `${button}Buttons-20.svg`,//2

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
