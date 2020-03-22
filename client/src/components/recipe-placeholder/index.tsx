import React from 'react'
import styled from 'styled-components'

import { Recipe } from 'components/recipe'
import { TextPlaceholder } from 'components/text-placeholder'
import { createBreath } from 'styles/keyframes/breath.keyframes'

const Image = styled(Recipe.Image)`
  background-color: currentColor;

  animation: ${createBreath()} 1s alternate-reverse infinite;
`

export const RecipePlaceholder = React.memo(
  () => {
    return (
      <Recipe.Container>
        <Image as="div" />
        <Recipe.Content>
          <Recipe.Title>
            <TextPlaceholder lineAmount={1} />
          </Recipe.Title>
          <Recipe.Description as="div">
            <TextPlaceholder lineAmount={3} />
          </Recipe.Description>
        </Recipe.Content>
      </Recipe.Container>
    )
  },
  () => true,
)
