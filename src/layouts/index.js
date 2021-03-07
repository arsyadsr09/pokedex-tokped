import React from "react"
import BgBlack from "../assets/images/body_bg.png"

import {
  BgStyled,
  ContentStyled,
  ContainerStyled,
} from "./styled"

export default function Navbar(props) {
  return(
  <BgStyled img={BgBlack}>
    <ContainerStyled>
      <ContentStyled>
        {props.children}
      </ContentStyled>
    </ContainerStyled>
  </BgStyled>
)}
