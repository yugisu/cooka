import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { mobile } from 'utils/media.util'

export const LinkContainer = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;

  border-radius: 0.35rem;

  &:hover,
  &:focus,
  &:active {
    color: inherit;
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary};
  }
`

export const Container = styled.article`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 0.35rem;

  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 12px 16px rgba(0, 0, 0, 0.1),
      0 32px 64px rgba(0, 0, 0, 0.07);
  }
`

export const Image = styled.img`
  display: block;
  height: 16rem;
  width: 100%;
  object-fit: cover;

  border-radius: 0.35rem 0.35rem 0 0;
  user-select: none;

  ${mobile.css`
    height: 12rem;
  `}
`

export const Content = styled.div`
  position: relative;

  padding: 2rem 1rem 2.5rem;

  ${mobile.css`
    padding: 1rem 1rem 1.5rem;
  `}

  &:first-child {
    ${mobile.css`
      padding-top: 1.5rem;
    `}
  }
`

export const DateMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(10%, -50%);

  padding: 0.2rem 0.5rem;

  color: ${props => props.theme.colors.grey};
  font-size: 0.8rem;
  font-weight: bold;

  background-color: ${props => props.theme.colors.white};
  border-radius: 0.35rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h3`
  margin-bottom: 1.5rem;

  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.5rem;
  font-weight: normal;

  ${mobile.css`
    margin-bottom: 0.75rem;
  `}
`

export const Description = styled.p``
