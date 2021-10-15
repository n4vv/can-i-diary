import React, { useContext } from "react"
import { AppContext } from '../context';
import { DiaryListItem } from "./DiaryListItem"

export const DiaryList = () => {
    const { diaries, active, actions, edit } = useContext(AppContext);

    return (
        <>
            <div className="grid-a">
                <h2>
                    Achievement Diaries { active ? <button className="edit-button" onClick={() => actions.toggleEdit()}><span className="edit-button-inner">{ edit ? <>&#9660;</> : <>&#9998;</>}</span> &#10004;</button> : ''}
                </h2>
            </div>
            <div className="grid-b">        
                <ul className="list-container">
                {
                    diaries.map((diary) => <DiaryListItem key={diary.id} diary={diary} />)
                }
                </ul>
                {
                    active &&
                    <button className="reset" onClick={actions.resetCompletedView}>reset</button>
                }                
            </div>
        </>
    )
}