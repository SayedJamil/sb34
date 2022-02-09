import { Howl } from 'howler';
import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/Acitivity.css'
function Activity01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { activitytype01 } = Assets;

    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_01.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
    }, [])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype01Screen'>
                    <Image src={activitytype01?.sprites[0]} alt="" className="leftHexagonIcon" />
                    <Image src={activitytype01?.sprites[1]} alt="" className="rightHexagonIcon" />
                    <Image src={activitytype01?.sprites[2]} alt="" className="circleIcon" />
                    <Image src={activitytype01?.sprites[3]} alt="" className="jugIcon" />
                </div>
            }
        />

    );
}

export default Activity01;
