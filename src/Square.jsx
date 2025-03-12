import { useState } from "react"

const Square = ({ currentColor, setDrag, drag }) => {
  const [color, setColor] = useState("")

  const changeColor = () => setColor((c) => (c && !drag ? "" : currentColor))

  const handleMouseDown = (e) => {
    if (e.button !== 0) return
    changeColor()
    setDrag(true)
  }

  const handleMouseOver = () => {
    if (drag) changeColor()
  }

  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      onMouseUp={() => setDrag(false)}
    ></div>
  )
}

export default Square
