<template>
  <div class="projects">
    <div class="main_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="project_slider">
      <swiper-container slides-per-view="1" pagination="true" navigation="true">
        <swiper-slide v-for="slide in slides">
          <div class="image_wrapper">
            <img class="slide_image" :src=slide.image :alt=slide.title v-on:click="visitProject(slide.link)">
          </div>
          <div class="slide_details" v-on:mouseover="toggleNavDisable(true)" v-on:mouseleave="toggleNavDisable(false)">
            <div class="slide_title">{{ slide.title[selectedLang] }}</div>
            <div class="slide_text">{{ slide.text[selectedLang] }}</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
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
import { projectSlides } from '@/texts/projectSlides.js'
export default {
  data() {
    return {
      navDisabled: false,
      slides: projectSlides,
      pageTitle: {
        "de": {
          "normal": "Aktuelle ",
          "colored": "Projekte"
        },
        "en": {
          "normal": "Recent ",
          "colored": "Projects"
        },
        "bg": {
          "normal": "Актуални ",
          "colored": "Проекти"
        }
      }
    };
  },
  methods: {
    toggleNavDisable(status) {
      this.navDisabled = status;
    },

    visitProject(link) {
      if (this.navDisabled === false) {
        window.open(link)
      }
    }
  },
};
</script>

<style>
.slide_image {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: .2s ease-in-out;
  top: 0;
  position: relative;
}

.slide_image:hover {
  transform: scale(1.05) translateZ(0);
  cursor: pointer;
}

.image_wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center;
  align-self: baseline;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.slide_details {
  position: absolute;
  left: 0em;
  bottom: 2em;
  width: 90%;
  background-color: #222222;
  border-radius: 0 1em 1em 0;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  padding-bottom: 0.75rem;
  padding-top: 0.25rem;
  max-height: 35%;
}

.slide_title {
  position: relative;
  align-self: flex-start;
  left: 1em;
  font-weight: 700;
  color: #66B95C;
  font-size: 1.1rem;
}

.slide_text {
  position: relative;
  align-self: flex-start;
  left: 1.2em;
  text-align: left;
}

swiper-container {
  width: 100%;
  height: 60vh;
  background: #222;
  border-radius: 2em;
}

swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.projects {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  width: 75vw;
  flex-direction: column;
  max-height: 85vh;
  box-sizing: border-box;
  margin-top: 0;
}

.project_slider {
  position: relative;
  width: 100%;
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
</style>
