import * as React from 'react'

export const NARROW_THRESOLD = 600

export function useNarrowScreen(): boolean {
  const [isNarrow, setIsNarrow] = React.useState(false)

  React.useEffect(() => {
    // Init on ssr.
    setIsNarrow(document.body.clientWidth < NARROW_THRESOLD)

    const resizeHandler = () => {
      setIsNarrow(document.body.clientWidth < NARROW_THRESOLD)
    }
    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return isNarrow
}