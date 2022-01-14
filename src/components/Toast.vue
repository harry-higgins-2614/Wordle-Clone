<template>
<div class="absolute right-0 left-0 mx-auto md:top-1/3 top-1/4 rounded-lg h-32 bg-white md:w-1/4  w-1/2 z-30">
<slot>
</slot>
</div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}</style>
<script>
import {useStore} from "@/store"
import { mapStores, mapWritableState, mapActions} from "pinia"

export default { 
    props: ["duration"],
    data() { 
        return { 

        }
    },
    computed: {       
        ...mapStores(useStore),
        ...mapWritableState(useStore, [])
    },
    methods: { 

    },
    mounted() { 
    }
}
</script>