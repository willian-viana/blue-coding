import React, { useState } from "react"

import { GiphySearch } from "./components/GiphySearch"
import { GiphyList } from "./components/GiphyList"

function App() {
  const [gifs, setGifs] = useState([])

  const setGifsToState = (gifData) => {
    setGifs(gifData)
  }

  return (
    <>
      <GiphySearch setGifs={setGifsToState} />
      <GiphyList gifs={gifs} />
    </>
  )
}

export default App
