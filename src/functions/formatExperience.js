export function formatExperience(xp){
    if (xp > 1000000){
        xp = Math.round(xp/10000)/100
        return xp+'M'
    }
    else if (xp > 1000) {
        xp = Math.round(xp/1000)
        return xp+'k'
    }  
    return xp
}