<template>
    <div class="flex flex-row items-center justify-around w-100 md:w-1/3 md:mx-auto space-x-1" :class="!valid ? 'animate__animated animate__shakeX' : ''">
        <div v-for="index in 5" :key="index" class="h-24 md:w-18 w-1/5 bg-gray-300 flex flex-col items-center justify-center text-4xl text-gray-800"
        :class="[status[index-1]]" :style="{'animation-delay': (index-1)/6 + 's'}">
            {{ guess[index-1] }}
        </div>
    </div>
</template>
<script>
import {useStore} from "@/store"
import { mapStores, mapWritableState, mapActions} from "pinia"
import { validateWord } from "@/WordService"

export default {
    props: ["active"],
    data() { 
        return { 
            complete: false,
            guess: [],
            status: [],
            locked: false,
            valid:true
        }
    },
    emits: ["locked"], 
    computed: { 
         ...mapStores(useStore),
        ...mapWritableState(useStore, ['usedLetters', 'word'])
    },
    methods: {
        reset() { 
            this.guess = [];
            this.status = [];
            this.locked = false;
            this.valid = true;
        },
        async validateGuess() { 
            this.locked = true;
            this.valid = await validateWord(this.guess.join(""));

            if (!this.valid) {   
                setTimeout(() => {
                    this.reset()

                },500)       
                return;
            }
           
            this.status = [];

            const word = await this.word;
            this.guess.forEach((letter, index) => { 
                if (letter.toUpperCase() == word[index].toUpperCase()) { 
                    this.status.push(["bg-green-300","text-gray-700", "animate__animated animate__flipInX"]);
                    this.usedLetters.push({letter: letter, state: 'correct'})
                }
                else if (word.toUpperCase().includes(letter.toUpperCase())) { 
                    this.status.push(["bg-yellow-200","text-gray-600",  "animate__animated animate__flipInX"])
                    this.usedLetters.push({letter: letter, state: 'inword'})
                } else { 
                    this.status.push(["bg-gray-500", "text-gray-300", "animate__animated animate__flipInX"])
                       this.usedLetters.push({letter: letter, state: 'incorrect'})
                }
            });
             this.$emit('locked',  this.guess.join(""));
        },
        isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
        },
        recogniseInput(e) { 
            if (this.locked || !this.active) { 
                return;
            }
            if ((e.key.toUpperCase() == "BACKSPACE" || e.key.toUpperCase() == "DELETE") && this.guess.length > 0) { 
                this.guess.pop();
                return;
            }

            if (this.guess.length >= 5 && e.key.toUpperCase() != "ENTER") { 
                return;
            }

            if (this.isLetter(e.key)) { 
                this.guess.push(e.key.toUpperCase());
            } else if (this.guess.length == 5 && e.key.toUpperCase() == "ENTER") { 
                this.validateGuess();
            }

        }
    },
    mounted() { 
        addEventListener('keydown', e => this.recogniseInput(e));
    }
}
</script>