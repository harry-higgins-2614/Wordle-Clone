import { defineStore } from 'pinia'
import {getWord } from "./WordService"

export const useStore = defineStore('main', { 

    state: () => {
        const word = getWord().then(d => {
            console.log(d);
            return d.data
        })
        
        return { 
            usedLetters: [],
            word: word
        }
    }
})