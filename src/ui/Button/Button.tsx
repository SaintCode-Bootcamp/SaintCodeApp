import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  children: string,
  className: string,
  handler: MouseEventHandler,
}

export const Button = ({ handler, children, className }: ButtonProps) => {
  return (
    <>
      <button onClick={handler} className={className}>{children}</button>
    </>
  )
}
