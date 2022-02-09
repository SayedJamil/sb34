import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/explain.css'
import { Howl } from 'howler';

function Explain() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.explain)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { explain } = Assets;

    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_07.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        setisLoading(false)
        playSound.play()
    }, [])
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='introScreen'>
                    <Image src={explain?.sprites[0]} alt="" className="explainLady" />
                    <Image src={explain?.sprites[1]} alt="" className="explainLadyEyes" />
                </div>
            }
        />
    );
}

export default Explain;
