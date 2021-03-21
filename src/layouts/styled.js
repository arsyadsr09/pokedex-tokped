import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const BgStyled = styled.div`
  background-image: url(${(props) => props.img});
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

export const ContainerStyled = styled.div`
  width: ${(props) =>
    props.width < 1366 ? "100%" : 1366 < props.width < 1500 ? "85%" : "75%"};
  min-height: 100vh;
  background-color: white;
`

export const ChildrenStyled = styled.div`
  padding-top: 2rem;
`

export const ContentStyled = styled.div`
  // padding: 1rem;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const NavbarStyled = styled.div`
  position: relative;
  padding: 1rem;
  margin: 0 2rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkMyPokemon = styled(Link)`
  position: absolute;
  right: 0rem;
  text-decoration: none;
  color: #2f3542;
  font-weight: 600;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    text-decoration: none;
    background: #eccc68;
    color: #2f3542;
    transition: all 0.5s ease;
  }

  img {
    margin-right: 0.7rem;
  }
`
