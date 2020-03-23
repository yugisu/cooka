import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 0.35rem;
`

export const Image = styled.img`
  display: block;
  height: 20rem;
  width: 100%;
  object-fit: cover;

  border-radius: 0.35rem 0.35rem 0 0;
  user-select: none;
`

export const Content = styled.div`
  position: relative;

  padding: 2rem 1rem 2.5rem;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  color: ${props => props.theme.colors.grey};
  font-size: 0.8rem;

  > *:not(:first-child) {
    margin-left: 0.5rem;
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

export const Title = styled.h1`
  margin-bottom: 1.5rem;

  width: 100%;

  font-size: 2.5rem;
`

export const Description = styled.p``

export const Body = styled.p`
  position: relative;

  margin-top: 2rem;
  padding-top: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 0.25rem;
    width: 30%;

    border-radius: 0.25rem;
    background: ${props => props.theme.colors.black};
  }
`
