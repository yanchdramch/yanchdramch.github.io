<template>
    <div class="detail_wrapper">
        ...
    </div>
</template>


<script setup lang="ts">
</script>

<script lang="ts">
export default {
    name: "ImageComponent",
    props: {
        'propList': Object,
    }
};
</script>

<style scoped>
.detail_wrapper {
    display: flex;
    flex-direction: row;
    width: 95%;
    flex-wrap: nowrap;
    text-wrap: nowrap;
    background-color: #222;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1.5rem;
}

.detail_icon {
    width: 2.5rem;
}
</style>