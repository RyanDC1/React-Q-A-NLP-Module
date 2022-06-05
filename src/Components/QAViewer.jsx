import React from "react";
import { Typography } from "antd";
import ParagraphInput from "./ParagraphInput";
import QuestionAnswerModule from "./QuestionAnswerModule";

function QAViewer({ evaluateQuestion, paragraphRef, questionRef, responses, isResponseLoading }) {
  const { Title } = Typography;

  return (
    <div className="qa-viewer-container">
      <Title level={4}>Paragraph</Title>
      <ParagraphInput paragraphRef={paragraphRef}/>

      <div className="qna-module-container">
        <Title level={4}>Questions</Title>
        <QuestionAnswerModule 
            evaluateQuestion={evaluateQuestion}
            questionRef={questionRef}
            responses={responses}
            isResponseLoading={isResponseLoading}
        />
      </div>
    </div>
  );
}

export default QAViewer;
