<template>
<div class="absolute top-0 right-0 h-12 w-12 bg-gray-200 opacity-40 md:opacity-100 flex flex-row items-center justify-center z-10 isolate cursor-pointer"
@click="setOpenState(true)"
>
<unicon name="setting" fill="royalblue" />
</div>

<div v-if="open" class="z-30 absolute top-0 w-screen bg-gray-400 min-h-screen min-w-[100vw] bg-opacity-40 flex flex-col items-center justify-center"
@click.self="setOpenState(false)">

<div class="md:max-h-[66vh] min-h-48 h-96 md:w-2/3 w-96  max-w-[100vw] place-items-center bg-white opacity-100 bg-opacity-100 rounded-xl flex flex-col items-center justify-between"
>

<h1 class="text-xl mt-2">Settings</h1>




<div>
        <div>Alter Word Length</div>
    <select v-model="length">
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
    </select>
    <div @click="save()" class="inline ml-2 border-2 border-gray-600 px-2 py-2 cursor-pointer" >Save</div>
</div>

<div class="self-end flex flex-row justify-between mb-2 items-center w-full text-sm">

<div class="pl-2">
    Contact: <a href="https://twitter.com/harryhigginsuk"><unicon name="twitter" fill="royalblue" class="top-2 relative"/></a>
</div>
<div class="p-0 pr-2">
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

     save() { 
         this.wordLength = parseInt(this.length)
     }
 }
}
</script>