import { ICategories } from "@/interfaces/global.interfaces"

enum Categories {
  business = "Business",
  entertainment = "Entertainment",
  general = "General",
  health = "Health",
  science = "Science",
  sports = "Sports",
  technology = "Technology"

}

const categories: ICategories[] = [
  {
    id: 1,
    name: Categories.business
  },
  {
    id: 2,
    name: Categories.entertainment
  },
  {
    id: 3,
    name: Categories.general
  },
  {
    id: 4,
    name: Categories.health
  },
  {
    id: 5,
    name: Categories.science
  },
  {
    id: 6,
    name: Categories.sports
  },
  {
    id: 7,
    name: Categories.technology
  },
]

export default categories