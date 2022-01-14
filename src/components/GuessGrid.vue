<template>
    <div class="flex flex-col space-y-1 mb-8">
        <guess-row v-for="index in 6" :key="index" @locked="registerLocked" @reset="activeGuessRow = 1" :active="activeGuessRow == index"></guess-row>      
    </div>
</template>
<script>
import GuessRow from "./GuessRow.vue"
import {useStore} from "@/store"
import { mapStores, mapWritableState, mapActions} from "pinia"


export default { 
    components: {GuessRow },
    emits: ["correct","gameOver"],
    data() { 
        return { 
            activeGuessRow: 1,
            isOpen: true
        }
    },
    computed: {
         ...mapStores(useStore),
        ...mapWritableState(useStore, ['usedLetters', 'word'])
    },
    methods: { 
        async registerLocked(guess) { 
            if (guess.toUpperCase() == await this.word)
            {
                // Trigger confetti
                this.$emit("correct", this.activeGuessRow);
                return;

            }
            if (this.activeGuessRow == 6) { 
                this.$emit("gameOver", await this.word);
                return;
            }
            this.activeGuessRow++
        },
        setIsOpen(value) { 
            this.isOpen = value;
        }
    }
}
</script>