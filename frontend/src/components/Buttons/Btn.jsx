import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: var(--primary);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  } 

  @media (min-width: 768px) {
      padding: 0 2.6rem;
  }
`;

export default function Btn() {
  return (
    <Button>Fale Conosco</Button>
  )
}
