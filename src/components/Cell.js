export function Cell({
  id,
  cell,
  setCells,
  go,
  setGo,
  cells,
  winMessage,
  winArr,
}) {
  const handleClick = (el) => {
    const value =
      el.target.firstChild.classList.contains('circle') ||
      el.target.firstChild.classList.contains('cross')
      
    if (!value) {
      if (go === 'circle') {
        el.target.firstChild.classList.add('circle')
        handleCellChange('circle')
        setGo('cross')
      }
      if (go === 'cross') {
        el.target.firstChild.classList.add('cross')
        handleCellChange('cross')
        setGo('circle')
      }
    } else {
      value = 'circle'
    }
   
  }

  const handleCellChange = (className) => {
    const newCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell
      }
    })
    setCells(newCells)
  }

  // const crossedOutCell = (className) => {
  //   console.log(winArr)
  //   winArr.map((cell, index) => {
  //     if (index === id) {
  //       return className
  //     } else {
  //       return cell
  //     }
  //   })
  // }

  return (
    <div
      className="box"
      id={id}
      onClick={!winMessage && cell === null ? handleClick : undefined}>
      <div className={cell}></div>
    </div>
  )
}
