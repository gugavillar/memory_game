type Card = {
  id: number
  text: string
  image: string
  isHeld: boolean
  isFlip: boolean
}

let data: Card[] = []

function createCard(index: number) {
  return {
    id: index + 1,
    text: '?',
    image: `../../assets/images/image${Math.ceil(Math.random() * 9)}.svg`,
    isHeld: false,
    isFlip: false
  }
}

let i = 1
data.push(createCard(0))

while (data.length < 18) {
  let count = 0
  let newCard = createCard(i)
  data.forEach(card => {
    if (newCard.image === card.image) {
      count++
    }
  })
  if (count >= 2) {
    newCard = createCard(i)
  } else {
    data.push(newCard)
    i++
  }
}

export { data }
