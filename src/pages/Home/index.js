import React from "react"
import { CardWrap } from './styled'
import PokeCard from '../../components/PokeCard'

export default function Home() {
  return (
    <>
    <CardWrap>
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </CardWrap>
    </>
  )
}
