import React from "react"
import arrowDown from "/static/img/general/arrow-down.svg"

const ArrowDown = ({linkTo}) => {
  return (
    <a href={linkTo} className="arrow-down">
      <img src={arrowDown}/>
    </a>
  )
}

export default ArrowDown;



