export function createPlayerSkills(data) {
    let skillData = data.split('\n').slice(0, 24);
    let skills = skillData.map((row) => {
        let skill = row.split(',');
        return {
            level: Number(skill[1]),
            xp: Number(skill[2]),
            rank: Number(skill[0])
        };
    })
    return (skills);
}