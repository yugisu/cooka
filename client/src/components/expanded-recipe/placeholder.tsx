import React from 'react'
import styled from 'styled-components'

import { TextPlaceholder } from 'components/text-placeholder'
import { createBreath } from 'styles/keyframes/breath.keyframes'

import * as S from './styled'

const Image = styled(S.Image)`
  background-color: currentColor;

  animation: ${createBreath()} 1s alternate-reverse infinite;
`

const Body = styled(S.Body)`
  &::before {
    display: none;
  }
`

export const ExpandedRecipePlaceholder = React.memo(
  () => {
    return (
      <S.Container>
        <Image as="div" />
        <S.Content>
          <S.Title>
            <TextPlaceholder lineAmount={1} />
          </S.Title>

          <S.Description>
            <TextPlaceholder lineAmount={3} />
          </S.Description>

          <Body>
            <TextPlaceholder lineAmount={7} disableAnimation />
          </Body>
        </S.Content>
      </S.Container>
    )
  },
  () => true,
)
