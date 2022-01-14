<template>
<transition name="fade" appear>
<div class="absolute right-0 left-0 mx-auto top-1/3 h-32 bg-red-400 w-1/4" v-if="showToast">

</div>
</transition>
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
    data() { 
        return { 

        }
    },
    computed: {       
        ...mapStores(useStore),
        ...mapWritableState(useStore, ['showToast','toastData'])
    },
    methods: { 

    },
    mounted() { 
        setTimeout(() => { 


            this.showToast = true
        }, 1200);
    }
}
</script>