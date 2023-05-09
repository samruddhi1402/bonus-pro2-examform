import React from 'react'

export default function CustomButton(props) {
  return (
    <div>
      <button className={props.style} onClick={props.onClick}>{props.btntxt}</button>
    </div>
  )
}