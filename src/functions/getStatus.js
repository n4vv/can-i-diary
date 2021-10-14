
export function getStatus(playerSkills, reqs, completed){
    if (completed) {
        return "complete"
    }
    else if (reqs.length === 0){
        return "success"
    }
   
    let notBoostable = reqs.filter(req => (playerSkills[req.skillId].level+5 < req.level && req.boostable) || !req.boostable)
    if (notBoostable.length > 0)
    {
        return "no-success"
    }
    return "boostable"
    
}