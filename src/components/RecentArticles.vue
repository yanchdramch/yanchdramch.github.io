<template>
    <div class="recent_wrapper">
        <div class="recent_content">
            <div class="main_title">
                <div class="normal">{{ pageTitle[selectedLang].normal }}</div>
            </div>
            <div class="recent_articles">
              <div class="article_card"> </div>
              <div class="article_card"> </div>
              <div class="article_card"> </div>
            </div>
        </div>
    </div>
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
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Recent Articles",
          // "colored": "Artikel"
        },
        "en": {
          "normal": "Recent Articles",
          // "colored": "Articles"
        },
        "bg": {
          "normal": "Recent Articles",
          // "colored": "Статии"
        }
      }
    };
  },
};
</script>

<style scoped>
.recent_wrapper {
  width: 100vw;
  background-color: #FBC145;
  justify-items: center;
  align-content: start;
  padding-bottom: 6em;
}

.recent_content {
  width: 90vw;
}

.normal {
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  scroll-padding-top: 2.5rem;
  color: #2f2061;
  justify-content: center;
}

.colored {
  color: #2f2061;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

.main_title {
  margin-bottom: 3em;
  padding-top: 2em;
  justify-self: center;
}

.recent_articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
}

.article_card {
  background-color: #fffdf6;
  width: 300px;
  height: 400px;
  border: 1px solid #2f2061;
}

</style>