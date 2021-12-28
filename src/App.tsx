import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Box } from './components/Box/Box'
import { Button } from './components/Button/Button'
import { Grid } from './components/Grid/Grid'
import { Heading } from './components/Heading/Heading'
import { Paragraph } from './components/Paragraph/Paragraph'
import { data } from './data/data'

Modal.setAppElement('#root')

function App() {
  const [cards, setCards] = useState(data)
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [allIsHeld, setAllIsHeld] = useState(false)

  useEffect(() => {
    setAllIsHeld(cards.every(card => card.isHeld))
    const firstCard = cards.find(card => card.id === selectedCards[0])
    const secondCard = cards.find(card => card.id === selectedCards[1])
    if (firstCard && secondCard) {
      if (firstCard.image === secondCard.image) {
        setCards(prevValue =>
          prevValue.map(card => {
            if (card.isFlip) {
              return { ...card, isHeld: true }
            } else {
              return card
            }
          })
        )
        setSelectedCards([])
      } else {
        setTimeout(() => {
          setCards(prevValue =>
            prevValue.map(card => {
              if (card.isFlip && !card.isHeld) {
                return { ...card, isFlip: !card.isFlip }
              } else {
                return card
              }
            })
          )
        }, 1500)
        setSelectedCards([])
      }
    }
  }, [selectedCards])

  function onHandleHoldCard(id: number) {
    setCards(prevValue =>
      prevValue.map(card => {
        if (card.id === id) {
          setSelectedCards([...selectedCards, id])
          return { ...card, isFlip: !card.isFlip }
        } else {
          return card
        }
      })
    )
  }

  const boxArray = cards.map(card => (
    <Box
      onClick={() => onHandleHoldCard(card.id)}
      bg={card.isFlip ? '#15181F' : '#2b0e11'}
      border={card.isFlip ? 'none' : '2px solid #EE9430'}
      boxShadow={card.isFlip ? 'none' : '0px 0px 8px #B63C00'}
      key={card.id}
      className={card.isFlip ? 'flip' : 'reverse-flip'}
    >
      {card.isFlip ? <img src={card.image} alt={card.image} /> : card.text}
    </Box>
  ))

  return (
    <>
      <h1>JOGO DA MEMORIA</h1>
      <Grid>{boxArray}</Grid>
      <Modal
        isOpen={allIsHeld}
        onRequestClose={() => setAllIsHeld(false)}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <Heading>Buuh!!</Heading>
        <Paragraph>Parabéns, você terminou esse jogo da memória. Experimente jogar novamente.</Paragraph>
        <Button onClick={() => window.location.reload()}>JOGAR NOVAMENTE</Button>
      </Modal>
    </>
  )
}

export { App }
