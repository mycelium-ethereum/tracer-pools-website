import React from "react"

const Button = ({children, linkTo}) => {
  return (
    <a className="tracer-btn" href={linkTo}>
        {children}
    </a>
  )
}

export default Button;



