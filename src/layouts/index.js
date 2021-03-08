import React from "react"
import BgBlack from "../assets/images/body_bg.png"

import { BgStyled, ContentStyled, ContainerStyled } from "./styled"
import useWindowDimensions from "../utils/windowDimensions"

export default function Layouts(props) {
  const { width } = useWindowDimensions()
  return (
    <BgStyled img={BgBlack}>
      <ContainerStyled width={width}>
        <ContentStyled>{props.children}</ContentStyled>
      </ContainerStyled>
    </BgStyled>
  )
}
