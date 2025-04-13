<template>
  <div class="article" v-if="article">
    <div class="article_title">
      <div class="normal" >{{ article.title[selectedLang] }}</div>
      <div class="date">Published on: {{ article.date }}</div>
    </div>
    <div class="article_text">
      <div class="first_par" v-if="article.text[selectedLang]" v-html=article.text[selectedLang]></div>
      <div v-if="article.elements" v-for="element in article.elements">
        <component :class="element.type" :is="element.type" :propList="element.propList"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { languageStore } from '@/stores/language.js'
import { ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

let { isPreview = false, contents = {} } = defineProps<{ isPreview?: Boolean, contents?: Object }>()

const store = languageStore()
const selectedLang = ref(store.language);
const articleId = useRoute().params.id;
const article = ref(null);
const error = ref(null);

const minHeight = ref(isPreview ? '' : '85vh');
const maxHeight = ref(isPreview ? '' : '85vh');

watchEffect(async () => {
  if (!isPreview){
    try {
      const module = await import(`@/articles/${articleId}.json`);
      article.value = module.default;
    } catch (e) {
      error.value = "Article not found.";
    }
  }
  else if (isPreview) {
    article.value = contents;
  }
});

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);
</script>

<script lang="ts">
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Artikel",
        },
        "en": {
          "normal": "Article",
        },
        "bg": {
          "normal": "Статия",
        }
      }
    };
  },
};
</script>

<style scoped>
.picture {
  border-radius: 2em;
  width: 95%;
  margin-bottom: 0.5em;
}

.article {
  min-height: v-bind('minHeight');
  max-height: v-bind('maxHeight');
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  width: 90vw;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 0;
  padding-bottom: 0;
}

.article_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
}

.normal {
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  justify-content: left;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  scroll-padding-top: 2.5rem;
}

.date {
  font-weight: 400;
  font-size: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
  margin-top: 1em;
}

.article_text {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  box-sizing: content-box;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}

.col {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 20rem;
  align-items: center;
}

.leftcol {
  width: 40%;
}

.rightcol {
  width: 60%;
}

:deep(.name) {
  font-size: 2.5em;
  padding-top: 1em;
}

:deep(.surname) {
  font-size: 1em;
}

:deep(.competencies) {
  font-size: 1.4em;
}

.compentences_wrapper {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5em;
  max-width: 90%;
}

:deep(.detail_wrapper) {
  padding: 0.5em;
  margin-bottom: 0.5rem;
  padding-left: 1.5em;
  width: 95%;
}

.resume {
  padding-left: 1.5em;
  padding-right: 1em;
}

:deep(a) {
  padding: 0;
}

.photo {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 1em;
}

.first_par {
  margin-bottom: 1em;
}
</style>
