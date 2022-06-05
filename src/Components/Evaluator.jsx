import React, { useState, useRef, useEffect } from 'react';
import { message, notification, Spin } from 'antd';
import * as qna from '@tensorflow-models/qna';
import * as tf from "@tensorflow/tfjs";
import { get, isEmpty } from 'lodash'
import { LoadingOutlined } from '@ant-design/icons';
import QAViewer from './QAViewer';


function Evaluator() {

    //#region states
    const [model, setModel] = useState(null);
    const [responses, setResponse] = useState([]);
    const [isResponseLoading, setIsResponseLoading] = useState(false)
    const [isModelLoading, setIsModelLoading] = useState(false)
    //#endregion states

    //#region constants
    const paragraphRef = useRef(null)
    const questionRef = useRef(null)

    const spinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    //#endregion constants

    useEffect(() => {
        loadQAModel()
    }, [])
    
    return (
        <Spin
            size='large'
            className='spin-overlay'
            indicator={spinIcon}
            spinning={isModelLoading} 
            tip="Model Loading">
            <QAViewer
                evaluateQuestion={evaluateQuestion}
                paragraphRef={paragraphRef}
                questionRef={questionRef}
                responses={responses}
                isResponseLoading={isResponseLoading}
            />
        </Spin>
    )

    function loadQAModel() {
        setIsModelLoading(true)

        qna.load()
        .then((model) => {
            if(model != null)
            {
                console.log("Model Loaded", model)
                notification.success({
                    message: "Success!",
                    description: "BERT NLP model loaded successfully"
                })
                setModel(model)
            }
            else {
                throw new Error("TF model failed to load")
            }
        })
        .catch((error) => {
            notification.error({
                message: "Error",
                description: "An error occured while loading the model, please reload the page"
            })
            console.log("An error occured while loading the model: ", error)
        })
        .finally(() => setIsModelLoading(false))
    }

    function evaluateQuestion() {
        let question = get(questionRef, 'current.input.value', null)
        let pargraph = get(paragraphRef, 'current.resizableTextArea.textArea.value', null)

        if(question == null || isEmpty(question))
        {
            message.error("Please enter a question")
            return
        }
        if(pargraph == null || isEmpty(pargraph))
        {
            message.error("Please add a paragraph")
            return
        }

        if(!isResponseLoading && model != null)
        {
            setIsResponseLoading(true)
            model.findAnswers(question, pargraph)
            .then((response) => {
                console.log(response)
                const defaultAnswer = [{text: "Sorry, could not find any answer, please try again"}]
               
                let questionAnswer = {
                    question,
                    response: !isEmpty(response) ? response : defaultAnswer
                }

                setResponse((res) => ([...res, questionAnswer]))
            })
            .catch((error) => console.error("An error occured while evaluating the question", error))
            .finally(() => {
                setIsResponseLoading(false)
            })
        }
    }
}

export default Evaluator