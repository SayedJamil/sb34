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
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading } = useContext(SceneContext);
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
        src: [`internal/audio/SB_34_Audio_05.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        randomize()
        playSound.on('end', () => {
            setClick(true)
        })
        if (iteration == 6) {
            setIteration(1)
            setSceneId('/explain')
        } else {
            setTimeout(() => {
                setSceneId('/activity01')
            }, 2000)
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
        sethW(random4)
        var random5 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        var random6 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        if (random6 == random5) {
            random6 = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
        }
        sethNw01(random5)
        sethNw02(random6)
    }
    const rightAnswerClicked = () => {
        setClick(false)
        var sound = new Howl({
            src: [`internal/audio/SB_34_Audio_06.mp3`],//change here
        });
        sound.play();
        sound.on('end', () => {
            setisLoading(true)
            setTimeout(() => {
                setIteration(iteration + 1)
            }, 3000)
            setCorrectHL(false)
        })


    }

    const wrongAnswerClicked = () => {
        setClick(false)
        setTimeout(() => {
            setClick(true)
            setwrongHL01(false)
            setwrongHL02(false)
        }, 3000)
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
                    {(correctHL) ? <Image src={activitytype01?.sprites[19]} alt="" className={cl1} /> : null}

                    <Image src={activitytype01?.sprites[hNw01]} alt="" className={cl2} onClick={() => {
                        if (click) {
                            setwrongHL01(true)
                            wrongAnswerClicked()
                        }
                    }}
                    />
                    {(wrongHL01) ? <Image src={activitytype01?.sprites[20]} alt="" className={cl2} /> : null}

                    <Image src={activitytype01?.sprites[hNw02]} alt="" className={cl3} onClick={() => {
                        if (click) {
                            setwrongHL02(true)
                            wrongAnswerClicked()
                        }
                    }} />
                    {(wrongHL02) ? <Image src={activitytype01?.sprites[20]} alt="" className={cl3} /> : null}
                    {}
                    <Image src={activitytype01?.sprites[21]} alt="" className="jugIcon" />
                </div>
            }
        />

    );


}

export default Activity01;
