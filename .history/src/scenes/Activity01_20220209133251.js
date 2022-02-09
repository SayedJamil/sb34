import React from 'react';

function Activity01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
    const { setSceneId, Assets, setisLoading } = useContext(SceneContext);
    const { intro } = Assets;
  return <div></div>;
}

export default Activity01;
