<template>
  <div class="home_wrapper">
    <div class="normal_err">Error <div class="colored_err">404</div>
    </div>
    <button class="contact_button" v-on:click="navigateToContact()">
      {{ buttonText[selectedLang] }}
    </button>
  </div>
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
export default {
  data() {
    return {
      buttonText: {
        "en": "Back to the Homepage",
        "de": "Zurück zur Hauptseite",
        "bg": "Към началната Страница",
      },
    };
  },
  methods: {
    navigateToContact() {
      this.$router.push('/')
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
  background-color: #00a39e;
  color: #fffdf6;
  border-width: 0px;
}

.contact_button:hover {
  background-color: #fffdf6;
  color: black;
}

.normal_err {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.5rem;
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: -0.5rem;
}

.colored_err {
  color: #00a39e;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.5rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}
</style>