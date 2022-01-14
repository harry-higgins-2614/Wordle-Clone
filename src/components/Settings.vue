<template>
<div class="absolute top-0 right-0 h-12 w-12 bg-gray-200 opacity-40 md:opacity-100 flex flex-row items-center justify-center z-10 isolate cursor-pointer"
@click="setOpenState(true)"
>
<unicon name="setting" fill="royalblue" />
</div>

<div v-if="open" class="z-30  absolute w-screen bg-gray-400 min-h-screen min-w-[100vw] bg-opacity-40 flex flex-col items-center justify-center"
@click.self="setOpenState(false)">

<div class="h-[50vh] w-1/2 mx-auto place-items-center bg-white opacity-100 bg-opacity-100 rounded-xl flex flex-col items-center justify-between"
>

<h1 class="text-xl mt-2">Settings</h1>

<div @click="revealWord()" class="text-center">
<span v-if="cheat == ''">Give up! (Reveals word and refreshes)</span>
<div v-if="cheat != ''">
    {{ cheat }}
</div>
</div>

<div class="self-end flex flex-row justify-around items-center w-full text-sm">
<div class="inline text-xs">
    Made By Harry Higgins
</div>

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
        ...mapWritableState(useStore, ['usedLetters', 'word'])
},
 methods: {
     setOpenState(value) { 

         if (value == false && this.cheat != '') { 
             window.location.reload();
         }
         this.open = value
     },
     async revealWord() { 
         this.cheat = await this.word
     }
 }
}
</script>