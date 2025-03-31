<template>
  <div class="about">
    <div class="about_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">
          {{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="details">
      <div class="col leftcol">
        <div class="pic_container">
          <img src="/images/About.jpeg" alt="profile picture" class="picture">
          <div 
            class="overlay" @click="visitLink('https://www.instagram.com/mari_photo_s')" @mouseover="credit = true" @mouseleave="credit = false">
            <Transition>
              <div class="credit_text" v-if="credit">Photo by @mari_photo_s</div>
            </Transition>
          </div>
          <div class="circle"></div>
        </div>
        
      </div>
      <div class="col rightcol">
        <div class="compentences_wrapper">
          <CompetenceComponent />
        </div>
        <div class="resume" v-html="aboutTexts.resume[selectedLang]"></div>
        <div class="icons">
          <div class="left_icons">
            <DetailComponent icon="youtube" set="fab" link="https://www.youtube.com/@yana.dramova"/>
            <DetailComponent icon="envelope" set="fas" link="textToCopy" copy/>
            <DetailComponent icon="square-pinterest" set="fab" link="https://www.pinterest.com/yanchdramch/"/>
          </div>
          <div class="right_icons">
            <DetailComponent icon="linkedin" set="fab" link="https://www.linkedin.com/in/yana-dramova-86355a293"/>
            <DetailComponent icon="square-facebook" set="fab" link="https://www.facebook.com/share/1561LLKr16/"/>
            <DetailComponent icon="square-instagram" set="fab" link="https://www.instagram.com/galway_girl_04/"/>
          </div>
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

const visitLink = (link:string) => {
  window.open(link, "blank")
}
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
      },
      credit: false,
    };
  },
};
</script>

<style scoped>
.pic_container {
  position:relative;
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture {
  position: relative;
  width: 85%;
  clip-path: circle();
  z-index: 5;
}

.circle {
  position: absolute;
  background: white;
  width: 90%;
  height: 90%;
  clip-path: circle();
  z-index: 1;
}

.overlay {
  position: absolute;
  background-color: #00000000;
  width: 90%;
  height: 90%;
  clip-path: circle();
  z-index: 6;
  transition: background-color 350ms ease-in;
}

.overlay:hover {
  background-color: #FBC14520;
  cursor: pointer;
  transition: background-color 250ms linear;
}

.about {
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  flex-direction: column;
  min-height: 75vh;
  box-sizing: border-box;
  margin-top: 0;
  padding-bottom: 15vh;
}

.about_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
  margin-bottom: 0.5rem;
  padding-left: 4em;
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
  color: #FBC145;
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
  padding-bottom: 2rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
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
  justify-content: center;
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
  font-size: 1.1em;
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

.left_icons{
  display: flex;
  flex-direction: row;
}

.right_icons{
  display: flex;
  flex-direction: row;
}

a {
  padding: 0;
}

.credit_text {
  font-size: 1.2em;
  font-weight: bold;
}

.v-enter-active {
  transition: opacity 450ms ease-in-out;
}

.v-leave-active {
  transition: opacity 250ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
