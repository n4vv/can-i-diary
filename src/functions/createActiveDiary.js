import { wikiurl } from "../data";
import { getIndex } from ".";

export function createActiveDiary(diaryPath, diaries) {
    let index = getIndex(diaryPath)
    let diary = diaries[index.p]
    let subset = diary.tiers[index.t]
    let activeDiary = {
        title: `${diary.title} ${subset.title} Diary`,
        url: `${wikiurl}${diary.title}_Diary#${subset.title}`,
        reward: `${diary.reward} ${subset.id + 1}`,
        rewardurl: `${wikiurl}${diary.reward}_${subset.id + 1}`,
        reqs: subset.reqs
    };
    return (activeDiary);
}