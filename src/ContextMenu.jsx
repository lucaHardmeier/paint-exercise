const ContextMenu = ({ setColor, colorList, position, setShow }) => {
  const handleClick = (index) => {
    setColor(index)
    setShow(false)
  }

  return (
    <div
      className="context-menu"
      style={{ top: position.y, left: position.x }}
      onMouseLeave={() => setShow(false)}
    >
      {colorList.map((color, index) => (
        <div
          className="color-option"
          key={color}
          style={{
            backgroundColor: color,
          }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  )
}

export default ContextMenu

// Anabalsamo@worpik.com
// mandar repo en github y link del programa finalizado
