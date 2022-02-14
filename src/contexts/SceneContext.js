import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [transition, setTransition] = useState(null);
  const [Assets, setAssets] = useState({})
  const [iteration, setIteration] = useState(1)
  const [jugNum, setJugNum] = useState(1)
  const [bubbleNum, setBubbleNum] = useState(0)
  const [disableIcon, setDisableIcon] = useState(0)
  const [enableActivity02, setEnableActivity02] = useState(false)
  const [act02array, setAct02Array] = useState([])
  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, transition, setTransition, setIteration, iteration, jugNum, setJugNum, bubbleNum, setBubbleNum, disableIcon, setDisableIcon, enableActivity02, setEnableActivity02, act02array, setAct02Array }}>
      {children}
    </SceneContext.Provider>
  )
}
