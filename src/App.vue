<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <LanguageChooser v-show="!isSmallScreen()" />
        <div class="routes">
          <nav v-if="!isSmallScreen()">
            <RouterLink to="/">{{ routeTexts.home[selectedLang] }}</RouterLink>
            <RouterLink to="/about">{{ routeTexts.about[selectedLang] }}</RouterLink>
            <RouterLink to="/projects">{{ routeTexts.projects[selectedLang] }}</RouterLink>
            <RouterLink to="/publications">{{ routeTexts.publications[selectedLang] }}</RouterLink>
            <RouterLink to="/contact">{{ routeTexts.contact[selectedLang] }}</RouterLink>
          </nav>
          <nav role="navigation" v-if="isSmallScreen()">
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
                  <RouterLink to="/about" v-on:click="toggleMenuCheckbox()">{{ routeTexts.about[selectedLang] }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects" v-on:click="toggleMenuCheckbox()">{{ routeTexts.projects[selectedLang] }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/publications" v-on:click="toggleMenuCheckbox()">{{
                    routeTexts.publications[selectedLang] }}</RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact" v-on:click="toggleMenuCheckbox()">{{ routeTexts.contact[selectedLang] }}
                  </RouterLink>
                </li>
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
import LanguageChooser from '@/components/LanguageChooser.vue';
import { ref, watch } from 'vue';
import { routes } from '@/texts/routes';

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
  name: "App",
  components: {
    LanguageChooser
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      clicked: false,
      routeTexts: routes,
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {
    isSmallScreen() {
      return this.windowWidth <= 990
    },
    toggleMenuCheckbox() {
      this.clicked = false
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-content: center;
}

html,
body {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: black;
  color: white;
  overflow: hidden;
  background-image: url('/images/background-stars.png');
}

/* Header Styling */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
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
  color: white;
  text-decoration: none;
  margin: 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

header nav a:hover {
  color: #66B95C;
}

/* Main Content */
router-view {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  /* Full height minus header */
  text-align: center;
}

router-view h1 {
  font-size: 2.5rem;
  color: #66B95C;
}

router-view p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: white;
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
  min-height: 50vh;
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
