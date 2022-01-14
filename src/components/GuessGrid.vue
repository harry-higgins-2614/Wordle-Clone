<template>
    <div class="flex flex-col mt-12 space-y-10">
        <guess-row v-for="index in 6" :key="index" @locked="registerLocked" :active="activeGuessRow == index"></guess-row>      
    </div>
</template>
<script>
import GuessRow from "./GuessRow.vue"
import {useStore} from "@/store"
import { mapStores, mapWritableState, mapActions} from "pinia"

export default { 
    components: {GuessRow},
    emits: ["correct"],
    data() { 
        return { 
            activeGuessRow: 1
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
            this.activeGuessRow++
        }
    }
}
</script>