<template>
<div class="absolute top-0 right-24 h-12 w-12 bg-gray-200 opacity-40 md:opacity-100 flex flex-row items-center justify-center z-10 isolate cursor-pointer"
@click="setOpenState(true)"
>
<unicon name="bolt" fill="royalblue" />
</div>



<div v-if="open" class="z-30 top-0 absolute w-screen bg-gray-400 min-h-screen min-w-[100vw] bg-opacity-40 flex flex-col items-center justify-center"
@click.self="setOpenState(false)">

<div class="h-[50vh] lg:w-1/3 w-96 max-w-[100vw] mx-4 place-items-center bg-white opacity-100 bg-opacity-100 rounded-xl flex flex-col items-center justify-between"
>

<h1 class="text-xl mt-2">Power Ups</h1>

<div @click="revealLetter()">
    Reveal Letter
</div>
<div @click="removeLetter()">
    Remove incorrect letter
</div>
<div>
</div>
<div @click="revealWord()" class="text-center">
<span v-if="cheat == ''">Give up! (Reveals word and refreshes)</span>
<div v-if="cheat != ''">
    {{ cheat }}
</div>
</div>


<div class="self-end flex flex-row justify-end mb-2 mr-2 items-center w-full text-sm">
<div class="inline p-0">
Click off to <span v-if="cheat == ''">close</span><span v-else>refresh</span>.
</div>
</div>
</div>


</div>

</template>
<script>

import {useStore} from "@/store"
import { mapStores, mapWritableState, mapActions} from "pinia"


export default { 
    data() { 
        return { 
            open: false,
            cheat: ''
        }
    },
    computed: { 
        ...mapWritableState(useStore, ['word','usedLetters','usedCheats','activeGuessRow', 'guesses','revealedLetters'])
    },
   methods: { 
       async revealLetter() { 
           this.usedCheats = true;
           var word  = await this.word;
            var revealed = false;
            for (var i = 0; i < word.length; i++) { 
                
                var letter = word[i];
                
                if (this.usedLetters.map(f => f.letter).includes(letter)) { 
                    continue;
                } else { 
                    if (revealed == false) { 
                        this.usedLetters.push({letter: letter, state: "inword"});
                        this.revealedLetters.push({letter:letter, index: i});

                        revealed = true;
                    }
                }
            }
       },
          async revealWord() { 
         this.cheat = await this.word
     },
       async removeLetter() { 
           this.usedCheats = true;
           var word = await this.word;

            var lettersInWord = word.split("");

            var lettersAlreadyUsed = this.usedLetters.map(f => f.letter);

            var letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

            var candidates = letters.filter(e => !lettersAlreadyUsed.includes(e) && !lettersInWord.includes(e));

            var rand = Math.floor(Math.random() * candidates.length);

            var removeThis = candidates[rand];

            this.usedLetters.push({letter: removeThis, state: "incorrect"});


       },
       setOpenState(value) { 
           
         if (value == false && this.cheat != '') { 
             window.location.reload();
         }
         this.open = value
           
       }
   }
}</script>