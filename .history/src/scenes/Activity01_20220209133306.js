import React from 'react';

function Activity01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { intro } = Assets;
    
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
