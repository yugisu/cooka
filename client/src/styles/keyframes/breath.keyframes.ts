import { keyframes } from 'styled-components'

export const createBreath = ({ from = 20, to = 25 } = {}) => keyframes`
  from {
    opacity: ${from}%;
  }

  to {
    opacity: ${to}%;
  }
`
