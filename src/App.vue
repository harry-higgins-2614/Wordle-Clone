<script setup>
import { ref } from 'vue'

let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
