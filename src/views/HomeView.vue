<template>
  <main>
    <div class="home_wrapper">
      <CompetenceComponent />
      <button class="contact_button" v-on:click="navigateToContact()">
        {{ buttonText[selectedLang] }}
      </button>
    </div>
  </main>
</template>

<script setup>
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

<script>
import CompetenceComponent from '../components/CompetenceComponent.vue'

export default {
  data() {
    return {
      buttonText: {
        "en": "Get in Touch",
        "de": "Kontakt aufnehmen",
        "bg": "Свържете се с Мен",
      },
    };
  },
  components: {
    CompetenceComponent
  },
  methods: {
    navigateToContact() {
      this.$router.push('contact')
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
  font-weight: 500;
  background-color: #66B95C;
  color: white;
  border-width: 0px;
}

.contact_button:hover {
  background-color: white;
  color: black;
}

.home_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}
</style>