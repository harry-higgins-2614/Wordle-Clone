<script setup>
import GuessGrid from "@/components/GuessGrid.vue"
import Keyboard from "@/components/Keyboard.vue"

import ConfettiExplosion from "vue-confetti-explosion";

  import { nextTick, ref } from "vue";

const triggerCelebration = async function(tries) { 
  visible.value = false;
  await nextTick();
  visible.value = true;
  console.log(tries);
}




  const visible = ref(false);

</script>

<template>
<Confetti-Explosion v-if="visible" />
        <div class="flex flex-col">
        <guess-grid @correct="triggerCelebration"></guess-grid>      
        </div>

        <keyboard></keyboard>
</template>