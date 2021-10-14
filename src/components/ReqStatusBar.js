import { experience } from "../data";
import { formatExperience } from "../functions";

export const ReqStatusBar = ({playerLevel, targetLevel, playerXp, boostable}) => {
    const targetXp = experience[targetLevel-1]
    const boostedXp = playerLevel <= 94 ? experience[playerLevel+4] : experience[98]
    return (
        <div className="status-container">
            <div className="status-bar">
                <div className="status" 
                    style={{                               
                        width: Math.round(playerXp/targetXp*100)+'%'
                    }}
                >&nbsp;</div>
                {
                    boostable &&
                    <div className="boost-status"
                        style={{                                    
                            width: playerLevel+5 < targetLevel
                            ? Math.round((boostedXp-playerXp)/targetXp*100)+'%'                                    
                            : 100-Math.round(playerXp/targetXp*100)+'%'
                        }}
                    >&nbsp;</div>        
                }                                
            </div>
            <div className="xp">
                { (boostable && targetLevel > playerLevel+5) && `${formatExperience(targetXp-boostedXp)} + ` }
                { boostable && <><img width="15" src="/img/stew.png" alt=""/> / </>}
                { formatExperience(targetXp-playerXp) }
            </div>
        </div>
    )
}                
                