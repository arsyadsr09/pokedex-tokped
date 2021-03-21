import React, { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SyncLoader } from "react-spinners"
import debounce from "lodash.debounce"

import { getPokemonList } from "../../modules/pokemon/action"
import Navbar from "../../layouts/Navbar"
import PokeCard from "../../components/PokeCard"

import BgGrey from "../../assets/images/container_bg.png"

import { BgStyled } from "../../layouts/styled"
import { CardWrap, ContentWrapper, LoadingWrapper } from "../Home/styled"

export default function MyPokemon() {
  const statePokemon = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()
  const [isBottom, setIsBottom] = useState(false)

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true)
    }
  }

  const onScroll = useCallback(
    debounce(() => {
      if (statePokemon.pagination.hasNext) {
        dispatch(getPokemonList(statePokemon.pagination.currentPage + 1))
      }
      setIsBottom(false)
    }, 400),
    [isBottom]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getPokemonList())
  }, [])

  useEffect(() => {
    if (isBottom) {
      onScroll()
    }
  }, [isBottom])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <BgStyled img={BgGrey}>
        <ContentWrapper>
          <Navbar />
          <CardWrap>
            {statePokemon.data.map((item, i) => {
              return <PokeCard key={i} data={item} name={item.name} id={i} />
            })}
          </CardWrap>
          <LoadingWrapper>
            <SyncLoader loading={statePokemon.isLoading} color="#ff416c" />
          </LoadingWrapper>
        </ContentWrapper>
      </BgStyled>
    </>
  )
}
