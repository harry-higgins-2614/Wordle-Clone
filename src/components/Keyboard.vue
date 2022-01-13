<template>
<div class="mt-12 mx-auto">
    <div v-for="(row) in rows" :key="row" class="flex flex-row flex-wrap space-x-4 mt-2 items-center justify-center">
        <div v-for="key in row" :key="key" class=" ">
            <div class="h-8 w-6 bg-gray-200 flex flex-col items-center justify-center rounded-md border border-gray-400 shadow-sm text-gray-800"
            :class="usedLetters.includes(key) ? 'bg-gray-600' : ''"
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
        return { 
            rows: ["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),"ZXCVBNM".split("")],
        }
    },
    computed: {
        ...mapStores(useStore),
        ...mapState(useStore, ['usedLetters'])
    },
    mounted() { 

    }
}
</script>