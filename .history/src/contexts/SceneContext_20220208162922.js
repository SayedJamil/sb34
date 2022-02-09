import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [transition, setTransition] = useState(null);
  const [Assets, setAssets] = useState({})
 

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, num, setNum, charNum, setCharNum, toolNum, setToolNum, stars, setStars, transition, setTransition, bgSound, setBgSound }}>
      {children}
    </SceneContext.Provider>
  )
}
