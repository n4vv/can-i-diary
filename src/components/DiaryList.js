import React, { useContext } from "react"
import { AppContext } from '../context';
import { DiaryListItem } from "./DiaryListItem"

export const DiaryList = () => {
    const {diaries, active, actions, edit} = useContext(AppContext);
    return (
        <>
            <div className="grid-a">
                <h2>
                    Achievement Diaries { active ? <><button className="edit-button" onClick={() => actions.toggleEdit()}><span>{ edit ? <>&#9660;</> : <>&#9998;</>}</span></button> &#10004;</> : ''}
                </h2>
            </div>
            <div className="grid-b">        
                <ul className="list-container">
                {
                    diaries.map((diary) => <DiaryListItem diary={diary} />)
                }
                </ul>
            </div>
        </>
    )
}