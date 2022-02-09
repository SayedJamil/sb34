import React, { useContext, useEffect, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset'
import '../styles/intro.css'
import { Howl } from 'howler';
function Intro() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { intro } = Assets;
    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_02.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
    }, [])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='introScreen'>
                    <Image src={intro?.sprites[0]} alt="" className="introTitle" />
                    <Image src={intro?.sprites[1]} alt="" className="introTitleBG" />
                    <Image src={intro?.sprites[2]} alt="" className="play_btn"
                        onClick={() => {
                            setisLoading(true)
                            setSceneId('/explain')
                        }
                        } />
                </div>
            }
        />

    )
}

export default Intro;
