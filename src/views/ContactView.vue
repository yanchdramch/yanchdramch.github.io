<template>
  <div class="contacts">
    <div class="main_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored
          }}</div>
      </div>
    </div>
    <div class="details">
      <div class="col left_col">
        <DetailComponent text="Bochum, Germany" icon="location-dot" set="fas" />
        <DetailComponent text="Ruhr University Bochum" icon="building-columns" set="fas"
          link="https://www.ruhr-uni-bochum.de/en" />
        <DetailComponent text="Linguistics" icon="graduation-cap" set="fas" />
        <DetailComponent text="ELIGO GmbH" icon="briefcase" set="fas" link="https://eligo.de/en/" />
      </div>
      <div class="col right_col">
        <DetailComponent text="mihail9512@gmail.com" icon="envelope-open" set="fas"
          link="mailto:mihail9512@gmail.com" />
        <DetailComponent text="mihail.chifligarov@rub.de" icon="envelope" set="fas"
          link="mailto:mihail.chifligarov@rub.de" />
        <DetailComponent text="mihail95" icon="square-github" set="fab" link="https://github.com/mihail95" />
        <DetailComponent text="Mihail Chifligarov" icon="linkedin" set="fab"
          link="https://www.linkedin.com/in/mihail-chifligarov-77150510a/" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DetailComponent from '@/components/DetailComponent.vue';
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
          "normal": "Kontakt ",
          "colored": "aufnehmen"
        },
        "en": {
          "normal": "Get in ",
          "colored": "Touch"
        },
        "bg": {
          "normal": "Свържете се с ",
          "colored": "Мен"
        }
      }
    };
  },
}
</script>

<style>
.contacts {
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
  color: #66B95C;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

.details {
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

.col {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 19rem;
  width: 50%;
}

.left_col {
  align-items: self-start;
}

.right_col {
  align-items: self-start;
}
</style>
