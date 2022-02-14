import React, { useContext, useEffect, useState } from 'react'
import AssetsMap from '../Asset';
import { SceneContext } from '../contexts/SceneContext';
import Image from '../utils/elements/Image';
import Scenes from '../utils/Scenes';
import useLoadAsset from '../utils/useLoadAsset';
import '../styles/activity.css'
import { Howl } from 'howler';


function Activity02() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity02)
    const { setSceneId, Assets, setisLoading, iteration, setIteration, isLoading, jugNum, setJugNum, enableActivity02, act02array, setAct02Array, bubbleNum, setBubbleNum } = useContext(SceneContext);
    const { activitytype02 } = Assets;
    const [correctOptionSide, setCorrectOptionSide] = useState('')
    const [clickedOption, setClickedOption] = useState('')
    const [iconNum, setIconNum] = useState()
    const [leftCorrectHL, setLeftCorrectHL] = useState(false)
    const [leftWrongHL, setLeftWrongHL] = useState(false)
    const [rightCorrectHL, setRightCorrectHL] = useState(false)
    const [rightWrongHL, setRightWrongHL] = useState(false)
    const [click, setClick] = useState(false)

    const sound = new Howl({
        src: [`internal/audio/SB_34_Audio_20.mp3`],
        autoplay: false,
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        if (!isLoading) {
            playSound.play()
            randomize()
        }
        playSound.on('end', () => {
            setClick(true)
        })
        console.log(act02array.length)
        console.log(bubbleNum)
        if (act02array.length == 8) {
            setSceneId('/')
        }
    }, [isLoading])


    const randomize = () => {
        var randomNumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
        if (randomNumber % 2 != 0) {
            randomize()
        } else {
            var findNum = act02array.find(elem => elem == randomNumber);
            console.log(findNum)
            if (findNum == null) {
                console.log(randomNumber)
                setIconNum(randomNumber)
                setBubbleNum(randomNumber)
                if (randomNumber == 0) {
                    setCorrectOptionSide('Left')
                } else if (randomNumber == 2) {
                    setCorrectOptionSide('Left')
                } else if (randomNumber == 4) {
                    setCorrectOptionSide('Left')
                } else {
                    setCorrectOptionSide('Right')
                }
                setAct02Array([...act02array, randomNumber]);
                console.log(act02array)
            } else {
                randomize()
            }
        }

    }

    const handleButtonClick = () => {
        setClick(false)
        if (correctOptionSide === 'Left' && clickedOption === 'Left') {
            setLeftCorrectHL(true)
            rightAnswerClicked()
        }
        if (correctOptionSide === 'Left' && clickedOption === 'Right') {
            setRightWrongHL(true)
            wrongAnswerClicked()
        }
        if (correctOptionSide === 'Right' && clickedOption === 'Left') {
            setLeftWrongHL(true)
            wrongAnswerClicked()
        }
        if (correctOptionSide === 'Right' && clickedOption === 'Right') {
            setRightCorrectHL(true)
            rightAnswerClicked()
        }
    }
    const rightAnswerClicked = () => {

        var rightsound = new Howl({
            src: [`internal/audio/SB_34_Audio_06.mp3`],//change here
        });
        rightsound.play();
        rightsound.on('end', () => {
            setisLoading(true)
            setTimeout(() => {
                setIteration(iteration + 1)
            }, 3000)
            if (iteration % 2 == 0) {
                playSound.stop()
                setSceneId('/activity021')
            } else {
                playSound.stop()
                setSceneId('/activity022')
            }
        })
        setJugNum(jugNum + 1)

    }

    const wrongAnswerClicked = () => {

        var rightsound = new Howl({
            src: [`internal/audio/SB_34_Audio_04.mp3`],//change here
        });
        rightsound.play();
        rightsound.on('end', () => {
            setClick(true)
            setLeftWrongHL(false)
            setRightWrongHL(false)
        })

    }

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <div className='activitytype02Screen'>
                    <Image src={activitytype02?.sprites[iconNum]} alt=""
                        className="leftSquareIcon"
                        onClick={() => {
                            if (click) {
                                setClickedOption('Left')
                                handleButtonClick()
                            }

                        }} />
                    {/* <Image src={activitytype02?.sprites[14]} alt="" className="leftSquareIcon" /> */}
                    {(leftCorrectHL) ? <Image src={activitytype02?.sprites[14]} alt="" className="leftSquareIcon" /> : null}
                    {(leftWrongHL) ? <Image src={activitytype02?.sprites[15]} alt="" className="leftSquareIcon" /> : null}

                    <Image src={activitytype02?.sprites[iconNum + 1]} alt=""
                        className="rightSquareIcon"
                        onClick={() => {
                            if (click) {
                                setClickedOption('Right')
                                handleButtonClick()
                            }

                        }} />
                    {/* <Image src={activitytype02?.sprites[16]} alt="" className="rightSquareIcon" /> */}
                    {(rightCorrectHL) ? <Image src={activitytype02?.sprites[16]} alt="" className="rightSquareIcon" /> : null}
                    {(rightWrongHL) ? <Image src={activitytype02?.sprites[17]} alt="" className="rightSquareIcon" /> : null}

                    <Image src={activitytype02?.sprites[26]} alt="" className="circleSquareIcon" />
                    {(() => {
                        switch (jugNum) {
                            case 1:
                                return <Image src={activitytype02?.sprites[18]} alt="" className="squareJugIcon" />
                            case 2:
                                return <Image src={activitytype02?.sprites[19]} alt="" className="squareJugIcon" />
                            case 3:
                                return <Image src={activitytype02?.sprites[20]} alt="" className="squareJugIcon" />
                            case 4:
                                return <Image src={activitytype02?.sprites[21]} alt="" className="squareJugIcon" />
                            case 5:
                                return <Image src={activitytype02?.sprites[22]} alt="" className="squareJugIcon" />
                            case 6:
                                return <Image src={activitytype02?.sprites[23]} alt="" className="squareJugIcon" />
                            case 7:
                                return <Image src={activitytype02?.sprites[24]} alt="" className="squareJugIcon" />
                            case 8:
                                return <Image src={activitytype02?.sprites[25]} alt="" className="squareJugIcon" />
                            default:
                                return null
                        }
                    })()}

                </div>
            }
        />

    );
}
export default Activity02;