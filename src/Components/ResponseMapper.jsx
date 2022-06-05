import React from 'react'
import { isEmpty, first, get } from "lodash";
import CollapsableResponses from './CollapsableResponses';

export default function ResponseMapper({ responses }) {

    if (isEmpty(responses)) {
        return <div>Could not find any answer</div>
    }

    let possibleAnswer = first(responses)
    let answer = get(possibleAnswer, 'text', '')
    let answerScore = get(possibleAnswer, 'score', 0)
    answerScore = Math.floor(answerScore)

    const allResponses = [...responses].slice(1, responses.length)

    return (
        <div className='response-item'>
            <div>{answer}</div>
            <div hidden={answerScore === 0}>{`Accuracy: ${answerScore}%`}</div>
            {
                allResponses.length > 0 &&
                <CollapsableResponses allResponses={allResponses}/>
            }
        </div>
    )
}
