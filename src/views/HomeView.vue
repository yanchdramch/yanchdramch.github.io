<template>
  <main>
    <div class="home_wrapper">
      <CompetenceComponent />
      <button class="contact_button" v-on:click="myScroll()">
        {{ buttonText[selectedLang] }}
      </button>
    </div>
    <ThePit></ThePit>
    <RecentArticles></RecentArticles>
    <div class="about_wrapper">
      <AboutView></AboutView>
    </div>
  </main>
</template>

<script setup>
import ThePit from '@/components/ThePit.vue';
import AboutView from './AboutView.vue';
import RecentArticles from '@/components/RecentArticles.vue';
import { languageStore } from '@/stores/language.js'
import { articleStore } from '@/stores/articles.js';
import { ref, watch } from 'vue';


function myScroll() {
  window.scrollTo({left: 0, top:document.body.scrollHeight || document.documentElement.scrollHeight, behavior: "smooth"});
}

defineExpose({ myScroll });

const store = languageStore()
const selectedLang = ref(store.language);

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);
</script>

<script>
import CompetenceComponent from '../components/CompetenceComponent.vue'
import AboutView from './AboutView.vue';

export default {
  data() {
    return {
      buttonText: {
        "en": "Get in Touch",
        "de": "Kontakt aufnehmen",
        "bg": "Свържи се с Мен",
      },
    };
  },
  components: {
    CompetenceComponent
  },
  methods: {
    navigateToAbout() {
      this.$router.push('about')
    }
  },
};
</script>


<style>
.contact_button {
  margin-top: 5rem;
  border-radius: 2em;
  display: flex;
  justify-self: center;
  padding: 0.85rem 2.25rem;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: #FBC145;
  color: #fffdf6;
  border-width: 0px;
}

.contact_button:hover {
  background-color: #fffdf6;
  color: #2F2061;
}

.home_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 75vh;
  place-content: center;
}

.about_wrapper {
  position: relative;
  padding-top: 2em;
}

p {
  margin-top: 1em;
}
</style>