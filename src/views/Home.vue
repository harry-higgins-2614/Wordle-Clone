<script setup>
import GuessGrid from "@/components/GuessGrid.vue"
import Keyboard from "@/components/Keyboard.vue"
import Settings from "@/components/Settings.vue"
import Refresh from "@/components/Refresh.vue"
import Toast from "@/components/Toast.vue"

import ConfettiExplosion from "vue-confetti-explosion";

  import { nextTick, ref } from "vue";

const visible = ref(false);
const triggerCelebration = async function(tries) { 
  visible.value = false;
  await nextTick();
  visible.value = true;
}


const gameOver = ref(false);

const word = ref("");
const triggerGameOver = function(givenWord) { 
  console.log(givenWord);
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
<Confetti-Explosion v-if="visible" />


<Refresh />
<Settings />
     
        <div class="flex flex-col">
        <guess-grid @correct="triggerCelebration" @game-over="triggerGameOver"></guess-grid>      
        </div>

        <keyboard></keyboard>
</template>