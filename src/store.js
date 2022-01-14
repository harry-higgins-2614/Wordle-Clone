import { defineStore } from 'pinia'
import {getWord } from "./WordService"

export const useStore = defineStore('main', { 

    state: () => {
        const word = getWord();

        return { 
            usedLetters: [],
            word: word,
            showToast: false,
            toastData: {},
            wordLength: 5
        }
    }
})
