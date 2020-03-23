import { useState, useCallback } from 'react'

export const useForceUpdate = () => {
  const [, setState] = useState(0)

  const forceUpdate = useCallback(() => setState(v => v + 1), [])

  return forceUpdate
}
