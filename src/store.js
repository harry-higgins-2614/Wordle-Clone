import { defineStore } from 'pinia'
import {getWord } from "./WordService"

export const useStore = defineStore('main', { 

    state: () => {
        const word = getWord();
        console.log(word);
        return { 
            usedLetters: [],
            word: word
        }
    }
})