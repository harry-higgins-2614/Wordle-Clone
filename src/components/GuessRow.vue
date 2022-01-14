<template>
    <div class="flex flex-row items-center justify-around mx-auto" style="width: 25%" :class="active && invalid ? 'animate__animated animate__shakeX' : ''">
        <div v-for="index in 5" :key="index" class="h-16 w-12 bg-gray-300 rounded-lg border border-gray-500 shadow-md flex flex-col items-center justify-center text-4xl text-gray-800"
        :class="[status[index-1]]">
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
            invalid:false
        }
    },
    emits: ["locked"], 
    computed: { 
         ...mapStores(useStore),
        ...mapWritableState(useStore, ['usedLetters', 'word'])
    },
    methods: {
        async validateGuess() { 
            this.locked = true;
            
            this.invalid = await validateWord(this.guess.join(""));

            if (this.invalid) {          
             this.$emit('locked',  this.guess.join("")); 
                return;
            }
           
            this.status = [];

            const word = await this.word;
            this.guess.forEach((letter, index) => { 
                if (letter.toUpperCase() == word[index].toUpperCase()) { 
                    this.status.push("bg-green-300");
                }
                else if (word.toUpperCase().includes(letter.toUpperCase())) { 
                    this.status.push("bg-yellow-300")
                } else { 
                    this.status.push("bg-gray-500")
                       this.usedLetters.push(letter)
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
            if (e.key == "Backspace" && this.guess.length > 0) { 
                this.guess.pop();
                return;
            }


            if (this.guess.length >= 5 && e.key != "Enter") { 
                return;
            }

            if (this.isLetter(e.key)) { 
                this.guess.push(e.key.toUpperCase());
            } else if (this.guess.length == 5 && e.key == "Enter") { 
                this.validateGuess();
            }

        }
    },
    mounted() { 
        addEventListener('keydown', e => this.recogniseInput(e));
    }
}
</script>