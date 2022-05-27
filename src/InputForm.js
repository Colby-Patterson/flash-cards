import { useState } from "react";

const InputForm = (props)=>{
  const [id, setID] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (submit)=>{
    submit.preventDefault()
    const newCard = {id: id, question: question, answer: answer, correct: true}
    props.addCard(newCard)
    setID('')
    setQuestion('')
    setAnswer('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter Question</p>
      <input value={question} onChange={(input)=> setQuestion(input.target.value)}/>
      <p>Enter Answer</p>
      <input value={answer} onChange={(input)=> setAnswer(input.target.value)}/>
      <p>Enter ID</p>
      <input value={id} onChange={(input)=> setID(input.target.value)}/>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  )
}

export default InputForm