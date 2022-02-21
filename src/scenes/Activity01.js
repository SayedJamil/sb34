import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
function Activity01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01)
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, jugNum, setJugNum, usedIcon, setUsedIcon } = useContext(SceneContext);
    const { activitytype01 } = Assets;
    const [cl1, setCL1] = useState('')
    const [cl2, setCL2] = useState('')
    const [cl3, setCL3] = useState('')
    const [hW, sethW] = useState()
    const [hNw01, sethNw01] = useState()
    const [hNw02, sethNw02] = useState()
    const [correctHL, setCorrectHL] = useState(false)
    const [wrongHL01, setwrongHL01] = useState(false)
    const [wrongHL02, setwrongHL02] = useState(false)
    const [click, setClick] = useState(false)
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/SB_34_Audio_05.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }
        playSound.on('end', () => {
            setClick(true)
        })

    }, [isLoading])
    useEffect(() => {
        randomize()
    }, [])
    useEffect(() => {

        if (iteration > 5) {
            setisLoading(true)
            setSceneId('/activity01end')
            // setIteration(1)
            // setJugNum(1)
        }
    }, [iteration])

    const randomize = () => {
        var classnames = ['leftHexagonIcon', 'rightHexagonIcon', 'centerHexagonIcon'];
        var random1 = classnames[Math.floor(Math.random() * classnames.length)];
        var removedclassname1 = classnames.filter(item => item !== random1)
        var random2 = removedclassname1[Math.floor(Math.random() * removedclassname1.length)];
        var removedclassname2 = removedclassname1.filter(item => item !== random2)
        var random3 = removedclassname2[Math.floor(Math.random() * removedclassname2.length)];
        setCL1(random1)
        setCL2(random2)
        setCL3(random3)
        var random4 = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
        console.log(usedIcon)
        console.log(random4)
        while (random4 === usedIcon) {
            console.log(random4)
            random4 = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
        }
        console.log(random4)
        setUsedIcon(random4)
        sethW(random4)
        var random5 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        var random6 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        while (random6 === random5) {
            random6 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        }
        sethNw01(random5)
        sethNw02(random6)
    }
    const rightAnswerClicked = () => {
        navigator.vibrate(100);
        setClick(false)
        var rightsfx = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/Correct-answer.mp3`],//change here
        });
        rightsfx.play();
        var rightsound = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/SB_34_Audio_06.mp3`],//change here
        });
        rightsfx.on('end', () => {
            rightsound.play();
        });
        rightsound.on('end', () => {
            setIteration(iteration + 1)
            setCorrectHL(false)
            if (iteration > 5) {
                setisLoading(true)
                setSceneId('/activity01end')
            } else
                if (iteration % 2 == 0) {
                    playSound.stop()
                    setSceneId('/activity011')
                } else {
                    playSound.stop()
                    setSceneId('/activity012')
                }
        })
        setJugNum(jugNum + 1)

    }

    const wrongAnswerClicked = () => {
        navigator.vibrate(250);
        setClick(false)
        var wrongSfx = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/Wrong-answer.mp3`],//change here
        });
        wrongSfx.play()
        var wrongSound = new Howl({
            src: [`ee02_ow_tvhd_pl1/audio/SB_34_Audio_04.mp3`],//change here
        });
        wrongSfx.on('end', () => {
            wrongSound.play();
        })
        wrongSound.on('end', () => {
            setClick(true)
            setwrongHL01(false)
            setwrongHL02(false)
            setClick(true)
        })
    }

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype01Screen'>
                    <Image src={activitytype01?.sprites[hW]} alt="" className={cl1}
                        onClick={() => {
                            if (click) {
                                setCorrectHL(true)
                                rightAnswerClicked()

                            }
                        }} />
                    {(correctHL) ? <Image src={activitytype01?.sprites[19]} alt="" className={`highlighterAnim ${cl1}`} /> : null}

                    <Image src={activitytype01?.sprites[hNw01]} alt="" className={cl2} onClick={() => {
                        if (click) {
                            setwrongHL01(true)
                            wrongAnswerClicked()
                        }
                    }}
                    />
                    {(wrongHL01) ? <Image src={activitytype01?.sprites[20]} alt="" className={`highlighterAnim ${cl2}`} /> : null}

                    <Image src={activitytype01?.sprites[hNw02]} alt="" className={cl3} onClick={() => {
                        if (click) {
                            setwrongHL02(true)
                            wrongAnswerClicked()
                        }
                    }} />
                    {(wrongHL02) ? <Image src={activitytype01?.sprites[20]} alt="" className={`highlighterAnim ${cl3}`} /> : null}
                    {(() => {
                        switch (jugNum) {
                            case 1:
                                return <Image src={activitytype01?.sprites[21]} alt="" className="jugIcon" />
                            case 2:
                                return <Image src={activitytype01?.sprites[22]} alt="" className="jugIcon" />
                            case 3:
                                return <Image src={activitytype01?.sprites[23]} alt="" className="jugIcon" />
                            case 4:
                                return <Image src={activitytype01?.sprites[24]} alt="" className="jugIcon" />
                            case 5:
                                return <Image src={activitytype01?.sprites[25]} alt="" className="jugIcon" />
                            case 6:
                                return <Image src={activitytype01?.sprites[26]} alt="" className="jugIcon" />
                            default:
                                return null
                        }
                    })()}

                </div>
            }
        />

    );


}

export default Activity01;
