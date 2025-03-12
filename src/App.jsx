import { useState } from "react"
import Square from "./Square"
import ContextMenu from "./ContextMenu"
const colorList = ["brown", "blue", "red", "green", "pink"]

function App() {
  const grid = Array(5000).fill(undefined)
  const [color, setColor] = useState(0)
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [drag, setDrag] = useState(false)

  const handleContextMenu = (e) => {
    e.preventDefault()
    setShow(true)
    setPosition({
      x: e.pageX - 10,
      y: e.pageY - 10,
    })
  }

  return (
    <div className="draw-container" onContextMenu={handleContextMenu}>
      {grid.map((_, index) => (
        <Square
          key={index}
          currentColor={colorList[color]}
          setDrag={setDrag}
          drag={drag}
        />
      ))}
      {show ? (
        <ContextMenu
          setColor={setColor}
          setShow={setShow}
          colorList={colorList}
          position={position}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
