<template>
<div class="mx-auto md:w-1/3 md:relative absolute md:bottom-[unset] bottom-0 left-auto right-auto w-screen md:bg-white bg-gray-100 pt-1 pb-1 md:border-t-0 md:border-b-0 border-b-2 border-t-2 border-gray-500">
    <div v-for="(row,rowIndex) in rows" :key="row" class="flex flex-row flex-nowrap mt-1 items-center justify-around ">
        <div v-for="(key,keyIndex) in row" :key="key" class="w-100">
            <div v-if="rowIndex == 2 && keyIndex == 0" 
            class="h-12 min-w-[2rem] w-fit bg-gray-200 flex flex-col items-center justify-center text-gray-800"
            @click="input('ENTER')"
            >
                <unicon name="corner-down-left" fill="currentColor" />
            </div>
            <div v-else-if="rowIndex == 2 && keyIndex == 8" 
            class="h-12 min-w-[2rem] w-fit bg-gray-200 flex flex-col items-center justify-center text-gray-800"
            @click="input('BACKSPACE')"
            >
                <unicon name="cancel" class="rotate-180" fill="currentColor" />
            </div>
            <div v-else class="h-12 min-w-[2rem] w-fit  flex flex-col items-center justify-center"
            :class="letterClass(key)"
            @click="input(key)"
            >
                {{key}}
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {useStore} from "@/store"
import { mapStores, mapState, mapActions} from "pinia"
export default { 
    data() { 

        var thirdRow  = [];
        thirdRow.push("ENTER");
        thirdRow.push("ZXCVBNMD".split(""));

        return { 
            rows: ["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),thirdRow.flat()],
        }
    },
    computed: {
        ...mapStores(useStore),
        ...mapState(useStore, ['usedLetters']),
        
    },
    methods: { 
        input(key) { 
            dispatchEvent(new KeyboardEvent('keydown',{'key':key}));
        },
        letterClass(letter) { 
            var usedLettersFiltered = this.usedLetters.filter(e => e.letter == letter);

            switch (usedLettersFiltered[usedLettersFiltered.length -1]?.state) { 
                case 'correct':
                return "bg-green-300 text-gray-700"
                break;
                case 'incorrect':
                return "bg-gray-500 text-gray-300"
                break;
                case 'inword':
                return "bg-yellow-200 text-gray-600"
                break;
                default:
                return 'bg-gray-200 text-gray-800'
            }
        }
    },
    mounted() { 

    }
}
</script>