const tempURL =
  'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

const title =
  'What is a Roth IRA? For those who qualify, it’s a ticket to tax-free retirement income'

const text =
  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>"

const content = `<h2>${title}</h2>${text}<h2>${title}</h2>${text}<h2>${title}</h2>${text}<h2>${title}</h2>${text}<h2>${title}</h2>${text}`

const intro =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

export const articles = [
  {
    id: '1',
    title: title,
    imageURL: tempURL,
    alt: 'investing',
    slug: 'what-is-a-roth-ira-1',
    articleContent: content,
    intro: intro,
  },
  {
    id: '2',
    title: title,
    imageURL: tempURL,
    alt: 'investing',
    slug: 'what-is-a-roth-ira-2',
    articleContent: content,
    intro: intro,
  },
  {
    id: '3',
    title: title,
    imageURL: tempURL,
    alt: 'investing',
    slug: 'what-is-a-roth-ira-3',
    articleContent: content,
    intro: intro,
  },
  {
    id: '4',
    title: title,
    imageURL: tempURL,
    alt: 'investing',
    slug: 'what-is-a-roth-ira-4',
    articleContent: content,
    intro: intro,
  },
  {
    id: '5',
    title: title,
    imageURL: tempURL,
    alt: 'investing',
    slug: 'what-is-a-roth-ira-5',
    articleContent: content,
    intro: intro,
  },
]
