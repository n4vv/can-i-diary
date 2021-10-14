import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { AppContext } from "../context"
import { getStatus } from "../functions"

export const DiarySubSet = ({subset, pId, pTitle}) => {    
    const { active, edit, actions, completed, playerSkills } = useContext(AppContext);
    return(        
        <li key={subset.id} className={`diary-subset-item ${active && getStatus(playerSkills, subset.reqs, completed[pId][subset.id])}`}>
            {                            
                edit ?
                <div className={ completed[pId][subset.id] ? 'complete' : 'no-complete' } onClick={() => actions.handleCompletedChange(pId, subset.id)}>{completed[pId][subset.id] ? <>&#10004;</> : <>&nbsp;</>}</div>
                : <Link to={`/${pTitle}-${subset.title}`}>{active ? <>&nbsp;</> : subset.title}</Link>
            }
        </li>  
    )
}
