<template>
    <div class="paragraph_wrapper">
        {{ text }}
    </div>
</template>


<script setup lang="ts">
</script>

<script lang="ts">
export default {
    name: "ParagraphComponent",
    props: {
        'propList': Object,
    },

    data() {
        return {
            text: this.propList.text,
        };
    },
};
</script>

<style scoped>
.paragraph_wrapper {
    display: flex;
    flex-direction: row;
    width: 95%;
    text-wrap: wrap;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
}

.detail_icon {
    width: 2.5rem;
}
</style>