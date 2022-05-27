import { useState } from "react"

const Card = (props)=>{
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="card">
      <p>{props.question}</p>
      <button onClick={()=>setShowAnswer(!showAnswer)}>Show Answer</button>
      {showAnswer && (<p>{props.answer}</p>)}
      <button onClick={()=> props.deleteCard(props.id)}>Remove</button>
    </div>
  )
}

export default Card