import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { useForceUpdate } from 'utils/use-force-update.util'
import { createBreath } from 'styles/keyframes/breath.keyframes'

const Container = styled.span<{ gap?: number }>`
  display: block;
`

const Line = styled.span<{ length: number }>`
  display: inline-block;
  width: ${props => props.length}%;

  font-size: inherit;
  line-height: 1.1em;

  background-color: currentColor;
  opacity: 20%;
  border-radius: 3px;

  transition: width 0.25s;

  animation: ${createBreath()} 1s alternate-reverse infinite;

  & + & {
    margin-top: 0.2em;
  }

  &::before {
    content: '\u00A0';
  }
`

type Props = {
  lineAmount: number
  gap?: number
  disableAnimation?: boolean
}

export const TextPlaceholder = ({ lineAmount, disableAnimation, gap }: Props) => {
  const forceUpdate = useForceUpdate()

  const intervalRef = useRef<number | null>(null)

  const calculateLength = () => Math.floor(Math.random() * 25 + 75)

  useEffect(() => {
    if (!disableAnimation) {
      intervalRef.current = setInterval(() => forceUpdate(), 3000)

      return () => {
        intervalRef.current && clearInterval(intervalRef.current)
      }
    }
  }, [disableAnimation, forceUpdate])

  return (
    <Container gap={gap}>
      {Array(lineAmount)
        .fill(null)
        .map((_, idx) => (
          <Line length={calculateLength()} key={`line-${idx}`} />
        ))}
    </Container>
  )
}

TextPlaceholder.Line = Line
