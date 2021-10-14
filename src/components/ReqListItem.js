import React, { useContext } from "react";
import { AppContext } from "../context";
import { wikiurl } from "../data";
import { ReqListItemFragment } from "./ReqListItemFragment";
import { ReqStatusBar } from "./ReqStatusBar";

export const ReqListItem = ({req}) => {
    const { active, playerSkills } = useContext(AppContext)
    return(
        <li className="reqlist-item">
            <div>
                <span className="skill-icon">
                    <a href={wikiurl+req.skill} target="_blank" rel="noreferrer" >
                        <img src={`/img/skills/${req.skill}.png`} alt=""/>
                    </a> 
                </span>                            
                { 
                    active && 
                    <ReqListItemFragment playerLevel={playerSkills[req.skillId].level} targetLevel={req.level} boostable={req.boostable}/>
                } {req.level} <a href={wikiurl+req.skill} target="_blank" rel="noreferrer" >{req.skill}</a>
            </div>            
            {                
                active &&
                <ReqStatusBar 
                    playerLevel={playerSkills[req.skillId].level}
                    targetLevel={req.level}
                    playerXp={playerSkills[req.skillId].xp}
                    boostable={req.boostable}
                />
            }
        </li>
    )
}