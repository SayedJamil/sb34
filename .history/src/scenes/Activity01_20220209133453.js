import { Howl } from 'howler';
import React, { useContext, useState } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import useLoadAsset from '../utils/useLoadAsset';

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
                <div className='introScreen'>
                    <Image src={intro?.sprites[0]} alt="" className="introTitle" />
                    <Image src={intro?.sprites[1]} alt="" className="introTitleBG" />
                    <Image src={intro?.sprites[2]} alt="" className="play_btn"
                        onClick={() => {
                            setisLoading(true)
                            setSceneId('/explain')
                            playSound.stop()
                        }
                        } />
                </div>
            }
        />

    );
}

export default Activity01;