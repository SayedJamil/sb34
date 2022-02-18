import { Howl } from 'howler';
import React, { useContext, useEffect, useRef, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
import lottie from 'lottie-web';

function Activity01End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01end)
    const { setSceneId, Assets, setisLoading, isLoading, setEnableActivity02, enableActivity02, setIteration, setJugNum } = useContext(SceneContext);
    const { activitytype01end } = Assets;
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_08.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        if (!isLoading) {
            setIteration(1)
            setJugNum(1)
            playSound.play()
        }
        playSound.on('play', () => {
            lottie.play()
        })
        const sound = new Howl({
            src: [`internal/audio/SB_34_Audio_09.mp3`],
            autoplay: false,
        });

        playSound.on('end', () => {
            sound.play()
        })
        sound.on('end', () => {
            setisLoading(true)
            if (enableActivity02) {
                setSceneId('/activity021')
            } else {
                setSceneId('/wateruses01')
            }

        })
    }, [isLoading])

    useEffect(() => {
        if (activitytype01end?.lottie && Ref2.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "activity01EndLady",
                    container: Ref2.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: false,
                    animationData: activitytype01end?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (activitytype01end?.lottie && Ref3.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "activity01EndLady01",
                    container: Ref3.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: false,
                    animationData: activitytype01end?.lottie[1],
                })
            } catch (err) {
                console.log(err)
            }
        }

    }, [Assets, Loading])
    const handleNextClick = () => {
        playSound.stop()
        setisLoading(true)
        if (enableActivity02) {
            setSceneId('/activity021')
        } else {
            setSceneId('/wateruses01')
        }
    }
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <Image src={activitytype01end?.sprites[1]} alt="" className="next_btn"
                        onClick={() => handleNextClick()} />
                    {
                        (!enableActivity02)
                            ? <div ref={Ref2} className="activity01endLady" id="activity01EndLady"></div>
                            : <div ref={Ref3} className="activity01endLady" id="activity01EndLady01"></div>
                    }
                    {
                        (!enableActivity02)
                            ? <Image src={activitytype01end?.sprites[0]} alt="" className="activity01endJug" />
                            : null
                    }

                </>

            }
        />

    );
}

export default Activity01End