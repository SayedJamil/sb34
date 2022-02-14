import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
function Activity01End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01end)
    const { setSceneId, Assets, setisLoading, isLoading } = useContext(SceneContext);
    const { activitytype01end } = Assets;
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_08.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)
    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }
        const sound = new Howl({
            src: [`internal/audio/SB_34_Audio_09.mp3`],
            autoplay: false,
        });
        playSound.on('end', () => {
            sound.play()
        })
    }, [isLoading])
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <Image src={activitytype01end?.sprites[0]} alt="" className="activity01endLady" />
                    <Image src={activitytype01end?.sprites[1]} alt="" className="activity01endLadyEyes" />
                    <Image src={activitytype01end?.sprites[2]} alt="" className="activity01endJug" />

                </>

            }
        />

    );
}

export default Activity01End