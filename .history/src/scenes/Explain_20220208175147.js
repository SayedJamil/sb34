import React from 'react';

function Explain() {
    return (<Scenes
        Bg={Bg}
        sprites={
            <div className='introScreen'>
                <Image src={intro?.sprites[0]} alt="" className="introTitle" />
                <Image src={intro?.sprites[1]} alt="" className="introTitleBG" />
                <Image src={intro?.sprites[2]} alt="" className="play_btn" />
            </div>
        }
    />);
}

export default Explain;
