import React, { useContext } from "react";
import { AppContext } from "../context";
import { ReqListItem } from "./ReqListItem";
import { createActiveDiary } from "../functions";


export const ReqList = ({diaryPath}) => {
    const { diaries } = useContext(AppContext);
    const activeDiary = createActiveDiary(diaryPath, diaries);
    return(
        <>
            <h2><a href={activeDiary.url} target="_blank" rel="noreferrer">{activeDiary.title}</a></h2>
            <h3>Reward: <a href={activeDiary.rewardurl} target="_blank" rel="noreferrer">{activeDiary.reward}</a></h3>            
            {
                activeDiary.reqs.length > 0 ?
                <>
                    <h3>Skills needed</h3>
                    <ul className="reqlist">
                        { 
                            activeDiary.reqs.map((req, index) => <ReqListItem key={index} req={req}/>) 
                        }
                    </ul>       
                </> :
                <p className="req-done">&#10003; All skill requirements are met</p>
            }
        </>
    )
}