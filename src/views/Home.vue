<script setup>
import GuessGrid from "@/components/GuessGrid.vue"
import Keyboard from "@/components/Keyboard.vue"
import Settings from "@/components/Settings.vue"
import Refresh from "@/components/Refresh.vue"
import Toast from "@/components/Toast.vue"
import PowerUps from "@/components/PowerUps.vue"

import ConfettiExplosion from "vue-confetti-explosion";

  import { nextTick, ref } from "vue";

const visible = ref(false);
const tries = ref(0);
const triggerCelebration = async function(numTries) { 

  tries.value = numTries;
  visible.value = false;
  await nextTick();
  visible.value = true;
}


const gameOver = ref(false);

const word = ref("");
const triggerGameOver = function(givenWord) { 
  gameOver.value = true;
  word.value = givenWord;
}
const reload = function() { 
  window.location.reload();
}
</script>

<template>
<Toast v-if="gameOver">
  <div class="text-center py-2">
  <div class="text-center"> 
    <h1 class="text-lg font-semibold">Game Over</h1>
    <div class="text-md">The word was: {{ word }}</div>
  </div>
  <div class="text-center pt-1">Play again?</div>
  <unicon name="redo" fill="royalblue" class="pt-1" @click="reload()" />
  </div>
</Toast>
<Toast v-if="visible">
  <div class="text-center py-2">
  <div class="text-center"> 
    <h1 class="text-lg font-semibold">You got it!</h1>
    <div class="text-md">You won in {{ tries }} guess<span v-if="tries > 1">es</span>!</div>
  </div>
  <div class="text-center pt-1">Play again?</div>
  <unicon name="redo" fill="royalblue" class="pt-1" @click="reload()" />
  </div>
</Toast>

<Confetti-Explosion v-if="visible" />

<Power-Ups/>
<Refresh />
<Settings />
     
        <div class="flex flex-col mt-24">
        <guess-grid @correct="triggerCelebration" @game-over="triggerGameOver"></guess-grid>      
        </div>

        <keyboard></keyboard>
</template>