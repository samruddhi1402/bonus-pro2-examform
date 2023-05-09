import { atom } from "recoil"

export const isRefresh =atom({
    key :"isRefresh",
    default :false
})




export const questionsState = atom({
  key: 'questionsState',
  default: []
});