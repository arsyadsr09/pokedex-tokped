import React from "react"
import BgBlack from "../assets/images/body_bg.png"
import Navbar from './Navbar'

import {
  BgStyled,
  ContentStyled,
  ContainerStyled,
} from "./styled"

export default function Layouts(props) {
  return(
  <BgStyled img={BgBlack}>
    <ContainerStyled>
      <ContentStyled>
        <Navbar />
        {props.children}
      </ContentStyled>
    </ContainerStyled>
  </BgStyled>
)}
