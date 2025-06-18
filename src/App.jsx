import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  const flashCards = {
    title: 'Countries and Capitals',
    description: 'Learn the capitals of countries around the world!',
    cards: [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'What is the capital of Japan?', answer: 'Tokyo' },
      { question: 'What is the capital of Germany?', answer: 'Berlin' },
      { question: 'What is the capital of Italy?', answer: 'Rome' },
      { question: 'What is the capital of Spain?', answer: 'Madrid' },
      { question: 'What is the capital of Canada?', answer: 'Ottawa' },
      { question: 'What is the capital of China?', answer: 'Beijing' },
    ]
  };


  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = flashCards.cards[index];

  const flip = () => {
    setFlipped(!flipped);
  };

  const next = () => {
    if (index < flashCards.cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
    }
  };



  
  return (
    <>
      <div className="app">

        <h1>{flashCards.title}</h1>
        <h3>{flashCards.description}</h3>
        <h5>Total cards: {flashCards.cards.length}</h5>

      <div className="card" onClick={flip}>
        <p>{flipped ? currentCard.answer : currentCard.question}</p>
        <p className="hint">(Click to flip)</p>
      </div>
      
      <div className="buttons">
        <button onClick={prev} disabled={index === 0}>Prev</button>
        <button onClick={next} disabled={index === flashCards.cards.length - 1}>Next</button>
      </div>

      </div>
    </>
  )
}

export default App
