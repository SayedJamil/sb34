import React, { useContext, useEffect, useRef, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/explain.css'
import { Howl } from 'howler';
import lottie from 'lottie-web';

function Explain() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.explain)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { explain } = Assets;
    const Ref1 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_02.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        setisLoading(false)
        playSound.play()
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/activity011')
        })
    }, [])
    useEffect(() => {
        if (explain?.lottie && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explainSceneLady",
                    container: Ref1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: explain?.lottie[0],
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
                <div className='introScreen'>
                 
                    <div ref={Ref1} className="explainLady" id="explainSceneLady"></div>
                </div>
            }
        />
    );
}

export default Explain;
