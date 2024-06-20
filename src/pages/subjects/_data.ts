import university1Png from "./_assets/university_1.png"
import university2Png from "./_assets/university_2.png"

export type File = {
  title: string
  content: string
}

export const FILES: File[] = [
  {
    title: "Demo version",
    content:
      "Training tasks similar to those, you will face with at the second round of the competition.",
  },
  { title: "Program of Subject Area", content: "Program outline." },
  {
    title: "Interview outline",
    content: "For doctoral track’s participants only",
  },
  {
    title: "List of potential scientific supervisors",
    content: "For doctoral track’s participants only",
  },
]

type Program = {
  title: string
  items: {
    title: string
    image: string
  }[]
}

export const PROGRAMS: Program[] = [
  {
    title: "Agronomy",
    items: [
      {
        title: "Kazan (Volga region) Federal University",
        image: university1Png.src,
      },
      {
        title:
          "Peooples’ Friendship University of Russia named after Patrice Lumumba",
        image: university2Png.src,
      },
    ],
  },
  {
    title: "Geography",
    items: [
      {
        title:
          "Peooples’ Friendship University of Russia named after Patrice Lumumba",
        image: university2Png.src,
      },
      {
        title: "Kazan (Volga region) Federal University",
        image: university1Png.src,
      },
    ],
  },
  { title: "Geology", items: [] },
  { title: "Computer Science and Computer Engineering", items: [] },
  { title: "Landscape architecture", items: [] },
  { title: "Metallurgy", items: [] },
  {
    title: "Science-intensive technology and the economics of innovation",
    items: [],
  },
  { title: "Oil and gas business", items: [] },
  { title: "Sociology", items: [] },
  { title: "Technosphere Security", items: [] },
  { title: "Ecology and nature management", items: [] },
  {
    title:
      "Energy and resource saving in chemical technology, petrochemistry and biotechnology",
    items: [],
  },
]
