<template>
<div class="absolute top-0 right-0 h-12 w-12 bg-gray-200 opacity-40 md:opacity-100 flex flex-row items-center justify-center z-10 isolate cursor-pointer"
@click="setOpenState(true)"
>
<unicon name="setting" fill="royalblue" />
</div>

<div v-if="open" class="z-30 absolute w-screen bg-gray-400 min-h-screen min-w-[100vw] bg-opacity-40 flex flex-col items-center justify-center"
@click.self="setOpenState(false)">

<div class="h-[50vh] lg:w-1/3 w-96 mx-4 place-items-center bg-white opacity-100 bg-opacity-100 rounded-xl flex flex-col items-center justify-between"
>

<h1 class="text-xl mt-2">Settings</h1>

<div @click="revealWord()" class="text-center">
<span v-if="cheat == ''">Give up! (Reveals word and refreshes)</span>
<div v-if="cheat != ''">
    {{ cheat }}
</div>
</div>


<div>
        <div>Alter Word Length</div>
    <select v-model="length">
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
    </select>
    <div @click="save()" class="inline ml-2 border-2 border-gray-600 px-2 py-2 cursor-pointer" >Save</div>
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
        ...mapWritableState(useStore, ['usedLetters', 'word', 'wordLength'])
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
     },
     save() { 
         this.wordLength = parseInt(this.length)
     }
 }
}
</script>