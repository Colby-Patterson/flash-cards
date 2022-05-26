import { useState, useEffect} from "react";
import Card from "./Card";

const fakeAPICall = (url) => {
  const cards = [
  { id: 1, question: 'What is 1 + 1?', answer: '2', correct: true },
  { id: 2, question: 'What is 2 + 2?', answer: '4', correct: true },
  { id: 3, question: 'Is this a question?', answer: 'Yes', correct: true }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'bad') {
        reject('404')
      } else {
        resolve({ data: cards })
      }
    }, 3000)
  })
};

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    getCards();
  }, [])

  const getCards = async () => {
    setLoading(true)
    try {
      let resolve = await fakeAPICall();
      setCards(resolve.data)
      setLoading(false);
    } catch (err) {
      setLoading(false)
      setError(error)
    }
  }

  const renderCards = () => {
    if (loading) return <p>Loading</p>;
    return cards.map((card) => (
      <Card
        key={card.id}
        question={card.question}
        answer={card.answer}
      />
    ))
  }

    return (
      <div className="cards">
        <h1>Cards Go Here</h1>
        <div>{renderCards()}</div>
      </div>
    )
  }

export default Cards