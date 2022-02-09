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
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { activitytype01 } = Assets;
    const [cl1, setCL1] = useState('')
    const [cl2, setCL2] = useState('')
    const [cl, setCL] = useState('')
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_01.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        randomize()
    }, [])
    const randomize = () => {
        var classnames = ['leftHexagonIcon', 'rightHexagonIcon', 'centerHexagonIcon'];
        var random1 = classnames[Math.floor(Math.random() * classnames.length)];
        var removedclassname1 = classnames.filter(item => item !== random1)
        var random2 = removedclassname1[Math.floor(Math.random() * removedclassname1.length)];
        var removedclassname2 = removedclassname1.filter(item => item !== random2)
        var random3 = removedclassname2[Math.floor(Math.random() * removedclassname2.length)];
    }

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype01Screen'>
                    <Image src={activitytype01?.sprites[0]} alt="" className={random1} />
                    <Image src={activitytype01?.sprites[1]} alt="" className={random2} />
                    <Image src={activitytype01?.sprites[2]} alt="" className={random3} />
                    <Image src={activitytype01?.sprites[3]} alt="" className="jugIcon" />
                </div>
            }
        />

    );
}

export default Activity01;
