import React from "react"
import { DiarySubSet } from "./DiarySubSet"

export const DiaryListItem = ({diary}) => {
    return (
        <li key={diary.id} className="diary-list-item">
            <h3><span>{diary.title}</span></h3>   
            <ul className="diary-subset">
            {
                diary.tiers.map((subset) => <DiarySubSet subset={subset} pId={diary.id} pTitle={diary.title}/>)
            }   
            </ul>                
        </li>
    )
}