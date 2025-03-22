<template>
  <div class="publications_page">
    <div class="main_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="publications" v-for="article in articles" :key="article.path">
      <button v-on:click="navigateToArticle(article.id)"> {{ article.title }}</button>
    </div>
  </div>
</template>

<script setup>
import PublicationComponent from '@/components/PublicationComponent.vue';
import { publications } from '@/texts/publications';
import { languageStore } from '@/stores/language.js'
import { ref, watch, onMounted } from 'vue';

const store = languageStore()
const selectedLang = ref(store.language);

const articles = ref([]);

onMounted(async () => {
  const modules = import.meta.glob("@/articles/*.js");
  const loadedArticles = [];

  for (const path in modules) {
    const module = await modules[path]();
    loadedArticles.push({ ...module.default, path });
  }

  articles.value = loadedArticles;
});

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);
</script>

<script>
export default {
  data() {
    return {
      publications: publications,
      pageTitle: {
        "de": {
          "normal": "Aktuelle ",
          "colored": "Artikel"
        },
        "en": {
          "normal": "Recent ",
          "colored": "Articles"
        },
        "bg": {
          "normal": "Актуални ",
          "colored": "Статии"
        }
      }
    };
  },
  methods: {
    navigateToArticle(id) {
      this.$router.push(`article/${id}`)
    }
  },
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
}

.main_title {
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
  color: #E1BC29;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

.publications {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
  box-sizing: content-box;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
</style>
