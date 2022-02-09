import React, { useContext } from 'react';
import AssetsMap from '../Asset';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';

function Explain() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.explain)
    const { setSceneId, Assets } = useContext(SceneContext);
    const { explain } = Assets;

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='introScreen'>
                    <Image src={explain?.sprites[0]} alt="" className="introTitle" />
                    <Image src={explain?.sprites[1]} alt="" className="introTitleBG" />
                </div>
            }
        />
    );
}

export default Explain;
