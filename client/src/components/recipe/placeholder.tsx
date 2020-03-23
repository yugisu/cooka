import React, { useRef } from 'react'
import styled from 'styled-components'

import { TextPlaceholder } from 'components/text-placeholder'
import { createBreath } from 'styles/keyframes/breath.keyframes'

import * as S from './styled'

const Image = styled(S.Image)`
  background-color: currentColor;

  animation: ${createBreath()} 1s alternate-reverse infinite;
`

export const RecipePlaceholder = React.memo(
  () => {
    const shouldDisplayImage = useRef(Math.random() > 0.4).current

    return (
      <S.Container>
        {shouldDisplayImage && <Image as="div" />}
        <S.Content>
          <S.Title>
            <TextPlaceholder lineAmount={1} />
          </S.Title>
          <S.Description>
            <TextPlaceholder lineAmount={3} />
          </S.Description>
        </S.Content>
      </S.Container>
    )
  },
  () => true,
)
