import { useState, useEffect} from "react";
import Card from "./Card";
import InputForm from "./InputForm";

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
    }, 2500)
  })
};

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    getCards();
  }, [])

  const addCard = (card)=>{
    let newCards = [...cards, card]
    setCards(newCards)
  }

  const deleteCard = (id)=>{
    console.log(cards)
    let newCards = cards.filter((card) => {
    console.log('Card', card)
    console.log('card.id', card.id)
    console.log('id', id)
    return card.id !== id
  });
    setCards(newCards)
  }

//   const updateCard = (id, change) => {
//     let newCards = cards.map(card=> card.id === id ? {...card, card.change: change} : card)
//     setCards(newCards)
// }

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
        deleteCard={deleteCard}
        id={card.id}
      />
    ))
  }

    return (
      <div className="cards">
        <h1>Flash Cards</h1>
        <div>{renderCards()}</div>
        <p>Add a card</p>
        <InputForm addCard = {addCard}/>
      </div>
    )
  }

export default Cards