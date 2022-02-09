import React from 'react';
import AssetsMap from '../Asset';
import Scenes from '../utils/Scenes';

function Intro() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { setSceneId, Assets } = useContext(SceneContext);
    const { intro } = Assets;

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <Image src={intro?.sprites[0]} alt="txt" className="" />

                </>
            }
        />
    )
}

export default Intro;
