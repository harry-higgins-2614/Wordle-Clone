import { defineStore } from 'pinia'
import {getWord } from "./WordService"

export const useStore = defineStore('main', { 

    state: () => {
        const word = getWord();

        const length = localStorage.getItem('app.wordLength') ?? 5;

        return { 
            usedLetters: [],
            word: word,
            showToast: false,
            toastData: {},
            wordLength:  parseInt(length),
            usedCheats: false,
            activeGuessRow: 1,
            guesses: [],
            revealedLetters: []
        }
    }
})
