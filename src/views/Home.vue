<script setup>
import GuessGrid from "@/components/GuessGrid.vue"
import Keyboard from "@/components/Keyboard.vue"
</script>

<template>
        <div class="flex flex-col">
        <guess-grid @correct="triggerCelebration"></guess-grid>      
        </div>

        <keyboard></keyboard>
</template>
<script>

export default { 
  methods: { 
    triggerCelebration(tries) { 

      this.$confetti.start();


      setTimeout(() => { 
        this.$confetti.stop()
      }, 2500);
      
      console.log(tries);
    }
  }
}
</script>