import { diaries } from "../data";
export function resetCompleted(){
  let initial = diaries.map(() => ([false,false,false,false]));
  return initial
}