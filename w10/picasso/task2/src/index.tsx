import React from "react"
import ReactDOM from "react-dom/client"

import Picasso from "@toptal/picasso-provider"
import { HeroesProvider } from "./contexts/Heroes"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <Picasso>
      <HeroesProvider>
        <App />
      </HeroesProvider>
    </Picasso>
  </React.StrictMode>
)
