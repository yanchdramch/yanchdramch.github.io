<template>
  <div class="about">
    <div class="main_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">
          {{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="details">
      <div class="col leftcol">
        <img src="/images/yana_profile.jpg" alt="profile picture" class="picture">
      </div>
      <div class="col rightcol">
        <div class="compentences_wrapper">
          <CompetenceComponent />
        </div>
        <div class="resume">
          {{ aboutTexts.resume[selectedLang] }}
        </div>
        <div class="icons">
          <DetailComponent icon="youtube" set="fab" />
          <DetailComponent icon="envelope" set="fas" link="mailto:yanamail@mail.com" />
          <DetailComponent icon="square-pinterest" set="fab" />
          <DetailComponent icon="linkedin" set="fab" />
          <DetailComponent icon="square-facebook" set="fab" />
          <DetailComponent icon="square-instagram" set="fab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompetenceComponent from '../components/CompetenceComponent.vue'
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
import { aboutTexts } from '@/texts/aboutTexts.js'
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Über ",
          "colored": "mich"
        },
        "en": {
          "normal": "About ",
          "colored": "Me"
        },
        "bg": {
          "normal": "За ",
          "colored": "Мен"
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
  margin-top: 1.25em;
}

.about {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  width: 90vw;
  flex-direction: column;
  max-height: 85vh;
  box-sizing: border-box;
  margin-top: 0;
  padding-bottom: 0;
}

.main_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
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

.colored {
  color: #E1BC29;
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
  flex-wrap: wrap;
  width: 100%;
  box-sizing: content-box;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  justify-content: space-evenly;
}

.col {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 20rem;
  align-items: center;
}

.leftcol {
  width: 30%;
  flex-direction: row;
}

.rightcol {
  width: 60%;
}

:deep(.name) {
  font-size: 2.5em;
  padding-top: 0.5em;
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
  margin-bottom: 1em;
}

.icons {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
}
</style>
