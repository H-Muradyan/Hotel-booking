import React, { useState, useEffect } from 'react'

export default function GetWidth() {
  const [widthSize, setWidthSize] = useState()

  const width = () => {
    setWidthSize(window.innerWidth)
    window.addEventListener('resize', width)
  }

  useEffect(() => {
    width()
    return () => window.removeEventListener('resize', width)
  }, [])

  return widthSize
}
