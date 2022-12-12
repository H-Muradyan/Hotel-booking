import React, { useState, useEffect } from 'react'

export const GetScroll = () => {
  const [scrollPosition, setScrollPosition] = useState()

  const onScroll = () => {
    setScrollPosition(window.scrollY)
    window.addEventListener('scroll', onScroll)
  }

  useEffect(() => {
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollPosition
}
