import { faker } from "@faker-js/faker"

type Section = {
  title: string
  items: Item[]
}

export type Item = {
  title: string
  content: string
}

export const DATA: Section[] = [
  {
    title: "Общие вопросы",
    items: [
      {
        title: "What does 'Subject' mean?",
        content: `<p>Winners and runners-up of the Master’s track should choose the
      Master’s study program, which is included in the Subject in which
      the participants were awarded a winner/runner-up status. Then, they
      should choose one or several Universities, where this study program
      is offered. The following step is to prepare and to upload in the
      Olympiad’s Personal account the list of the documents, required to
      apply for a quote (scholarship) via the Information system of the
      Ministry of Science and Higher Education of Russia. Winners of the
      Doctoral (PhD) track should prepare and send the documents, required
      to apply for a quote (scholarship) via the Information system of the
      Ministry of Science and Higher Education of Russia, directly to the
      University, where the scientific supervision was confirmed.<p>`,
      },
      {
        title: "What do I do if I win?",
        content: `<p>Winners and runners-up of the Master’s track should choose the
      Master’s study program, which is included in the Subject in which
      the participants were awarded a winner/runner-up status. Then, they
      should choose one or several Universities, where this study program
      is offered. The following step is to prepare and to upload in the
      Olympiad’s Personal account the list of the documents, required to
      apply for a quote (scholarship) via the Information system of the
      Ministry of Science and Higher Education of Russia. Winners of the
      Doctoral (PhD) track should prepare and send the documents, required
      to apply for a quote (scholarship) via the Information system of the
      Ministry of Science and Higher Education of Russia, directly to the
      University, where the scientific supervision was confirmed.<p>`,
      },
      {
        title: "Will I have to pay a tuition fee?",
        content: loremParagraph(),
      },
      {
        title: "Can I enroll in any program I chose?",
        content: loremParagraph(),
      },
    ],
  },
  {
    title: "Порфтолио",
    items: [
      { title: "What language will I study in?", content: loremParagraph() },
      { title: loremTitle(), content: loremParagraph() },
    ],
  },
  {
    title: "Документы",
    items: [
      { title: loremTitle(), content: loremParagraph() },
      { title: loremTitle(), content: loremParagraph() },
      { title: loremTitle(), content: loremParagraph() },
    ],
  },
  {
    title: "Выбор университета",
    items: [{ title: loremTitle(), content: loremParagraph() }],
  },
  {
    title: "Стипендия",
    items: [
      { title: loremTitle(), content: loremParagraph() },
      { title: loremTitle(), content: loremParagraph() },
      { title: loremTitle(), content: loremParagraph() },
    ],
  },
]

function loremTitle() {
  return faker.lorem.lines(1 + Math.round(Math.random() * 2))
}

function loremParagraph() {
  return `<p>${faker.lorem.lines(3 + Math.round(Math.random() * 5))}</p>`
}
