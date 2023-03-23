import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react"

import data, { type DataItem } from "../data"

type AddHero = (hero: Omit<DataItem, "id">) => void

type HeroesContextType = {
  heroes: DataItem[]
  addHero: AddHero
}

let id = data.length

const HeroesContext = createContext<HeroesContextType | null>(null)

export const HeroesProvider = ({ children }: PropsWithChildren) => {
  const [heroes, setHeroes] = useState<DataItem[]>(data)

  const addHero: AddHero = hero => {
    setHeroes([...heroes, { ...hero, id }])
    id++
  }

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        addHero,
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}

export const useHeroes = () => {
  const context = useContext(HeroesContext)

  if (!context) {
    throw new Error("useHeroes must be used within a HeroesProvider")
  }

  return context
}
