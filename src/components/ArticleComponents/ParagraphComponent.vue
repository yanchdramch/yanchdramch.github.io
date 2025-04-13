<template>
    <div class="paragraph_wrapper" v-html="text[selectedLang]"></div>
</template>


<script setup lang="ts">
import { languageStore } from '@/stores/language.js'
import { ref, watch } from 'vue';
const store = languageStore()
const selectedLang = ref(store.language);

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);
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