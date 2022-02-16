import { Howl } from 'howler';
import React, { useContext, useEffect, useRef, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
import lottie from 'lottie-web';

function Activity02End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity02end)
    const { setSceneId, Assets, setisLoading, isLoading, setEnableActivity02, enableActivity02, setIteration, setJugNum, setBubbleNum, setDisableIcon } = useContext(SceneContext);
    const { activitytype02end } = Assets;
    const Ref4 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_16.mp3`],
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
            src: [`internal/audio/SB_34_Audio_17.mp3`],
            autoplay: false,
        });

        playSound.on('end', () => {
            sound.play()
        })
        sound.on('end', () => {
            setisLoading(true)
            setBubbleNum(6)
            setDisableIcon(0)
            setSceneId('/savewater01')
        })
    }, [isLoading])

    useEffect(() => {
        if (activitytype02end?.lottie && Ref4.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "activity02EndLady",
                    container: Ref4.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: false,
                    animationData: activitytype02end?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }


    }, [Assets, Loading])



    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div ref={Ref4} className="activity02endLady" id="activity02EndLady"></div>


                    <Image src={activitytype02end?.sprites[0]} alt="" className="activity02endJug" />
                    <Image src={activitytype02end?.sprites[0]} alt="" className="activity02endJug2" />


                </>

            }
        />

    );
}

export default Activity02End