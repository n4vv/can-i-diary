export const ReqListItemFragment = ({playerLevel, targetLevel, boostable}) => {
    const canBoost = boostable && playerLevel+5 >= targetLevel
    return(
        <>
            <span style={{ color: canBoost ? "#E14D0D" : "#ff0000" }}>{playerLevel}</span> <span className="arrow">
            { 
                canBoost && <span className="boost">+{targetLevel-playerLevel}</span>
            } &#8594;</span>
        </>
    )
}