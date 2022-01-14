<template>
<div class="absolute top-0 right-12 h-12 w-12 bg-gray-200 opacity-40 md:opacity-100 flex flex-row items-center justify-center z-10"
@click="refresh()"
>
<unicon name="redo" fill="royalblue" />
</div>




</template>
<script>
export default { 
    methods: {
        refresh() { 
            window.location.reload();
        }
    }

}
</script>