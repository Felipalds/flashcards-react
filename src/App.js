import React from 'react'
import Flashcard from './Components/Flashcard'

function App() {

  const [ current, setCurrent ] = React.useState(1)
  const [ newForm, setnewForm ] = React.useState(false)
  const [ question, setQuestion ] = React.useState(["你好", "我很高兴", "中文学生"])
  const [ answer, setAnswer ] = React.useState(["Hello", "I'm happy", "Chinese student"])


  function handleSubmit(){
    const newQuestion = document.querySelector("#newQuestion").value
    const newAnswer = document.querySelector("#newAnswer").value

    setQuestion([...question, newQuestion])
    setAnswer([...answer, newAnswer])

    setnewForm(false)
  }
  return (
    <div>
      <h1>Flashcards {current}</h1>

      <main>

        {current > 1 && <button onClick={() => setCurrent(current-1)}>&lt;</button>}
        <Flashcard current={current} question={question} answer={answer}/>
        {current < question.length && <button onClick={() => setCurrent(current+1)}>&gt;</button>}
        {/* Passar buttons para components */}
      </main>  
      <button className="add" onClick={() => setnewForm(!newForm)}>{newForm?"X":"Add new word"}</button>
      {newForm && <form> 
        <input type="text" placeholder="new word" id="newQuestion"></input>
        <input type="text" placeholder="answer" id="newAnswer"></input>
        <button onClick={handleSubmit}>Add</button>
      </form>}
    </div>
  );
}

export default App;
