import React, { useContext, useEffect, useRef, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset'
import '../styles/intro.css'
import { Howl } from 'howler';
import lottie from 'lottie-web';

function End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.end)
    const { setSceneId, Assets, setisLoading, setAct02Array, setIteration, isLoading } = useContext(SceneContext);
    const { endscene } = Assets;
    const Ref20 = useRef(null);
    const sound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/children_clapping.mp3`],
    });
    const welldonesound = new Howl({
        src: [`ee02_ow_tvhd_pl1/audio/SB_34_Audio_26.mp3`],
    });
    // SB_34_Audio_26
    const [playSound, setPlaySound] = useState(sound)
    const [playWellDone, setPlayWellDone] = useState(welldonesound)
    const [click, setClick] = useState(false)
    useEffect(() => {
        if (!isLoading) {
            playSound.play()
        }

        playSound.on('end', () => {
            playWellDone.play()
        })
        playWellDone.on('end', () => {
            setClick(true)
        })
    }, [isLoading])
    useEffect(() => {
        if (endscene?.lottie && Ref20.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "welldoneAnim",
                    container: Ref20.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: endscene?.lottie[0],
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
                <div>
                    <Image src={endscene?.sprites[0]} alt="" className="replay_btn"
                        onClick={() => {
                            if (click) {
                                setisLoading(true)
                                setSceneId('/')//change scenes here
                            }
                        }
                        } />
                    <div ref={Ref20} className="wellDoneAnim" id="welldoneAnim"></div>
                </div>
            }
        />

    )
}

export default End