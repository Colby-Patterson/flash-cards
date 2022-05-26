import { useState } from "react";

const fakeAPICall = (url) => {
  const cards = [{ id: 1, question: 'What is 1 + 1?', answer: '2', correct: true },
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

const cards = ()=>{
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [error, setEroor] = useState(null)

  const getCards = async ()=>{
    setLoading(true)
    try {
      let resolve = await fakeAPICall();
      setCards(resolve.data)
      setLoading(false);
    } catch (err) {
      setLoading(false)
      setEroor(error)
    }
  }
}