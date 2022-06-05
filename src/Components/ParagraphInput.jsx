import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

function QuestionInput({paragraphRef}) {
  return (
    <TextArea
        ref={paragraphRef}
        placeholder='Type or paste a pargraph in this region'
        rows={10}
    />
  )
}

export default QuestionInput