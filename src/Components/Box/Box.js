import React from 'react';
import './Box.scss'

const Box = ({title}) => {
  return (
    <div className={`${title % 2 === 0 ? "box" : "box1"} center`} >{title}</div>
  )
}

export default Box