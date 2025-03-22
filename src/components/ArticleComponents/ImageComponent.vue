<template>
    <div class="image_wrapper">
        <img 
            class="image_content" 
            :src="propList.src" 
            :alt="propList.alt" 
            :width="propList.width || 'auto'" 
            :height="propList.height || 'auto'"
        >
    </div>
</template>


<script setup lang="ts">
</script>

<script lang="ts">
export default {
    name: "ImageComponent",
    props: {
        'propList': Object,
    },
    data() {
        return {
            width: this.propList.width ? this.propList.width : 'auto',
            height: this.propList.height ? this.propList.height : 'auto',
        };
    },
};
</script>

<style scoped>
.image_wrapper {
    display: flex;
    flex-direction: row;
    width: 95%;
    flex-wrap: nowrap;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1.5rem;
}

.detail_icon {
    width: 2.5rem;
}

.image_content {
    /* width: v-bind('width');
    height: v-bind('height'); */
    max-width: 80%;
}
</style>