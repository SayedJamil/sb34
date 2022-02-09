import React from 'react';
import Scenes from '../utils/Scenes';

function Intro() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { intro } = Assets;

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
              
                    <Image src={intro?.sprites[0]} alt="txt" className="" /
                   


                    {/* <div ref={Ref} className="intro_lottie_container"></div> */}
                </>
            }
        />
    )
}

export default Intro;