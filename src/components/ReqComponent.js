import React from "react"
import { ReqList } from "./ReqList"

export const ReqComponent = ({diaryPath}) => {
     return(
        <div className="grid-d">
            <div>
            <div className="scroll-top"></div>
                <div className="scroll-middle">
                    <div>
                            {
                                diaryPath ? <ReqList diaryPath={diaryPath}/> : <div className="default">select a diary</div>
                            }        
                    </div>
                </div>
            <div className="scroll-bottom"></div>
            </div>
       </div>
    )
}