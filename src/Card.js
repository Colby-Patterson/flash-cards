import { useState } from "react"

const Card = (props)=>{
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="card">
      <p>{props.question}</p>
      <button onClick={()=>setShowAnswer(!showAnswer)}>Show Answer</button>
      {showAnswer && (<p>{props.answer}</p>)}
    </div>
  )
}

export default Card