import React from 'react'
import { Collapse } from 'antd'
import { map } from "lodash";

export default function CollapsableResponses({ allResponses }) {

    const { Panel } = Collapse;
    return (
        <Collapse ghost className='collabsable-responses'>
            <Panel header="Show More Responses">
                {
                    map(allResponses, (response, index) => (
                        <div className='all-responses' key={index}>
                            <div>{`${index + 1}) ${response.text}`}</div>
                            <div>{`Accuracy: ${Math.floor(response.score)}%`}</div>
                        </div>
                    ))
                }
            </Panel>
        </Collapse>
    )
}
