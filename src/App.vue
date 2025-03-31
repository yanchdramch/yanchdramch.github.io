<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <LanguageChooser v-show="!smallScreen" />
        <div class="routes">
          <nav v-if="!smallScreen">
            <RouterLink to="/">{{ routeTexts.home[selectedLang] }}</RouterLink>
            <RouterLink to="/articles">{{ routeTexts.articles[selectedLang] }}</RouterLink>
            <RouterLink to="/music">{{ routeTexts.music[selectedLang] }}</RouterLink>
            <RouterLink to="/gallery">{{ routeTexts.gallery[selectedLang] }}</RouterLink>
            <!-- <RouterLink to="/about">{{ routeTexts.about[selectedLang] }}</RouterLink> -->
          </nav>
          <nav role="navigation" v-if="smallScreen">
            <div id="menuToggle">
              <input type="checkbox" id="menuCheckbox" v-model="clicked" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li>
                  <RouterLink to="/" v-on:click="toggleMenuCheckbox()">{{ routeTexts.home[selectedLang] }}</RouterLink>
                </li>
                <li>
                  <RouterLink to="/articles" v-on:click="toggleMenuCheckbox()">{{
                    routeTexts.articles[selectedLang] }}</RouterLink>
                </li>
                <li>
                  <RouterLink to="/music" v-on:click="toggleMenuCheckbox()">{{
                    routeTexts.music[selectedLang] }}</RouterLink>
                </li>
                <li>
                  <RouterLink to="/gallery" v-on:click="toggleMenuCheckbox()">{{
                    routeTexts.gallery[selectedLang] }}</RouterLink>
                </li>
                <!-- <li>
                  <RouterLink to="/about" v-on:click="toggleMenuCheckbox()">{{ routeTexts.about[selectedLang] }}
                  </RouterLink>
                </li> -->
                <LanguageChooser class="mobile_language_chooser" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { languageStore } from '@/stores/language.js'
import { articleStore } from '@/stores/articles.js';
import LanguageChooser from '@/components/LanguageChooser.vue';
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { routes } from '@/texts/routes';

const store = languageStore()
const selectedLang = ref(store.language);

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

const windowWidth = ref(window.innerWidth);
const smallScreen = computed(() => windowWidth.value <= 990);
const navPadding = ref(smallScreen.value ? '0' : '1rem 0');

watch(smallScreen, (newVal) => {
  navPadding.value = newVal ? '0' : '1rem 0';
});

const storeArticles = articleStore();
onMounted(async () => {
  const modules = import.meta.glob("@/articles/*.json");
  const loadedArticles = [];

  for (const path in modules) {
    const module = await modules[path]();
    loadedArticles.push({ ...module.default, path });
  }

  storeArticles.list = loadedArticles;
});

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

</script>

<script>
export default {
  name: "App",
  components: {
    LanguageChooser
  },
  data() {
    return {
      clicked: false,
      routeTexts: routes,
    }
  },
  methods: {
    toggleMenuCheckbox() {
      this.clicked = false
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-content: center;
}

html,
body {
  min-height: 100%;
  font-family: "Noto Sans", sans-serif;
  color: #fffdf6;
  overflow: visible;
  scrollbar-width: none;
  background: #2f2061;
}

/* Header Styling */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: #2f2061;
  padding: v-bind('navPadding');
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}

header .wrapper {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav a {
  color: #fffdf6;
  text-decoration: none;
  margin: 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

header nav a:hover {
  color: #FBC145;
}

/* Main Content */
router-view {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 60px);
  /* Full height minus header */
  text-align: center;
}

router-view h1 {
  font-size: 2.5rem;
  color: #FBC145;
}

router-view p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #fffdf6;
  max-width: 600px;
  line-height: 1.5;
}

/* Menu code starts here */

#menuToggle {
  display: block;
  position: fixed;
  top: 2em;
  right: 1em;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  border: 0.1em solid #2f2061;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked~span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #ffffff;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked~span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked~span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  max-width: 600px;
  width: 100vw;
  max-height: 100vh;
  margin: -4em 0 0 -12em;
  padding: 1em;
  box-sizing: border-box;
  overflow-y: auto;
  background: black;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  padding-top: 1.25em;
}

#menu li {
  font-size: 2rem;
}

#menu li label {
  cursor: pointer;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked~ul {
  transform: none;
}

.mobile_language_chooser {
  position: relative;
  margin-top: 0.5em;
  padding-top: 1em;
  margin-left: 1em;
  border-top: 1px dashed rgba(255, 255, 255, 0.15);
  width: 10em;

  .language {
    font-size: 1.4em;
  }
}
</style>
