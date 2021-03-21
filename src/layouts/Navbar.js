import React from "react"
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import { NavbarStyled, LinkMyPokemon } from "./styled"

export default function Navbar() {
  return (
    <NavbarStyled className='row'>
      <Link className='' to="/">
        <img src={Logo} width={250} alt="logo" />
      </Link>
      <LinkMyPokemon to="/my-pokemon">
        <img
          src={`https://pngimg.com/uploads/pokeball/pokeball_PNG21.png`}
          alt="PokeBall"
          width="50px"
        />
        <span>My Pokemon</span>
      </LinkMyPokemon>
    </NavbarStyled>
  )
}
