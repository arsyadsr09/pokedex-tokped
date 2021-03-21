import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Layouts from "./layouts"

import Home from "./pages/Home"
import Detail from "./pages/Detail"
import MyPokemon from "./pages/MyPokemon"

export const Routes = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:name" exact component={Detail} />
      <Route path="/my-pokemon" exact component={MyPokemon} />
    </Layouts>
  </BrowserRouter>
)
