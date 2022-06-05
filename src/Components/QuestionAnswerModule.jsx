import React from "react";
import { Typography, Input, List } from "antd";
import { map, isEmpty } from "lodash";
import ResponseMapper from "./ResponseMapper";

function QuestionAnswerModule({ evaluateQuestion, questionRef, responses, isResponseLoading }) {

    const getQuestionTitle = (question) => (
        String(question).trim().endsWith("?") ?
            question
            :
            `${question.trim()}?`
    )

    return (
        <div className="qa-list-container">
            {   !isEmpty(responses) &&
                <List
                    className="qa-list"
                    itemLayout="horizontal"
                    dataSource={responses}
                    loading={isResponseLoading}
                    renderItem={(responseItem) => (
                        <List.Item>
                            <List.Item.Meta
                                title={getQuestionTitle(responseItem.question)}
                                description={<ResponseMapper responses={responseItem.response} />}
                            />
                        </List.Item>
                    )}
                />
            }

            <Input
                allowClear
                ref={questionRef}
                placeholder="Ask a question"
                onPressEnter={evaluateQuestion}
            />
        </div>
    );
}

export default QuestionAnswerModule;
