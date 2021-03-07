import React from "react"
import { CardWrap, LoadingWrapper, ContentWrapper, NoOverflow } from "./styled"
import BgGrey from "../../assets/images/container_bg.png"
import { BgStyled } from "../../layouts/styled"
import Navbar from "../../layouts/Navbar"
import PokeCard from "../../components/PokeCard"

export default function Home() {
  return (
    <>
      <NoOverflow>
        <BgStyled img={BgGrey}>
          <ContentWrapper>
            <Navbar />
            <CardWrap>
              <PokeCard />
              <PokeCard />
              <PokeCard />
              <PokeCard />
              <PokeCard />
              <PokeCard />
              <PokeCard />
            </CardWrap>
          </ContentWrapper>
        </BgStyled>
      </NoOverflow>
    </>
  )
}
