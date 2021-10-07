import React from 'react'

export default ({current, question, answer}) => {

    const [ content, setContent ] = React.useState(true)




    return(
        <div className="flashcard"  onClick={() => setContent(!content)}>
            <h1 >{content ? question[current - 1] : answer[current - 1]}</h1>
            {/* Salvar current no localStorage */}
            {/* Definir respostas e pontos */}
        </div>
    )
}