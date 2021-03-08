import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SyncLoader } from "react-spinners"

import { getPokemonList } from "../../modules/actions"
import Navbar from "../../layouts/Navbar"
import PokeCard from "../../components/PokeCard"

import BgGrey from "../../assets/images/container_bg.png"

import { BgStyled } from "../../layouts/styled"
import { CardWrap, ContentWrapper, NoOverflow, LoadingWrapper } from "./styled"

export default function Home() {
  const statePokemon = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
    console.log(statePokemon)
  }, [])

  return (
    <>
      <NoOverflow>
        <BgStyled img={BgGrey}>
          <ContentWrapper>
            <Navbar />
            <CardWrap>
              {statePokemon.data.map((item, i) => {
                console.log(item.name)
                return <PokeCard key={i} name={item.name} id={i} />
              })}
            </CardWrap>
            <LoadingWrapper>
              <SyncLoader loading={statePokemon.isLoading} color="#ff416c" />
            </LoadingWrapper>
          </ContentWrapper>
        </BgStyled>
      </NoOverflow>
    </>
  )
}
