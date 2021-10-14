function createExperienceTable(){
    let experienceTable = [0]
    for (let i=1;i<99;i++){
        let xp = experienceTable[i-1] + Math.floor((i+300*Math.pow(2,i/7))/4*5)/5
        experienceTable = [...experienceTable, xp]
    }
    experienceTable = experienceTable.map(x => Math.floor(x))
    return experienceTable
    
}
export const experience = createExperienceTable();