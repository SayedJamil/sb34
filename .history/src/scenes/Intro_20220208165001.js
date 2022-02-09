import React, { useContext } from 'react';
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';

function Intro() {
    const { Bg, Loading } = useLoadAssetimport React from 'react';

    export default function Image({ src, className, id, alt, onClick }) {
        return src ? <img
            alt={alt}
            id={id}
            className={className}
            onClick={onClick}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(src)}`} /> : null;
    }
(AssetsMap.intro)
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
