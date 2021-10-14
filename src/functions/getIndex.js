import { diaries } from "../data";

export function getIndex(path){
    let province = path.split('-')[0];
    let set = path.split('-')[1];
    let p = diaries.map((diary) => diary.title).indexOf(province)
    let t = diaries[p].tiers.map((tier) => tier.title).indexOf(set)
    return {p, t}
}