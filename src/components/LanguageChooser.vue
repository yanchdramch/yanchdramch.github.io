<template>
  <div class="language_chooser">
    <div class="language" v-for="language in languages" :class="{ 'chosen': language.selected }"
      v-on:click="chooseNewLanguage(language)">
      {{ language.lang }}
    </div>
  </div>
</template>

<script setup>
import { languageStore } from '@/stores/language.js'
</script>

<script>
export default {
  name: "LanguageChooser",

  data() {
    return {
      languages: [
        { "lang": "EN", "selected": true, "id": "en" },
        { "lang": "BG", "selected": false, "id": "bg" },
        { "lang": "DE", "selected": false, "id": "de" }
      ]
    };
  },
  methods: {
    chooseNewLanguage(language) {
      this.languages.forEach(langObj => {
        if (langObj.lang === language.lang) {
          langObj.selected = true;
          const store = languageStore();
          store.language = langObj.id;
        }
        else {
          langObj.selected = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.language_chooser {
  display: flex;
  flex-direction: row;
}

.language {
  font-size: 1.1rem;
  font-weight: 600;
  padding-left: 0.5em;
  padding-right: 0.5em;
  cursor: pointer;
}

.language:hover {
  color: #E1BC29;
}

.chosen {
  color: #E1BC29;
}

.language+.language {
  border-left: 0.09em solid white;
}
</style>