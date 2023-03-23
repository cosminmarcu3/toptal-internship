interface DataItem {
  id: number
  name: string
  hero: string
  universe?: "Marvel" | "DC"
  cape: "Yes" | "No"
}

const data: DataItem[] = [
  {
    id: 0,
    name: "Bruce Wayne",
    hero: "Batman 🦇",
    universe: "DC",
    cape: "Yes",
  },
  {
    id: 1,
    name: "Peter Parker",
    hero: "Spiderman 🕸️",
    universe: "Marvel",
    cape: "No",
  },
  {
    id: 2,
    name: "Clark Kent",
    hero: "Superman 🦸‍♂️",
    universe: "DC",
    cape: "Yes",
  },
  {
    id: 3,
    name: "Tony Stark",
    hero: "Iron man 🤖",
    universe: "Marvel",
    cape: "No",
  },
]

export default data
export type { DataItem }
