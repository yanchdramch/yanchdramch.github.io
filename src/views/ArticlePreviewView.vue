<template>
  <div class="publications_page">
    <div class="preview_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="article_form">
      <span>Enter Article JSON:</span>
      <textarea v-model="articleJson" spellcheck="false" placeholder="Drag bottom right corner to resize."></textarea>
      <button v-on:click="previewArticle(articleJson)">Preview Article</button>
      <div class="invalid" v-if="notValid">Invalid JSON</div>
      <div class="invalid" v-if="notValid">{{ errorMsg }}</div>
      <div class="invalid" v-if="!Object.keys(parsedJson).length > 0">JSON Object must not be empty</div>
    </div>
    <ArticleView v-if="!notValid && Object.keys(parsedJson).length > 0" :isPreview="true" :contents="parsedJson"></ArticleView>
  </div>
</template>

<script setup>
import ArticleView from './ArticleView.vue';
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

let parsedJson = ref({})
let notValid = ref(false)
let errorMsg = ref("")
const previewArticle = (articleJson) => {
  try {
    parsedJson.value = JSON.parse(articleJson);
    notValid.value = false;
  } catch (e) {
    notValid.value = true;
    console.log(e);
    errorMsg.value = e;
    return false
  }
  console.log(articleJson);
}
</script>

<script>
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Article ",
          "colored": "Preview"
        },
        "en": {
          "normal": "Article ",
          "colored": "Preview"
        },
        "bg": {
          "normal": "Article ",
          "colored": "Preview"
        }
      },
      articleJson: "",
      parsedJson: {},
    };
  }
};
</script>

<style>
.publications_page {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  width: 90vw;
  flex-direction: column;
  max-height: 85vh;
  box-sizing: border-box;
  margin-top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}

.preview_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
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

.colored {
  color: #00a39e;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

textarea {
  width: 100%;
  height: 300px;
  padding: 10px; 
  font-size: 16px;
  font-family: monospace;
  line-height: 1.5;
  place-content: flex-start;
}

.article_form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.invalid {
  color: red;
  background-color: #00a39e;
  text-align: center;
  font-weight: 600;
}
</style>
