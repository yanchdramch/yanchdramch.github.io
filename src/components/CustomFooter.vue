<template>
  <div class="custom_footer">
    <footer><a href="https://chifligarov.dev" target="_blank"><FontAwesomeIcon icon="copyright"></FontAwesomeIcon>
      {{ copyrightYear }} Mihail Chifligarov</a>
    </footer>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<script>
export default {
  name: "LanguageChooser",

  data() {
    return {};
  },
  methods: {
    
  },
  computed: {
    copyrightYear() {
      const startingYear = 2025;
      const currentYear = new Date().getFullYear();
      if (currentYear !== startingYear) {
        return startingYear.toString() + '–' + currentYear.toString();
      }
      else {
        return startingYear.toString();
      }
    }
  }
};
</script>

<style scoped>
.custom_footer {
  width: 100%;
  height: 20px;
}

footer{
  margin-top: auto;
  font-size: 0.8em;
  bottom: 0;
  padding-bottom: 0.5em;
  color: #fffdf6;
  align-self: center;
  width: 100%;
  text-align: center;
}
</style>